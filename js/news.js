import { allDrops, allDungeon, allPokemon } from "./database/database.js";
import { allNotices } from "./database/notices.js";
const URLInfo = new URLSearchParams(window.location.search);
const selectedNotice = allNotices.find((e) => e.id == URLInfo.get("id"));

const sectionNews = document.getElementById("news");

let divImgCont = document.createElement("div");
let imgNotice = document.createElement("img");
let h2Title = document.createElement("h2");
let pText = document.createElement("p");
sectionNews.appendChild(divImgCont);
divImgCont.appendChild(imgNotice);
divImgCont.appendChild(h2Title);
sectionNews.appendChild(pText);
divImgCont.id = "imageContainer";
pText.classList.add("text");
imgNotice.src = selectedNotice.source;
h2Title.innerText = selectedNotice.title;
pText.innerHTML = selectedNotice.text;

const allNoticeTypes = document.querySelectorAll("p.text span.noticeType");
if (allNoticeTypes) {
  allNoticeTypes.forEach((e) => {
    console.log(e.innerText);
    e.style.background = `rgb(var(--${e.innerText.toLowerCase()}))`;
  });
}
const allNoticePokemon = document.querySelectorAll("p.text span.noticePokemon");
if (allNoticePokemon) {
  console.log(allPokemon);
  allNoticePokemon.forEach((e) => {
    const thisPokemon = allPokemon.find(
      (sear) => sear.name.toLowerCase() == e.innerText.toLowerCase()
    );
    console.log(thisPokemon);
    e.style.background = `rgb(var(--${thisPokemon.types[0]}))`;
  });
}
const allNoticeDungeon = document.querySelectorAll("p.text b.noticeDungeon");
console.log(allNoticeDungeon);
if (allNoticeDungeon) {
  allNoticeDungeon.forEach((e) => {
    console.log(e.innerText);
    console.log(allDungeon);
    const thisDungeon = allDungeon.find(
      (sear) => sear.name.toLowerCase() == e.innerText.toLowerCase()
    );
    console.log(thisDungeon);
    e.style.background = `rgb(var(--${thisDungeon.types[0]}))`;
  });
}
const allNoticeDrop = document.querySelectorAll("p.text span.noticeDrop");
if (allNoticeDrop) {
  console.log(allNoticeDrop);
  allNoticeDrop.forEach((e) => {
    console.log(e.innerText);
    const thisDrop = allDrops.find(
      (sear) => sear.name.toLowerCase() == e.innerText.toLowerCase()
    );
    console.log(thisDrop);
    e.style.background = `rgb(var(--${thisDrop.Rarity}))`;
  });
}
