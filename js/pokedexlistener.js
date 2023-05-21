const generalCards = document.querySelectorAll(".poke-card");

generalCards.forEach((e) => {
  e.addEventListener("click", () => {
    localStorage.setItem("selectedPokemon", e.id);
  });
});
