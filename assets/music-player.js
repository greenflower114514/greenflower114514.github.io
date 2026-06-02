(function () {
  const root = document.getElementById("music-player");
  if (!root) return;

  const playlistPath = "assets/playlist.json";
  const playerStateKey = "homepage-music-player-collapsed";
  let playlist = [];
  let currentIndex = 0;
  let hasMetadata = false;
  let isCollapsed = false;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${String(secs).padStart(2, "0")}`;
  }

  function normalizeTrackOrder(track) {
    const value = Number(track?.order);
    return Number.isFinite(value) ? value : Number.MAX_SAFE_INTEGER;
  }

  function getCurrentTrack() {
    return playlist[currentIndex] || null;
  }

  function renderShell() {
    root.innerHTML = `
      <section class="music-player" aria-label="Music player">
        <div class="music-player__vinyl" aria-hidden="true">
          <div class="music-player__cover-ring">
            <img class="music-player__cover" src="" alt="">
          </div>
          <svg class="music-player__arm" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M85 8C85 4.686 82.314 2 79 2C75.686 2 73 4.686 73 8C73 10.482 74.506 12.611 76.655 13.533L61.5 39.5" stroke="rgba(238,238,238,0.92)" stroke-width="4" stroke-linecap="round"/>
            <path d="M61.5 39.5L37 57" stroke="rgba(238,238,238,0.92)" stroke-width="4" stroke-linecap="round"/>
            <circle cx="36" cy="58" r="5.5" fill="rgba(238,238,238,0.96)"/>
          </svg>
        </div>
        <div class="music-player__panel">
          <div class="music-player__row">
            <span class="music-player__chip">Playlist</span>
            <div class="music-player__controls">
              <button class="music-player__button music-player__button--prev" type="button" aria-label="Previous track">&lt;</button>
              <button class="music-player__button music-player__button--play" type="button" aria-label="Play track">&gt;</button>
              <button class="music-player__button music-player__button--next" type="button" aria-label="Next track">&gt;&gt;</button>
              <button class="music-player__button music-player__button--collapse" type="button" aria-label="Collapse player">_</button>
            </div>
          </div>
          <div class="music-player__meta">
            <p class="music-player__title">Loading...</p>
            <p class="music-player__artist">Preparing playlist</p>
          </div>
          <div class="music-player__times">
            <span class="music-player__current">0:00</span>
            <span class="music-player__duration">0:00</span>
          </div>
          <input class="music-player__progress" type="range" min="0" max="100" step="0.1" value="0" aria-label="Track progress">
        </div>
        <audio class="music-player__audio" preload="metadata"></audio>
      </section>
    `;
  }

  renderShell();

  const player = root.querySelector(".music-player");
  const cover = root.querySelector(".music-player__cover");
  const title = root.querySelector(".music-player__title");
  const artist = root.querySelector(".music-player__artist");
  const current = root.querySelector(".music-player__current");
  const duration = root.querySelector(".music-player__duration");
  const progress = root.querySelector(".music-player__progress");
  const audio = root.querySelector(".music-player__audio");
  const playButton = root.querySelector(".music-player__button--play");
  const prevButton = root.querySelector(".music-player__button--prev");
  const nextButton = root.querySelector(".music-player__button--next");
  const collapseButton = root.querySelector(".music-player__button--collapse");
  const vinyl = root.querySelector(".music-player__vinyl");

  if (!player || !cover || !title || !artist || !current || !duration || !progress || !audio || !playButton || !prevButton || !nextButton || !collapseButton || !vinyl) {
    return;
  }

  function readCollapsedState() {
    try {
      return localStorage.getItem(playerStateKey) === "collapsed";
    } catch {
      return false;
    }
  }

  function writeCollapsedState(collapsed) {
    try {
      localStorage.setItem(playerStateKey, collapsed ? "collapsed" : "expanded");
    } catch {}
  }

  function syncCollapsedState() {
    player.classList.toggle("is-collapsed", isCollapsed);
    collapseButton.setAttribute("aria-label", isCollapsed ? "Expand player" : "Collapse player");
    vinyl.setAttribute("role", isCollapsed ? "button" : "img");
    vinyl.setAttribute("aria-label", isCollapsed ? "Expand music player" : "Album cover");
    if (!isCollapsed) {
      vinyl.removeAttribute("tabindex");
    } else {
      vinyl.setAttribute("tabindex", "0");
    }
  }

  function setPlayingState(isPlaying) {
    player.classList.toggle("is-playing", isPlaying);
    playButton.textContent = isPlaying ? "||" : ">";
    playButton.setAttribute("aria-label", isPlaying ? "Pause track" : "Play track");
  }

  function syncProgress() {
    const durationValue = audio.duration || 0;
    const currentValue = audio.currentTime || 0;
    const percent = durationValue > 0 ? (currentValue / durationValue) * 100 : 0;
    progress.value = String(percent);
    progress.style.setProperty("--music-player-progress", `${percent}%`);
    current.textContent = formatTime(currentValue);
    duration.textContent = formatTime(durationValue);
  }

  function applyTrack(track, keepPlayback) {
    if (!track) return;

    const shouldResume = keepPlayback && !audio.paused;
    hasMetadata = false;

    title.textContent = track.title || "Untitled";
    artist.textContent = track.artist || "Unknown artist";
    cover.src = track.coverSrc || "";
    cover.alt = track.title ? `${track.title} cover` : "";
    duration.textContent = track.duration || "0:00";
    current.textContent = "0:00";
    progress.value = "0";
    progress.style.setProperty("--music-player-progress", "0%");
    audio.src = track.audioSrc || "";
    audio.load();

    if (shouldResume) {
      audio.play().catch(() => {
        setPlayingState(false);
      });
    } else {
      setPlayingState(false);
    }
  }

  function changeTrack(direction) {
    if (!playlist.length) return;
    currentIndex = (currentIndex + direction + playlist.length) % playlist.length;
    applyTrack(getCurrentTrack(), true);
  }

  playButton.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch {
      setPlayingState(false);
    }
  });

  prevButton.addEventListener("click", () => {
    changeTrack(-1);
  });

  nextButton.addEventListener("click", () => {
    changeTrack(1);
  });

  collapseButton.addEventListener("click", () => {
    isCollapsed = !isCollapsed;
    syncCollapsedState();
    writeCollapsedState(isCollapsed);
  });

  vinyl.addEventListener("click", () => {
    if (!isCollapsed) return;
    isCollapsed = false;
    syncCollapsedState();
    writeCollapsedState(false);
  });

  vinyl.addEventListener("keydown", (event) => {
    if (!isCollapsed) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    isCollapsed = false;
    syncCollapsedState();
    writeCollapsedState(false);
  });

  progress.addEventListener("input", () => {
    progress.style.setProperty("--music-player-progress", `${progress.value}%`);
  });

  progress.addEventListener("change", () => {
    if (!hasMetadata || !audio.duration) return;
    audio.currentTime = (Number(progress.value) / 100) * audio.duration;
    syncProgress();
  });

  audio.addEventListener("loadedmetadata", () => {
    hasMetadata = true;
    syncProgress();
  });

  audio.addEventListener("timeupdate", syncProgress);
  audio.addEventListener("play", () => setPlayingState(true));
  audio.addEventListener("pause", () => setPlayingState(false));
  audio.addEventListener("ended", () => {
    changeTrack(1);
  });

  audio.addEventListener("error", () => {
    playButton.disabled = true;
    playButton.textContent = "x";
    playButton.setAttribute("aria-label", "Audio failed to load");
  });

  fetch(playlistPath)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load playlist");
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data) || !data.length) throw new Error("Playlist is empty");
      playlist = data
        .slice()
        .sort((left, right) => normalizeTrackOrder(left) - normalizeTrackOrder(right));
      currentIndex = 0;
      applyTrack(getCurrentTrack(), false);
    })
    .catch(() => {
      title.textContent = "Playlist unavailable";
      artist.textContent = "Check assets/playlist.json";
      playButton.disabled = true;
      prevButton.disabled = true;
      nextButton.disabled = true;
    });

  progress.style.setProperty("--music-player-progress", "0%");
  isCollapsed = readCollapsedState();
  syncCollapsedState();
  setPlayingState(false);
})();
