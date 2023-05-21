import {
  allDrops,
  allMoveInfo,
  allMoves,
  allPokemon,
  allResps,
  allStats,
  allWeakness,
} from "./database.js";

const selectedPokemon = allPokemon.find(
  (e) => Math.floor(e.numberDex) == localStorage.getItem("selectedPokemon")
);
console.log(selectedPokemon.moves.length);
const moveset = document.querySelector("#moveset ul");
for (let i = 0; i < selectedPokemon.moves.length; i++) {
  let searchMove = allMoves.find((e) => e.name == selectedPokemon.moves[i]);
  let newMove = document.createElement("li");
  let newMoveName = document.createElement("span");
  let newMoveImg = document.createElement("img");
  moveset.appendChild(newMove);
  newMove.appendChild(newMoveImg);
  newMove.appendChild(newMoveName);
  newMove.style.background = `var(--${searchMove.type})`;
  newMoveName.innerText = searchMove.name;
  newMoveImg.src = searchMove.moveSource;
}
const moves = document.querySelectorAll("#moveset ul li");
const moveInfo = document.getElementById("moveInfo");
const moveInfoName = document.getElementById("moveName");
const moveInfoList = document.querySelector("#moveInfo ul");
const moveInfoCatType = document.getElementById("catType");
const moveInfoDescription = document.getElementById("description");
const moveInfoEffects = document.getElementById("effects");
moves.forEach((e) => {
  e.addEventListener("click", () => {
    const searchMoveInfo = allMoves.find((elm) => elm.name == e.innerText);
    moveInfoList.innerHTML = "";
    moveInfoCatType.innerHTML = "";
    let newCategory = document.createElement("img");
    let newType = document.createElement("span");
    newCategory.src = searchMoveInfo.categorySource;
    newType.innerText = searchMoveInfo.type;
    moveInfoName.innerText = searchMoveInfo.name;
    moveInfoDescription.innerText = searchMoveInfo.description;
    moveInfoEffects.innerText = searchMoveInfo.effects;
    newType.style.background = `var(--${searchMoveInfo.type})`;
    moveInfoName.style.color = `var(--${searchMoveInfo.type})`;
    moveInfo.style.borderColor = `var(--${searchMoveInfo.type})`;
    moveInfoCatType.appendChild(newCategory);
    moveInfoCatType.appendChild(newType);
    for (let i = 0; i < allMoveInfo.length; i++) {
      let newMoveItem = document.createElement("li");
      let newMoveAttribute = document.createElement("span");
      let newMoveAttributeNumber = document.createElement("span");
      moveInfoList.appendChild(newMoveItem);
      newMoveItem.appendChild(newMoveAttribute);
      newMoveItem.appendChild(newMoveAttributeNumber);
      newMoveAttribute.innerText = allMoveInfo[i];
      newMoveAttributeNumber.innerText = searchMoveInfo.attributes[i];
      newMoveAttributeNumber.style.color = `var(--${searchMoveInfo.type})`;
    }
    console.log(searchMoveInfo);
  });
});
const type = selectedPokemon.types[0];
document.body.style.setProperty("--principal-color", `var(--${type})`);
const principalTitle = document.querySelector("#top h1");
const previewPokemon = document.querySelector("#preview a p");
const nextPokemon = document.querySelector("#next a p");
const preview = allPokemon.find(
  (e) => e.numberDex == Math.floor(selectedPokemon.numberDex) - 1
);
const next = allPokemon.find(
  (e) => e.numberDex == Math.floor(selectedPokemon.numberDex) + 1
);
if (Math.floor(selectedPokemon.numberDex) == 1) {
  nextPokemon.innerText = `${next.name} #${next.numberDex} `;
} else if (Math.floor(selectedPokemon.numberDex) == allPokemon.length) {
  previewPokemon.innerText = `${preview.name} #${preview.numberDex} `;
} else {
  nextPokemon.innerText = `${next.name} #${next.numberDex} `;
  previewPokemon.innerText = `${preview.name} #${preview.numberDex} `;
}
principalTitle.innerText = selectedPokemon.name;
/* General Info */
const firstImg = document.querySelector(".pseudo-list img");
const species = document.querySelector(".species");
const types = document.querySelector(".types");
const abilities = document.querySelector(".abilities");
const catchRate = document.querySelector(".catch-rate");
const pokeWidth = document.querySelector(".width");
const pokeHeight = document.querySelector(".height");
const evYield = document.querySelector(".ev-yield");
const weakness = document.querySelector("#weakness ul");
firstImg.src = selectedPokemon.sprite;
firstImg.style.background = `var(--${type})`;
species.innerText = selectedPokemon.species;
for (let i = 0; i < selectedPokemon.types.length; i++) {
  let newType = document.createElement("p");
  newType.innerText = selectedPokemon.types[i];
  newType.style.background = `var(--${selectedPokemon.types[i]})`;

  types.appendChild(newType);
}
abilities.innerText = selectedPokemon.abilities;
catchRate.innerText = selectedPokemon.catchRate;
pokeWidth.innerText = selectedPokemon.width;
pokeHeight.innerText = selectedPokemon.height;
evYield.innerText = selectedPokemon.evYield;
for (let i = 0; i < allWeakness.length; i++) {
  let newWeak = document.createElement("li");
  let newWeakTitle = document.createElement("span");
  let newWeakness = document.createElement("span");
  weakness.appendChild(newWeak);
  newWeak.appendChild(newWeakTitle);
  newWeak.appendChild(newWeakness);
  newWeak.style.background = `var(--${allWeakness[i].name})`;
  newWeakTitle.innerText = allWeakness[i].name;
  const weak = allWeakness.find((e) => e.name == selectedPokemon.types[0]);
  if (selectedPokemon.types.length > 1) {
    const weak2 = allWeakness.find((e) => e.name == selectedPokemon.types[1]);
    let newType = weak.Weakness[i] * weak2.Weakness[i];
    newWeakness.innerText = `${newType}x`;
  } else {
    newWeakness.innerText = `${weak.Weakness[i]}x`;
  }
}

