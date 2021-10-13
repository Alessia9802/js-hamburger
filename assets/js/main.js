/* mostrare / nascondere il menu principale in versione tablet o mobile */

const hamburgerMenuElement = document.querySelector(".hamburger-menu");
const hamburgerIcon = document.querySelector(".header-right > a");
const closeIcon = document.querySelector(".close");

hamburgerIcon.addEventListener("click", function () {
  hamburgerMenuElement.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  hamburgerMenuElement.style.display = "none";
});
