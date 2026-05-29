(function () {
  const petId = "site-pet-cat";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const state = {
    mode: "idle",
    pointer: {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.55
    },
    frameId: 0,
    node: null
  };

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function createPetMarkup() {
    return `
      <svg viewBox="0 0 200 218" role="img" aria-label="A rounded line-drawn cat resting at the corner of the page.">
        <ellipse class="pet-cat-shadow" cx="100" cy="206" rx="57" ry="10"></ellipse>
        <g class="pet-cat-character">
          <path class="pet-cat-lines pet-cat-tail" d="M50 182c-16-3-30-10-40-22c-9-10-13-23-13-37c0-18 8-31 21-31c11 0 17 12 17 31c0 23 1 39 9 52c6 10 16 16 30 17"></path>
          <g class="pet-cat-body" data-state="idle">
            <path class="pet-cat-lines" d="M46 194c-8-12-13-29-13-49c0-18 4-35 11-49c5-10 11-19 18-27c0-17 4-42 12-58c6-11 14-14 22-4l19 27c10-2 21-2 31 0l19-27c8-10 16-7 22 4c8 16 12 41 12 58c7 8 13 17 18 27c7 14 11 31 11 49c0 20-5 37-13 49c-10 15-27 22-52 22s-42-7-52-22"></path>

            <g class="pet-cat-head">
              <g class="pet-cat-eyes">
                <circle class="pet-cat-eye pet-cat-eye-dot" cx="90" cy="86" r="4.5"></circle>
                <circle class="pet-cat-eye pet-cat-eye-dot" cx="118" cy="86" r="4.5"></circle>
              </g>

              <path class="pet-cat-lines" d="M104 97c3 0 6 2 6 5c0 2-2 4-6 7c-4-3-6-5-6-7c0-3 3-5 6-5z"></path>
              <path class="pet-cat-lines" d="M104 104v6"></path>
              <path class="pet-cat-lines" d="M104 110c0 8-5 12-11 12c-6 0-11-4-11-12"></path>
              <path class="pet-cat-lines" d="M104 110c0 8 5 12 11 12c6 0 11-4 11-12"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M46 92h28"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M50 106l27-4"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M126 92h28"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M126 102l27 4"></path>
            </g>

            <path class="pet-cat-lines" d="M77 151c1 17 4 37 8 50"></path>
            <path class="pet-cat-lines" d="M123 151c-1 17-4 37-8 50"></path>
            <path class="pet-cat-lines" d="M99 154l1.5 47l1.5-47"></path>
            <path class="pet-cat-lines" d="M79 201c0 6 2 9 7 9"></path>
            <path class="pet-cat-lines" d="M114 210c5 0 7-3 7-9"></path>
            <path class="pet-cat-lines" d="M100 210c3 0 4-2 4-5"></path>
          </g>
        </g>
      </svg>
    `;
  }

  function setRoleMode(mode) {
    state.mode = mode;
    if (state.node) {
      state.node.dataset.mode = mode;
    }
  }

  function readCharacterCenter() {
    if (!state.node) return null;
    const bounds = state.node.getBoundingClientRect();
    return {
      x: bounds.left + bounds.width * 0.5,
      y: bounds.top + bounds.height * 0.34
    };
  }

  function applyLookState() {
    state.frameId = 0;
    if (!state.node || reducedMotion.matches) return;

    const center = readCharacterCenter();
    if (!center) return;

    const offsetX = state.pointer.x - center.x;
    const offsetY = state.pointer.y - center.y;
    const normalX = clamp(offsetX / Math.max(window.innerWidth * 0.46, 1), -1, 1);
    const normalY = clamp(offsetY / Math.max(window.innerHeight * 0.46, 1), -1, 1);
    const eyeX = normalX * 2.4;
    const eyeY = normalY * 1.8;
    state.node.style.setProperty("--pet-cat-eye-offset-x", `${eyeX.toFixed(2)}px`);
    state.node.style.setProperty("--pet-cat-eye-offset-y", `${eyeY.toFixed(2)}px`);
    state.node.style.setProperty("--pet-cat-head-rotate", "0deg");
    setRoleMode("look");
  }

  function queueLookState() {
    if (state.frameId || reducedMotion.matches) return;
    state.frameId = window.requestAnimationFrame(applyLookState);
  }

  function resetLookState() {
    if (!state.node) return;
    state.pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.55
    };
    state.node.style.setProperty("--pet-cat-eye-offset-x", "0px");
    state.node.style.setProperty("--pet-cat-eye-offset-y", "0px");
    state.node.style.setProperty("--pet-cat-head-rotate", "0deg");
    setRoleMode("idle");
  }

  function handlePointerMove(event) {
    state.pointer = { x: event.clientX, y: event.clientY };
    queueLookState();
  }

  function handlePointerLeave() {
    resetLookState();
  }

  function handleResize() {
    if (state.pointer.x > window.innerWidth || state.pointer.y > window.innerHeight) {
      resetLookState();
      return;
    }
    queueLookState();
  }

  function bindPointerInput() {
    if (window.__petCatInputBound) return;
    window.__petCatInputBound = true;

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", handleResize, { passive: true });

    if (typeof reducedMotion.addEventListener === "function") {
      reducedMotion.addEventListener("change", () => {
        if (reducedMotion.matches) {
          resetLookState();
        } else {
          queueLookState();
        }
      });
    }
  }

  function initRoleState() {
    setRoleMode("idle");
    resetLookState();
  }

  function initPetCat() {
    if (!document.body || document.getElementById(petId)) return;

    state.node = document.createElement("div");
    state.node.id = petId;
    state.node.setAttribute("aria-hidden", "true");
    state.node.innerHTML = createPetMarkup();
    document.body.appendChild(state.node);

    bindPointerInput();
    initRoleState();
    queueLookState();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPetCat, { once: true });
  } else {
    initPetCat();
  }
})();
