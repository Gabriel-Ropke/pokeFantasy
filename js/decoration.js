const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (scrollY >= 40) {
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
