let botonRepo = document.getElementById("boton-repo");
botonRepo.addEventListener("click", cambiarColor);
let main = document.querySelector("main");

function cambiarColor() {
  main.classList.toggle("back-content-rpo");
}
