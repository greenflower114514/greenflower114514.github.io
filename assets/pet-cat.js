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
          <path class="pet-cat-lines pet-cat-tail" d="M48 178c-15-5-31-23-31-46c0-20 8-34 21-34c11 0 17 13 17 34c0 21 0 37 10 48c6 7 13 10 22 10"></path>
          <g class="pet-cat-body" data-state="idle">
            <g class="pet-cat-head">
              <path class="pet-cat-lines" d="M67 74c4-17 10-42 20-54c8-10 17-9 24 2l18 28"></path>
              <path class="pet-cat-lines" d="M133 50l18-28c7-11 16-12 24-2c10 12 16 37 20 54"></path>
              <path class="pet-cat-lines" d="M57 114c1-17 3-28 10-40"></path>
              <path class="pet-cat-lines" d="M143 34c-12-2-28-2-42 0"></path>
              <path class="pet-cat-lines" d="M143 74c7 12 9 23 10 40"></path>

              <g class="pet-cat-eyes">
                <circle class="pet-cat-eye" cx="84" cy="88" r="4.6"></circle>
                <circle class="pet-cat-eye" cx="116" cy="88" r="4.6"></circle>
              </g>

              <path class="pet-cat-lines" d="M96 97c4 0 7 2 7 5c0 3-3 6-7 9c-4-3-7-6-7-9c0-3 3-5 7-5z"></path>
              <path class="pet-cat-lines" d="M88 108c0 8-5 13-12 13c-7 0-12-5-12-13"></path>
              <path class="pet-cat-lines" d="M104 108c0 8 5 13 12 13c7 0 12-5 12-13"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M45 92h27"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M50 106l23-4"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M128 92h27"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M127 102l23 4"></path>
            </g>

            <path class="pet-cat-lines" d="M57 114c-12 16-18 35-18 57c0 26 9 70 61 78"></path>
            <path class="pet-cat-lines" d="M143 114c12 16 18 35 18 57c0 26-9 70-61 78"></path>
            <path class="pet-cat-lines" d="M70 121c-6 15-9 31-9 48c0 43 17 70 39 80"></path>
            <path class="pet-cat-lines" d="M130 121c6 15 9 31 9 48c0 43-17 70-39 80"></path>
            <path class="pet-cat-lines" d="M85 153c1 16 4 35 9 48"></path>
            <path class="pet-cat-lines" d="M115 153c-1 16-4 35-9 48"></path>
            <path class="pet-cat-lines" d="M98 155l2 46l2-46"></path>
            <path class="pet-cat-lines" d="M88 202c0 6 2 9 7 9"></path>
            <path class="pet-cat-lines" d="M105 211c5 0 7-3 7-9"></path>
            <path class="pet-cat-lines" d="M97 211c2 0 3-2 3-5"></path>
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
