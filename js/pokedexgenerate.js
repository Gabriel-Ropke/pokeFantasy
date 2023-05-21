import { allPokemon } from "./database.js";
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
  pokeCard.style.background = `var(--${allPokemon[i].types[0]})`;
  pokeHref.href = "pokemon.html";
  name.innerText = allPokemon[i].name;
  number.innerText = allPokemon[i].numberDex;
  pokeImg.src = allPokemon[i].sprite;

  for (let ii = 0; ii < allPokemon[i].types.length; ii++) {
    let type = document.createElement("span");
    type.classList.add("type");
    type.innerText = allPokemon[i].types[ii];
    type.style.background = `var(--${allPokemon[i].types[ii]})`;
    types.appendChild(type);
    console.log(allPokemon[i].name + allPokemon[i].types[0]);
  }
}
