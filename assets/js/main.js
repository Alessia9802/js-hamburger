/* mostrare / nascondere il menu principale in versione tablet o mobile */

const openMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  openMenu.style.display = "block";
}

function close() {
  closeMenu.style.display = "none";
}
