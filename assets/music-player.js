(function () {
  const root = document.getElementById("music-player");
  if (!root) return;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  const track = {
    title: "Aurora Loop",
    artist: "Homepage Demo",
    audioSrc: "assets/music/track.wav",
    coverSrc: "assets/music/cover.svg"
  };

  root.innerHTML = `
    <section class="music-player" aria-label="Music player">
      <div class="music-player__controls">
        <span class="music-player__chip">Now Playing</span>
        <button class="music-player__button" type="button" aria-label="Play track">&gt;</button>
        <div class="music-player__meta">
          <p class="music-player__title">${escapeHtml(track.title)}</p>
          <p class="music-player__artist">${escapeHtml(track.artist)}</p>
        </div>
        <div class="music-player__times">
          <span class="music-player__current">0:00</span>
          <span class="music-player__duration">0:00</span>
        </div>
        <input class="music-player__progress" type="range" min="0" max="100" step="0.1" value="0" aria-label="Track progress">
      </div>
      <div class="music-player__vinyl" aria-hidden="true">
        <div class="music-player__cover-ring">
          <img class="music-player__cover" src="${escapeHtml(track.coverSrc)}" alt="">
        </div>
        <svg class="music-player__arm" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M85 8C85 4.686 82.314 2 79 2C75.686 2 73 4.686 73 8C73 10.482 74.506 12.611 76.655 13.533L61.5 39.5" stroke="rgba(238,238,238,0.92)" stroke-width="4" stroke-linecap="round"/>
          <path d="M61.5 39.5L37 57" stroke="rgba(238,238,238,0.92)" stroke-width="4" stroke-linecap="round"/>
          <circle cx="36" cy="58" r="5.5" fill="rgba(238,238,238,0.96)"/>
        </svg>
      </div>
      <audio class="music-player__audio" preload="metadata" src="${escapeHtml(track.audioSrc)}"></audio>
    </section>
  `;

  const player = root.querySelector(".music-player");
  const button = root.querySelector(".music-player__button");
  const progress = root.querySelector(".music-player__progress");
  const current = root.querySelector(".music-player__current");
  const duration = root.querySelector(".music-player__duration");
  const audio = root.querySelector(".music-player__audio");

  if (!player || !button || !progress || !current || !duration || !audio) return;

  let hasMetadata = false;

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${String(secs).padStart(2, "0")}`;
  }

  function setPlayingState(isPlaying) {
    player.classList.toggle("is-playing", isPlaying);
    button.textContent = isPlaying ? "||" : ">";
    button.setAttribute("aria-label", isPlaying ? "Pause track" : "Play track");
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

  button.addEventListener("click", async () => {
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
    setPlayingState(false);
    syncProgress();
  });

  audio.addEventListener("error", () => {
    button.disabled = true;
    button.textContent = "x";
    button.setAttribute("aria-label", "Audio failed to load");
  });

  progress.style.setProperty("--music-player-progress", "0%");
  setPlayingState(false);
})();
