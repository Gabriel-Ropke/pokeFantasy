import { allPokemon } from "./database/database.js";
console.log(allPokemon.length);
const pokedex = document.getElementById("pokedex");

for (let i = 0; i < allPokemon.length; i++) {
  let pokeCard = document.createElement("article");
  let pokeHref = document.createElement("a");
  let top = document.createElement("div");
  let name = document.createElement("span");
  let number = document.createElement("span");
  let containerImg = document.createElement("div");
  let pokeImg = document.createElement("img");
  let types = document.createElement("div");
  pokedex.appendChild(pokeCard);
  pokeCard.id = Math.floor(allPokemon[i].numberDex);
  pokeCard.classList.add("poke-card");
  top.classList.add("top");
  name.classList.add("name");
  number.classList.add("number");
  types.classList.add("types");
  containerImg.classList.add("image");
  pokeCard.appendChild(pokeHref);
  pokeHref.appendChild(top);
  top.appendChild(name);
  top.appendChild(number);
  pokeHref.appendChild(containerImg);
  containerImg.append(pokeImg);
  pokeHref.appendChild(types);
  pokeCard.style.background = `rgba(var(--${allPokemon[i].types[0]}))`;
  pokeHref.href = `pokemon.html?id=${allPokemon[i].numberDex}`;
  name.innerText = allPokemon[i].name;
  number.innerText = `#${allPokemon[i].numberDex}`;
  pokeImg.src = allPokemon[i].animated;

  for (let ii = 0; ii < allPokemon[i].types.length; ii++) {
    let type = document.createElement("span");
    type.classList.add("type");
    type.innerText = allPokemon[i].types[ii];
    type.style.background = `rgba(var(--${allPokemon[i].types[ii]}))`;
    types.appendChild(type);
    console.log(allPokemon[i].name + allPokemon[i].types[0]);
  }
}
const selectionPages = document.querySelectorAll("#selection h2");
const pokemonPage = document.getElementById("pokedex");
const movePage = document.getElementById("movedex");
const dropPage = document.getElementById("dropdex");
const abilityPage = document.getElementById("abilitydex");
function closePages() {
  pokedex.classList.add("inactive");
  movePage.classList.add("inactive");
  dropPage.classList.add("inactive");
  abilityPage.classList.add("inactive");
}
selectionPages.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("active");
    console.log(e.id);
    if (e.id == "pokemonPage") {
      closePages();
      pokemonPage.classList.remove("inactive");
    }
    if (e.id == "movePage") {
      closePages();
      movePage.classList.remove("inactive");
    }
    if (e.id == "dropPage") {
      closePages();
      dropPage.classList.remove("inactive");
    }
    if (e.id == "abilityPage") {
      closePages();
      abilityPage.classList.remove("inactive");
    }
    selectionPages.forEach((elm) => {
      if (elm.id == e.id) {
        elm.classList.add("active");
      } else {
        elm.classList.remove("active");
      }
    });
  });
});
