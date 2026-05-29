(function () {
  const petId = "site-pet-cat";

  function createPetMarkup() {
    return `
      <svg viewBox="0 0 164 164" role="img" aria-label="A small line-drawn cat resting at the corner of the page.">
        <ellipse class="pet-cat-shadow" cx="82" cy="150" rx="34" ry="8"></ellipse>
        <g class="pet-cat-float">
          <path class="pet-cat-lines pet-cat-soft pet-cat-tail" d="M111 112c17 5 25 18 18 29c-4 6-11 8-17 5"></path>
          <path class="pet-cat-lines pet-cat-head" d="M56 66l8-16l16 12"></path>
          <path class="pet-cat-lines pet-cat-head" d="M108 66l-8-16l-16 12"></path>
          <circle class="pet-cat-lines pet-cat-head" cx="82" cy="80" r="28"></circle>
          <path class="pet-cat-lines pet-cat-blink" d="M70 78h7"></path>
          <path class="pet-cat-lines pet-cat-blink" d="M87 78h7"></path>
          <path class="pet-cat-lines" d="M79 88c2 2 4 2 6 0"></path>
          <path class="pet-cat-lines pet-cat-soft" d="M72 88l-13-2"></path>
          <path class="pet-cat-lines pet-cat-soft" d="M72 92l-15 2"></path>
          <path class="pet-cat-lines pet-cat-soft" d="M92 88l13-2"></path>
          <path class="pet-cat-lines pet-cat-soft" d="M92 92l15 2"></path>
          <path class="pet-cat-lines" d="M62 108c4 10 14 18 30 18s26-8 30-18"></path>
          <path class="pet-cat-lines" d="M68 104c-6 8-9 18-8 29"></path>
          <path class="pet-cat-lines" d="M96 104c6 8 9 18 8 29"></path>
          <path class="pet-cat-lines pet-cat-soft" d="M72 132v11"></path>
          <path class="pet-cat-lines pet-cat-soft" d="M92 132v11"></path>
        </g>
      </svg>
    `;
  }

  function initPetCat() {
    if (!document.body || document.getElementById(petId)) return;

    const pet = document.createElement("div");
    pet.id = petId;
    pet.setAttribute("aria-hidden", "true");
    pet.innerHTML = createPetMarkup();
    document.body.appendChild(pet);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPetCat, { once: true });
  } else {
    initPetCat();
  }
})();
