import { allDrops, allPokemon } from "./database.js";

const URLInfo = new URLSearchParams(window.location.search);
const selectedDrops = allDrops.find((e) => e.name == URLInfo.get("drop"));
console.log(selectedDrops.name);
const dropTitle = document.querySelector("section#drop h2");
const dropImg = document.querySelector("#infoList img");
const dropValue = document.querySelector("#infoList .value");
const dropRarity = document.querySelector("#infoList .rarity");
const dropType = document.querySelector("#infoList .type");
dropTitle.innerText = selectedDrops.name;
dropImg.src = selectedDrops.sprite;
dropValue.innerText = `$${selectedDrops.Value}`;
dropRarity.innerText = selectedDrops.Rarity;
dropType.innerText = selectedDrops.type;
const description = document.querySelector("#dropDescription");
description.innerText = selectedDrops.description;
const dropListTitle = document.querySelector("#dropListTitle span");
dropListTitle.innerText = selectedDrops.name;
const dropList = document.getElementById("dropList");
allPokemon.forEach((e) => {
  const correctPokemon = e.drops.find((sear) => sear == selectedDrops.name);
  if (correctPokemon) {
    let newPokemon = document.createElement("li");
    let newHref = document.createElement("a");
    let newImg = document.createElement("img");
    let newName = document.createElement("span");
    dropList.appendChild(newPokemon);
    newPokemon.appendChild(newHref);
    newHref.appendChild(newImg);
    newHref.appendChild(newName);
    newPokemon.style.background = `var(--${e.types[0]})`;
    newHref.href = `pokemon.html?id=${e.numberDex}`;
    newImg.src = e.sprite;
    newName.innerText = e.name;
    document.body.style.setProperty(
      "--principal-color",
      `var(--${e.types[0]})`
    );
  }
});
