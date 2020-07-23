let btnLeft = document.getElementById("btn-left");
let btnRight = document.getElementById("btn-right");

let opinion = document.querySelectorAll(".container-opinion");
let containerOpiniones = document.getElementById("container-opiniones");

btnLeft.addEventListener("click", moverAIzquierda);
btnRight.addEventListener("click", moverADerecha);

let posicion = 0;

function moverAIzquierda() {
  if (posicion > 0) {
    posicion -= 1;
  } else {
    posicion = opinion.length - 1;
  }
  containerOpiniones.style.transform = `translateX(-${posicion * 100}%)`;
}
function moverADerecha() {
  if (posicion < opinion.length - 1) {
    posicion += 1;
  } else {
    posicion = 0;
  }
  containerOpiniones.style.transform = `translateX(-${posicion * 100}%)`;
}