/* Alternative Forms & Evolutionary */
const normalForm = document.querySelector("#alternative .normal");
const shinyForm = document.querySelector("#alternative .shiny");

normalForm.src = selectedPokemon.sprite;
shinyForm.src = selectedPokemon.shinySprite;

const evolutionary = document.getElementById("evolutionary");
for (let i = 0; i < selectedPokemon.evolutionary.length; i++) {
  const evolution = allPokemon.find(
    (e) => e.name == selectedPokemon.evolutionary[i]
  );
  let newEvoHref = document.createElement("a");
  let newEvo = document.createElement("img");
  newEvoHref.appendChild(newEvo);
  newEvoHref.href = "pokemon.html";
  newEvo.src = evolution.sprite;
  newEvo.id = evolution.numberDex;
  evolutionary.appendChild(newEvoHref);
}
/* Stats */
const stats = document.querySelector("#stats ul");

for (let i = 0; i < selectedPokemon.stats.length; i++) {
  let newStat = document.createElement("li");
  let newStatName = document.createElement("span");
  let newStatNumber = document.createElement("span");
  let newBarOut = document.createElement("div");
  let newBarIn = document.createElement("div");
  stats.appendChild(newStat);
  newStat.appendChild(newStatName);
  newStat.appendChild(newStatNumber);
  newStat.appendChild(newBarOut);
  newBarOut.appendChild(newBarIn);
  newStatName.classList.add("stats-name");
  newBarOut.classList.add("bar-out");
  newBarIn.classList.add("bar-in");
  newStatName.innerText = allStats[i];
  newStatNumber.innerText = selectedPokemon.stats[i];
  newBarIn.style.width = `${selectedPokemon.stats[i] / 2}%`;
  newBarIn.style.background = `var(--${type})`;
}

/* Drops */
const drops = document.querySelector("#drops ul");
for (let i = 0; i < selectedPokemon.drops.length; i++) {
  const searchDrops = allDrops.find((e) => e.name == selectedPokemon.drops[i]);
  let newDrop = document.createElement("li");
  let newDropHref = document.createElement("a");
  let newDropImg = document.createElement("img");
  let newDropName = document.createElement("span");
  drops.appendChild(newDrop);
  newDrop.appendChild(newDropHref);
  newDropHref.appendChild(newDropImg);
  newDropHref.appendChild(newDropName);
  newDrop.style.background = `var(--${searchDrops.Rarity})`;
  newDropName.innerText = searchDrops.name;
  newDropHref.href = "index.html";
  newDropImg.src = searchDrops.sprite;
}
/* Resps */
const resps = document.querySelector(".respawn-list");
for (let i = 0; i < selectedPokemon.routes.length; i++) {
  let newResp = document.createElement("li");
  let newRespName = document.createElement("span");
  let newRespLevel = document.createElement("span");
  resps.appendChild(newResp);
  newResp.appendChild(newRespName);
  newResp.appendChild(newRespLevel);
  newRespName.classList.add("name");
  newRespName.innerText = selectedPokemon.routes[i].name;
  newRespLevel.innerText = `Nvl ${selectedPokemon.routes[i].level}`;
}
/* Selected Resp Info */
const respawnTitle = document.querySelector("#respawn article .title");
const respawn = document.querySelectorAll(".respawn-list li");
const selectedRespawnList = document.querySelector("#respawn article ul");
respawn.forEach((e) => {
  e.addEventListener("click", () => {
    selectedRespawnList.innerHTML = "";
    respawnTitle.innerText = e.firstChild.innerText;
    const selectedRespawn = allResps.find(
      (e) => e.name == respawnTitle.innerText
    );
    for (let i = 0; i < selectedRespawn.appears.length; i++) {
      let newResp = document.createElement("li");
      let newRespAppear = document.createElement("div");
      let newAppearName = document.createElement("span");
      let newAppearSprite = document.createElement("img");
      let newAppearLevel = document.createElement("span");
      selectedRespawnList.appendChild(newResp);
      newResp.appendChild(newRespAppear);
      newRespAppear.appendChild(newAppearSprite);
      newRespAppear.appendChild(newAppearName);
      newResp.appendChild(newAppearLevel);
      newAppearName.innerHTML = selectedRespawn.appears[i];
      newAppearLevel.innerText = selectedRespawn.levels[i];
      const selectedRespawnSprite = allPokemon.find(
        (e) => e.name == selectedRespawn.appears[i]
      );
      newAppearSprite.src = selectedRespawnSprite.sprite;
    }
  });
});
