let hamburgerIcon = document.querySelector("#hamburgerIcon");
let closeIcon = document.querySelector("#closeIcon");
let nav_links = document.querySelector(".nav_links");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  nav_links.classList.toggle("showResponsiveNav");
});

closeIcon.addEventListener("click", () => {
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  nav_links.classList.toggle("showResponsiveNav");
});
