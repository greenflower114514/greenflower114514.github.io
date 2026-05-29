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
          <path class="pet-cat-lines pet-cat-tail" d="M42 183c-15-4-28-12-37-24c-8-10-12-22-12-36c0-17 7-30 20-30c11 0 16 11 16 29c0 22 1 37 8 49c6 10 14 16 26 18"></path>
          <g class="pet-cat-body" data-state="idle">
            <path class="pet-cat-lines" d="M47 194c-8-12-13-29-13-48c0-18 4-34 11-48c5-10 10-18 17-26c0-17 4-41 12-56c6-11 13-14 21-4l18 26c11-2 23-2 34 0l18-26c8-10 15-7 21 4c8 15 12 39 12 56c7 8 12 16 17 26c7 14 11 30 11 48c0 19-5 36-13 48c-10 16-26 24-51 24s-41-8-51-24"></path>

            <g class="pet-cat-head">
              <g class="pet-cat-eyes">
                <circle class="pet-cat-eye pet-cat-eye-dot" cx="94" cy="86" r="4.5"></circle>
                <circle class="pet-cat-eye pet-cat-eye-dot" cx="122" cy="86" r="4.5"></circle>
              </g>

              <path class="pet-cat-lines" d="M108 97c3 0 6 2 6 5c0 2-2 4-6 7c-4-3-6-5-6-7c0-3 3-5 6-5z"></path>
              <path class="pet-cat-lines" d="M108 104v6"></path>
              <path class="pet-cat-lines" d="M108 110c0 8-5 12-11 12c-6 0-11-4-11-12"></path>
              <path class="pet-cat-lines" d="M108 110c0 8 5 12 11 12c6 0 11-4 11-12"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M50 92h28"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M54 106l27-4"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M130 92h28"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M130 102l27 4"></path>
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
