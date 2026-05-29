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
          <path class="pet-cat-lines pet-cat-tail" d="M48 181c-17-2-31-10-40-23c-7-10-11-22-11-35c0-15 6-27 17-27c10 0 15 11 15 27c0 26 2 44 10 57c6 10 14 16 26 19"></path>
          <g class="pet-cat-body" data-state="idle">
            <path class="pet-cat-lines" d="M50 192c-9-12-14-30-14-52c0-17 4-33 11-47c5-10 11-18 17-25c0-18 4-42 11-56c5-10 12-13 19-5l18 26c12-2 24-2 36 0l18-26c7-8 14-5 19 5c7 14 11 38 11 56c6 7 12 15 17 25c7 14 11 30 11 47c0 22-5 40-14 52c-10 14-26 21-50 21s-40-7-50-21"></path>

            <g class="pet-cat-head">
              <g class="pet-cat-eyes">
                <circle class="pet-cat-eye pet-cat-eye-dot" cx="94" cy="86" r="4.5"></circle>
                <circle class="pet-cat-eye pet-cat-eye-dot" cx="118" cy="86" r="4.5"></circle>
              </g>

              <path class="pet-cat-lines" d="M106 98c3 0 6 2 6 4c0 3-3 5-6 7c-3-2-6-4-6-7c0-2 3-4 6-4z"></path>
              <path class="pet-cat-lines" d="M106 104v6"></path>
              <path class="pet-cat-lines" d="M106 110c0 8-5 12-11 12c-6 0-11-4-11-12"></path>
              <path class="pet-cat-lines" d="M106 110c0 8 5 12 11 12c6 0 11-4 11-12"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M53 93h27"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M56 106l26-4"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M132 93h27"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M130 102l26 4"></path>
            </g>

            <path class="pet-cat-lines" d="M89 152c1 16 3 34 6 48"></path>
            <path class="pet-cat-lines" d="M129 152c-1 16-3 34-6 48"></path>
            <path class="pet-cat-lines" d="M101 154l4 46l4-46"></path>
            <path class="pet-cat-lines" d="M91 200c0 6 2 9 7 9"></path>
            <path class="pet-cat-lines" d="M120 209c5 0 7-3 7-9"></path>
            <path class="pet-cat-lines" d="M105 209c2 0 4-2 4-5"></path>
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
