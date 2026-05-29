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
          <path class="pet-cat-lines pet-cat-tail" d="M58 182c-16-4-34-22-34-48c0-21 9-37 23-37c12 0 18 14 18 36c0 25 2 41 14 52c6 6 13 9 20 9"></path>
          <g class="pet-cat-body" data-state="idle">
            <g class="pet-cat-head">
              <path class="pet-cat-lines" d="M48 176c-9-12-15-29-15-50c0-18 4-34 12-49c4-7 9-14 15-20c1-18 5-37 11-50c6-12 15-15 24-5l21 29c11-3 23-3 34 0l21-29c9-10 18-7 24 5c6 13 10 32 11 50c6 6 11 13 15 20c8 15 12 31 12 49c0 21-6 38-15 50"></path>

              <g class="pet-cat-eyes">
                <circle class="pet-cat-eye pet-cat-eye-dot" cx="86" cy="89" r="4.4"></circle>
                <circle class="pet-cat-eye pet-cat-eye-dot" cx="114" cy="89" r="4.4"></circle>
              </g>

              <path class="pet-cat-lines" d="M94 100c3 0 6 2 6 4c0 3-2 5-6 7c-4-2-6-4-6-7c0-2 3-4 6-4z"></path>
              <path class="pet-cat-lines" d="M88 107c0 9-5 14-12 14c-7 0-12-5-12-14"></path>
              <path class="pet-cat-lines" d="M100 107c0 9 5 14 12 14c7 0 12-5 12-14"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M39 94h27"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M43 108l24-5"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M122 94h27"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M121 103l24 5"></path>
            </g>

            <path class="pet-cat-lines" d="M79 153c1 16 4 34 8 46"></path>
            <path class="pet-cat-lines" d="M121 153c-1 16-4 34-8 46"></path>
            <path class="pet-cat-lines" d="M96 156l2 43l2-43"></path>
            <path class="pet-cat-lines" d="M82 198c0 6 2 9 7 9"></path>
            <path class="pet-cat-lines" d="M111 207c5 0 7-3 7-9"></path>
            <path class="pet-cat-lines" d="M97 207c3 0 4-2 4-5"></path>
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
    const headRotate = normalX * 2.2;

    state.node.style.setProperty("--pet-cat-eye-offset-x", `${eyeX.toFixed(2)}px`);
    state.node.style.setProperty("--pet-cat-eye-offset-y", `${eyeY.toFixed(2)}px`);
    state.node.style.setProperty("--pet-cat-head-rotate", `${headRotate.toFixed(2)}deg`);
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
