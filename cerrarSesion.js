const containerUserProfile = document.getElementById("container-user-profile");
containerUserProfile.addEventListener("click", mostrarOpcionCerrar);
const containerCerrarSesion = document.getElementById(
  "container-cerrar-sesion"
);
const body = document.querySelector("body");
body.addEventListener("click", quitarOpcionCerrar);

function mostrarOpcionCerrar(e) {
  e.stopPropagation();
  containerCerrarSesion.classList.toggle("opcion-cerrar-sesion");
}

function quitarOpcionCerrar(e) {
  e.stopPropagation();
  containerCerrarSesion.classList.add("opcion-cerrar-sesion");
}
