const moveset = document.getElementById("moveset");
const movesetClose = document.querySelector("#moveset p");
const moves = document.querySelectorAll("#moveset ul li");
const move = document.getElementById("move");
const moveClose = document.querySelector("#move b");
movesetClose.addEventListener("click", () => {
  moveset.classList.toggle("closed");
});
moves.forEach((e) => {
  e.addEventListener("click", () => {
    move.classList.remove("closed");
  });
});
moveClose.addEventListener("click", () => {
  move.classList.toggle("closed");
  localStorage.setItem("moveView", closed);
});
const evolutionListener = document.querySelectorAll("#evolutionary img");
evolutionListener.forEach((e) => {
  e.addEventListener("click", () => {
    localStorage.setItem("selectedPokemon", e.id);
  });
});
