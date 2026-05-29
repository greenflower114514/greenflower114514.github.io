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
          <path class="pet-cat-lines pet-cat-tail" d="M48 181c-17-2-31-10-40-23c-7-10-11-22-11-35c0-15 6-27 17-27c10 0 15 11 15 27c0 24 2 41 10 54c6 10 14 16 26 19"></path>
          <g class="pet-cat-body" data-state="idle">
            <path class="pet-cat-lines" d="M52 191c-8-12-13-29-13-48c0-17 4-33 11-47c5-10 10-18 18-26c0-18 4-41 11-55c5-10 12-13 19-4l18 25c11-2 22-2 33 0l18-25c7-9 14-6 19 4c7 14 11 37 11 55c8 8 13 16 18 26c7 14 11 30 11 47c0 19-5 36-13 48c-10 14-26 21-52 21c-25 0-41-7-51-21z"></path>

            <g class="pet-cat-head">
              <g class="pet-cat-eyes">
                <circle class="pet-cat-eye pet-cat-eye-dot" cx="92" cy="86" r="4.4"></circle>
                <circle class="pet-cat-eye pet-cat-eye-dot" cx="122" cy="86" r="4.4"></circle>
              </g>

              <path class="pet-cat-lines" d="M108 99c3 0 5 1 5 3c0 2-2 4-5 6c-3-2-5-4-5-6c0-2 2-3 5-3z"></path>
              <path class="pet-cat-lines" d="M108 104v4"></path>
              <path class="pet-cat-lines" d="M108 109c0 7-4 10-10 10c-5 0-10-3-10-10"></path>
              <path class="pet-cat-lines" d="M108 109c0 7 4 10 10 10c5 0 10-3 10-10"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M46 92h30"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M48 106l30-4"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M136 92h30"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M136 102l30 4"></path>
            </g>

            <path class="pet-cat-lines" d="M86 160c1 13 2 25 4 37"></path>
            <path class="pet-cat-lines" d="M120 160c-1 13-2 25-4 37"></path>
            <path class="pet-cat-lines" d="M87 197c0 5 2 8 6 8"></path>
            <path class="pet-cat-lines" d="M112 205c4 0 6-3 6-8"></path>
            <path class="pet-cat-lines" d="M96 203c0 4 1 6 3 6"></path>
            <path class="pet-cat-lines" d="M106 209c2 0 3-2 3-6"></path>
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
