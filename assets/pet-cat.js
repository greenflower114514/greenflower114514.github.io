(function () {
  const petId = "site-pet-cat";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let trackedPointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.6 };
  let latestPointer = trackedPointer;
  let rafId = 0;
  let petNode = null;

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function createPetMarkup() {
    return `
      <svg viewBox="0 0 192 214" role="img" aria-label="A rounded line-drawn cat resting at the corner of the page.">
        <ellipse class="pet-cat-shadow" cx="96" cy="202" rx="54" ry="11"></ellipse>
        <g class="pet-cat-float">
          <path class="pet-cat-lines pet-cat-tail" d="M48 176c-17-6-29-24-29-44c0-17 7-30 18-30c10 0 16 12 16 31c0 17-2 31 6 40c4 5 10 8 16 8"></path>
          <g class="pet-cat-body-bob">
            <path class="pet-cat-lines pet-cat-fill-soft" d="M38 110c0-18 8-35 19-48c0-24 7-57 18-72c7-10 16-8 23 2l20 28c11-2 24-2 36 0l20-28c7-10 16-12 23-2c11 15 18 48 18 72c11 13 19 30 19 48c0 26-14 74-52 83c-12 3-28 5-48 5s-36-2-48-5c-38-9-52-57-52-83z"></path>
            <g class="pet-cat-head-track">
              <path class="pet-cat-lines" d="M57 62l20-42c7-10 16-8 23 2l20 28"></path>
              <path class="pet-cat-lines" d="M135 50l20-28c7-10 16-12 23-2l20 42"></path>
              <ellipse class="pet-cat-lines pet-cat-fill-soft" cx="76" cy="84" rx="5" ry="7"></ellipse>
              <ellipse class="pet-cat-lines pet-cat-fill-soft" cx="116" cy="84" rx="5" ry="7"></ellipse>
              <path class="pet-cat-lines" d="M92 104c0 8-6 14-14 14c-8 0-14-6-14-14"></path>
              <path class="pet-cat-lines" d="M100 104c0 8 6 14 14 14c8 0 14-6 14-14"></path>
              <path class="pet-cat-lines pet-cat-fill-soft" d="M88 94c0-4 3-6 8-6s8 2 8 6c0 3-3 6-8 9c-5-3-8-6-8-9z"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M44 88h28"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M38 101l30-5"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M148 88h28"></path>
              <path class="pet-cat-lines pet-cat-whisker" d="M154 101l-30-5"></path>
            </g>
            <path class="pet-cat-lines" d="M76 150c1 16 4 35 9 48"></path>
            <path class="pet-cat-lines" d="M116 150c-1 16-4 35-9 48"></path>
            <path class="pet-cat-lines" d="M92 152l4 44l4-44"></path>
            <path class="pet-cat-lines" d="M80 196c0 6 2 9 7 9"></path>
            <path class="pet-cat-lines" d="M104 205c5 0 7-3 7-9"></path>
            <path class="pet-cat-lines" d="M94 205c3 0 4-2 4-6"></path>
            <path class="pet-cat-lines" d="M165 109c11 13 19 30 19 48c0 26-14 74-52 83"></path>
            <path class="pet-cat-lines" d="M27 157c0 26 14 64 52 73"></path>
          </g>
        </g>
      </svg>
    `;
  }

  function applyHeadTracking() {
    rafId = 0;
    if (!petNode || reducedMotion.matches) return;

    const bounds = petNode.getBoundingClientRect();
    const centerX = bounds.left + bounds.width * 0.5;
    const centerY = bounds.top + bounds.height * 0.38;
    const offsetX = latestPointer.x - centerX;
    const offsetY = latestPointer.y - centerY;
    const normalizedX = clamp(offsetX / Math.max(window.innerWidth * 0.45, 1), -1, 1);
    const normalizedY = clamp(offsetY / Math.max(window.innerHeight * 0.45, 1), -1, 1);
    const rotate = normalizedX * 10;
    const shiftX = normalizedX * 4.5;
    const shiftY = normalizedY * 2.4;

    petNode.style.setProperty("--pet-cat-head-rotate", `${rotate.toFixed(2)}deg`);
    petNode.style.setProperty("--pet-cat-head-shift-x", `${shiftX.toFixed(2)}px`);
    petNode.style.setProperty("--pet-cat-head-shift-y", `${shiftY.toFixed(2)}px`);
  }

  function queueHeadTracking() {
    if (rafId || reducedMotion.matches) return;
    rafId = window.requestAnimationFrame(applyHeadTracking);
  }

  function handlePointerMove(event) {
    latestPointer = { x: event.clientX, y: event.clientY };
    queueHeadTracking();
  }

  function resetHeadTracking() {
    if (!petNode) return;
    latestPointer = trackedPointer;
    petNode.style.setProperty("--pet-cat-head-rotate", "0deg");
    petNode.style.setProperty("--pet-cat-head-shift-x", "0px");
    petNode.style.setProperty("--pet-cat-head-shift-y", "0px");
  }

  function handleResize() {
    trackedPointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.6 };
    if (latestPointer.x > window.innerWidth || latestPointer.y > window.innerHeight) {
      latestPointer = trackedPointer;
    }
    queueHeadTracking();
  }

  function bindHeadTracking() {
    if (window.__petCatTrackingBound) return;
    window.__petCatTrackingBound = true;

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("pointerleave", resetHeadTracking);
    if (typeof reducedMotion.addEventListener === "function") {
      reducedMotion.addEventListener("change", () => {
        if (reducedMotion.matches) {
          resetHeadTracking();
          return;
        }
        queueHeadTracking();
      });
    }
  }

  function initPetCat() {
    if (!document.body || document.getElementById(petId)) return;

    petNode = document.createElement("div");
    petNode.id = petId;
    petNode.setAttribute("aria-hidden", "true");
    petNode.innerHTML = createPetMarkup();
    document.body.appendChild(petNode);

    bindHeadTracking();
    queueHeadTracking();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPetCat, { once: true });
  } else {
    initPetCat();
  }
})();
