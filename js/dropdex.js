import { allDrops } from "./database/database.js";
console.log(allDrops);
const dropDex = document.getElementById("dropdex");

for (let i = 0; i < allDrops.length; i++) {
  let dropCard = document.createElement("article");
  let dropHref = document.createElement("a");
  let top = document.createElement("div");
  let name = document.createElement("span");
  let value = document.createElement("span");
  let containerImg = document.createElement("div");
  let pokeImg = document.createElement("img");
  dropDex.appendChild(dropCard);
  dropCard.classList.add("drop-card");
  top.classList.add("top");
  name.classList.add("name");
  value.classList.add("number");
  containerImg.classList.add("image");
  dropCard.appendChild(dropHref);
  dropHref.appendChild(top);
  top.appendChild(name);
  top.appendChild(value);
  dropHref.appendChild(containerImg);
  containerImg.append(pokeImg);
  dropCard.style.background = `rgba(var(--${allDrops[i].Rarity}))`;
  dropHref.href = `drop.html?drop=${allDrops[i].name}`;
  name.innerText = allDrops[i].name;
  value.innerText = `$${allDrops[i].Value}`;
  pokeImg.src = allDrops[i].sprite;
}
