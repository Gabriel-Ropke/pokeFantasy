import { allAbilities } from "./database/database.js";

const ul = document.querySelector("#abilitydex ul");
allAbilities.forEach((e) => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  let spanName = document.createElement("span");
  let pDesc = document.createElement("p");
  ul.appendChild(li);
  li.appendChild(a);
  a.append(spanName);
  a.appendChild(pDesc);
  spanName.classList.add("name");
  pDesc.classList.add("description");
  li.style.background = `rgba(var(--${e.type}))`;
  a.href = `ability.html?ability=${e.name}`;
  spanName.innerText = e.name;
  pDesc.innerText = e.description;
});
