import { allPokemon } from "./database.js";
console.log(allPokemon);
/* Create Carousel */
const pokemonCarousel = document.getElementById("pokemonCarousel");
document.body.style.setProperty(
  "--width-value",
  `${allPokemon.length * 300}px`
);
for (let i = 0; i < allPokemon.length; i++) {
  let liPokemon = document.createElement("li");
  let aHref = document.createElement("a");
  let divImage = document.createElement("div");
  let imgPokemon = document.createElement("img");
  let spanBgNumber = document.createElement("span");
  let divInfo = document.createElement("div");
  let h5NameDex = document.createElement("h5");
  let spanName = document.createElement("span");
  let spanNumber = document.createElement("span");
  let spanTypes = document.createElement("span");
  pokemonCarousel.appendChild(liPokemon);
  liPokemon.appendChild(aHref);
  aHref.appendChild(divImage);
  divImage.appendChild(imgPokemon);
  divImage.appendChild(spanBgNumber);
  aHref.appendChild(divInfo);
  divInfo.appendChild(h5NameDex);
  h5NameDex.appendChild(spanName);
  h5NameDex.appendChild(spanNumber);
  divInfo.appendChild(spanTypes);
  liPokemon.classList.add("pokemon");
  divImage.classList.add("image");
  divInfo.classList.add("info");
  spanNumber.classList.add("number");
  spanTypes.classList.add("types");
  aHref.href = `pokemon.html?id=${allPokemon[i].numberDex}`;
  imgPokemon.src = allPokemon[i].shinySprite;
  spanBgNumber.innerText = allPokemon[i].numberDex;
  spanName.innerText = allPokemon[i].name;
  spanNumber.innerText = allPokemon[i].numberDex;
  for (let t = 0; t < allPokemon[i].types.length; t++) {
    let pType = document.createElement("p");
    spanTypes.appendChild(pType);
    pType.innerText = allPokemon[i].types[t];
    pType.style.background = `rgba(var(--${allPokemon[i].types[t]}))`;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  var pokemonCarousel = document.querySelector("#pokemonCarousel");
  var pokemon = document.querySelectorAll(".pokemon");
  var carouselPrev = document.querySelector("#carouselWrapper .nav-btn.prev");
  var carouselNext = document.querySelector("#carouselWrapper .nav-btn.next");

  carouselPrev.addEventListener("click", () => {
    pokemonCarousel.insertBefore(pokemon[pokemon.length - 1], pokemon[0]);
    pokemon = document.querySelectorAll(".pokemon");
  });
  carouselNext.addEventListener("click", () => {
    pokemonCarousel.appendChild(pokemon[0]);
    pokemon = document.querySelectorAll(".pokemon");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var stream = document.querySelector(".gallery__stream");
  var items = document.querySelectorAll(".gallery__item");
  var prev = document.querySelector(".gallery__prev");
  var next = document.querySelector(".gallery__next");

  prev.addEventListener("click", function () {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll(".gallery__item");
  });

  next.addEventListener("click", function () {
    stream.appendChild(items[0]);
    items = document.querySelectorAll(".gallery__item");
  });
});
