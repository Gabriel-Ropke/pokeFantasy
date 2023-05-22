import {
  allDrops,
  allMoveInfo,
  allMoves,
  allPokemon,
  allResps,
  allStats,
  allWeakness,
} from "./database.js";
let ez = 0;
const selectedPokemon = allPokemon.find(
  (e) => Math.floor(e.numberDex) == localStorage.getItem("selectedPokemon")
);
const type = selectedPokemon.types[0];
const moveset = document.querySelector("#moveset ul");
selectedPokemon.moves.forEach((e) => {
  let searchMove = allMoves.find((sear) => sear.name == e);
  let newMove = document.createElement("li");
  let newMoveName = document.createElement("span");
  let newMoveImg = document.createElement("img");
  moveset.appendChild(newMove);
  newMove.appendChild(newMoveImg);
  newMove.appendChild(newMoveName);
  newMove.style.borderColor = `var(--${searchMove.type})`;
  newMoveName.style.background = `var(--${searchMove.type})`;
  newMoveName.innerText = searchMove.name;
  newMoveImg.src = searchMove.moveSource;
});
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
  });
});
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
selectedPokemon.types.forEach((e) => {
  let newType = document.createElement("p");
  newType.innerText = e;
  newType.style.background = `var(--${e})`;

  types.appendChild(newType);
});
selectedPokemon.abilities.forEach((e) => {
  let newAbility = document.createElement("a");
  abilities.appendChild(newAbility);
  newAbility.innerText = e;
  newAbility.href = "#";
});
selectedPokemon.evYield.forEach((e) => {
  let newEV = document.createElement("p");
  evYield.appendChild(newEV);
  newEV.innerText = e;
});

catchRate.innerText = selectedPokemon.catchRate;
pokeWidth.innerText = selectedPokemon.width;
pokeHeight.innerText = selectedPokemon.height;
allWeakness.forEach((e) => {
  let newWeak = document.createElement("li");
  let newWeakTitle = document.createElement("span");
  let newWeakness = document.createElement("span");
  weakness.appendChild(newWeak);
  newWeak.appendChild(newWeakTitle);
  newWeak.appendChild(newWeakness);
  newWeak.style.background = `var(--${e.name})`;
  newWeakTitle.innerText = e.name;
  const weak = allWeakness.find(
    (sear) => sear.name == selectedPokemon.types[0]
  );
  if (selectedPokemon.types.length > 1) {
    const weak2 = allWeakness.find(
      (sear) => sear.name == selectedPokemon.types[1]
    );
    let newType = weak.Weakness[ez] * weak2.Weakness[ez];
    newWeakness.innerText = `${newType}x`;
  } else {
    newWeakness.innerText = `${weak.Weakness[ez]}x`;
  }
  ez++;
});
ez = 0;

/* Alternative Forms & Evolutionary */
const normalForm = document.querySelector("#alternative .normal");
const shinyForm = document.querySelector("#alternative .shiny");

normalForm.src = selectedPokemon.sprite;
shinyForm.src = selectedPokemon.shinySprite;
normalForm.style.background = `var(--${type})`;
shinyForm.style.background = `var(--${type})`;

const evolutionary = document.getElementById("evolutionary");
selectedPokemon.evolutionary.forEach((e) => {
  const evolution = allPokemon.find((sear) => sear.name == e);
  let newEvoHref = document.createElement("a");
  let newEvo = document.createElement("img");
  newEvoHref.appendChild(newEvo);
  newEvoHref.href = "pokemon.html";
  newEvo.src = evolution.sprite;
  newEvo.id = evolution.numberDex;
  newEvo.style.background = `var(--${type})`;
  evolutionary.appendChild(newEvoHref);
});

/* Stats */
const stats = document.querySelector("#stats ul");

selectedPokemon.stats.forEach((e) => {
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
  newStatName.innerText = allStats[ez];
  newStatNumber.innerText = e;
  newStatNumber.style.color = `var(--${type})`;
  newBarIn.style.width = `${e / 1.5}%`;
  newBarIn.style.background = `var(--${type})`;
  ez++;
});
ez = 0;

/* Drops */
const dropList = document.querySelector("#drops ul");

selectedPokemon.drops.forEach((e) => {
  const searchDrops = allDrops.find((sear) => sear.name == e);
  let newDrop = document.createElement("li");
  let newDropHref = document.createElement("a");
  let newDropImg = document.createElement("img");
  let newDropName = document.createElement("span");
  dropList.appendChild(newDrop);
  newDrop.appendChild(newDropHref);
  newDropHref.appendChild(newDropImg);
  newDropHref.appendChild(newDropName);
  newDrop.style.background = `var(--${searchDrops.Rarity})`;
  newDropName.innerText = searchDrops.name;
  newDropName.style.background = `var(--${type})`;
  newDropHref.href = "#";
  newDropImg.src = searchDrops.sprite;
});
/* Resps */
const resps = document.querySelector(".respawn-list");
selectedPokemon.routes.forEach((e) => {
  let newResp = document.createElement("li");
  let newRespName = document.createElement("span");
  let newRespLevel = document.createElement("span");
  resps.appendChild(newResp);
  newResp.appendChild(newRespName);
  newResp.appendChild(newRespLevel);
  newRespName.classList.add("name");
  newRespName.innerText = e.name;
  newRespLevel.innerText = `Nvl ${e.level}`;
});
/* Selected Resp Info */
const respawnTitle = document.querySelector("#respawn article .title");
const respawn = document.querySelectorAll(".respawn-list li");
const selectedRespawnList = document.querySelector("#respawn article ul");
respawn.forEach((e) => {
  if (window.innerWidth >= 730) {
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
  }
});
