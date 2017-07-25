const menuButton = document.querySelectorAll("nav img");
const responsive = document.querySelector(".nav-responsive");

for (var i = 0; i < menuButton.length; i++) {
  menuButton[i].addEventListener("click", function () {
    console.log(responsive);
    responsive.classList.toggle("toggle-nav");
  })
}
