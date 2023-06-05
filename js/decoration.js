const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (scrollY >= 40 && innerWidth > 500) {
    header.classList.add("closed");
  } else if (scrollY < 40 && innerWidth > 500) {
    header.classList.remove("closed");
  }
});
if (innerWidth <= 500) {
  header.classList.add("closed");
  header.addEventListener("click", () => {
    header.classList.toggle("closed");
  });
}
/* Create Header */
const headerListArray = ["index", "pokedex"];
const headerList = document.querySelector("header ul");
headerList.innerHTML = "";
for (let i = 0; i < headerListArray.length; i++) {
  let liHeader = document.createElement("li");
  let aHref = document.createElement("a");
  let spanName = document.createElement("p");
  headerList.appendChild(liHeader);
  liHeader.appendChild(aHref);
  aHref.appendChild(spanName);
  liHeader.id = `header${headerListArray[i]}`;
  aHref.href = `${headerListArray[i]}.html`;
  spanName.innerText = headerListArray[i];
  if (headerListArray[i] == "index") {
    spanName.innerText = "Home";
  }
}

/* Create Footer */
const footerSocial = ["discord", "twitter", "youtube"];
const footerLinks = ["FAQ", "Sobre Nós", "Sei lá", "Sei lá"];
const footer = document.querySelector("footer");
// if is called 'cause Pokemon.html don't use Footer;
if (footer) {
  /* Footer Logo */
  let divFootLogo = document.createElement("div");
  let imgDivLogo = document.createElement("img");
  divFootLogo.classList.add("logo");
  divFootLogo.appendChild(imgDivLogo);
  imgDivLogo.src = "img/general/logo.png";
  footer.appendChild(divFootLogo);

  /* Footer Social (Discord, Youtube, Twitter) */
  let ulFooterSocial = document.createElement("ul");
  ulFooterSocial.id = "footerSocial";
  footerSocial.forEach((e) => {
    let buttonSocial = document.createElement("button");
    let iconSocial = document.createElement("i");
    ulFooterSocial.appendChild(buttonSocial);
    buttonSocial.appendChild(iconSocial);
    iconSocial.classList.add(`fab`);
    iconSocial.classList.add(`fa-${e}`);
  });
  footer.appendChild(ulFooterSocial);

  /* Footer Copyright */
  let copyright = document.createElement("p");
  copyright.id = "copyright";
  copyright.innerText = "© Direitos reservados a froga";
  footer.appendChild(copyright);

  /* Footer Links */
  let ulFooterLinks = document.createElement("ul");
  ulFooterLinks.id = "footerLinks";
  footerLinks.forEach((e) => {
    let liFooterLink = document.createElement("li");
    let aHref = document.createElement("a");
    ulFooterLinks.appendChild(liFooterLink);
    liFooterLink.appendChild(aHref);
    aHref.innerText = e;
    aHref.href = "#";
  });
  footer.appendChild(ulFooterLinks);
}

/* Decorate Header by URL Location */
const selectedPage = new URL(window.location);
console.log(selectedPage.pathname);
const index = document.querySelector("header ul #headerindex");
const dropdex = document.querySelector("header ul #headerdropdex");
const pokedex = document.querySelector("header ul #headerpokedex");
const movedex = document.querySelector("header ul #headermovedex");
const abilitydex = document.querySelector("header ul #headerabilitydex");
if (selectedPage.pathname == "/index.html") {
  index.classList.add("active");
}
if (
  selectedPage.pathname == "/dropdex.html" ||
  selectedPage.pathname == "/drop.html"
) {
  dropdex.classList.add("active");
}
if (
  selectedPage.pathname == "/pokedex.html" ||
  selectedPage.pathname == "/pokemon.html"
) {
  pokedex.classList.add("active");
}
if (
  selectedPage.pathname == "/movedex.html" ||
  selectedPage.pathname == "/move.html"
) {
  movedex.classList.add("active");
}
if (
  selectedPage.pathname == "/abilitydex.html" ||
  selectedPage.pathname == "/ability.html"
) {
  abilitydex.classList.add("active");
}
