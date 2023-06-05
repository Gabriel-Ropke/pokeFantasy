import { allMoves } from "./database/database.js";
console.log(allMoves);
const dropDex = document.getElementById("movedex");

for (let i = 0; i < allMoves.length; i++) {
  let moveCard = document.createElement("article");
  let moveHref = document.createElement("a");
  let top = document.createElement("div");
  let name = document.createElement("span");
  let type = document.createElement("span");
  let containerImg = document.createElement("div");
  let pokeImg = document.createElement("img");
  let infos = document.createElement("div");
  let category = document.createElement("img");
  let power = document.createElement("span");
  dropDex.appendChild(moveCard);
  moveCard.classList.add("move-card");
  top.classList.add("top");
  name.classList.add("name");
  type.classList.add("type");
  containerImg.classList.add("image");
  infos.classList.add("infos");
  moveCard.appendChild(moveHref);
  moveHref.appendChild(top);
  top.appendChild(name);
  top.appendChild(type);
  moveHref.appendChild(containerImg);
  containerImg.append(pokeImg);
  moveHref.appendChild(infos);
  infos.appendChild(category);
  infos.appendChild(power);
  type.style.color = `rgba(var(--${allMoves[i].type}))`;
  power.innerText = `power: ${allMoves[i].attributes[0]}`;
  power.style.color = `rgba(var(--${allMoves[i].type}))`;
  category.src = allMoves[i].categorySource;
  moveCard.style.background = `rgba(var(--${allMoves[i].type}))`;
  moveHref.href = `move.html?move=${allMoves[i].name}`;
  name.innerText = allMoves[i].name;
  type.innerText = `${allMoves[i].type}`;
  pokeImg.src = allMoves[i].moveSource;
}
