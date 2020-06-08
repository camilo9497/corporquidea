const body = document.querySelector("body");
body.addEventListener("click", clickEnBody);

const containerMenuHamburguesa = document.getElementById(
  "container-menu-hamburguesa"
);
containerMenuHamburguesa.addEventListener("click", abrirMenuResponsive);

const containerMenuResponsive = document.getElementById("container-menu");
const cerrarMenu = document.getElementById("icono-cerrar-menu");
cerrarMenu.addEventListener("click", clickEnBody);

const menuAcademia = document.getElementById("list-menu-academia");
menuAcademia.addEventListener("click", abrirOpciones);
const opcionesAcademia = document.getElementById("opciones-academia");

const menuActividades = document.getElementById("list-menu-actividades");
menuActividades.addEventListener("click", abrirOpcionActi);
const opcionesActividades = document.getElementById("opciones-actividades");
const iconoSubmenuArriba = document.getElementById("icono-submenu");
const iconoSubmenuArribaAct = document.getElementById("icono-submenu-act");

function abrirMenuResponsive(e) {
  e.stopPropagation();
  containerMenuResponsive.classList.remove("menu-oculto");
  console.log("le dio click en abirir");
}

function clickEnBody(e) {
  console.log("se hizo otra cosa");
  containerCerrarSesion.classList.add("opcion-cerrar-sesion");
  containerMenuResponsive.classList.add("menu-oculto");
}

function abrirOpciones(e) {
  console.log("abrio el submenu");
  e.stopPropagation();
  iconoSubmenuArriba.classList.toggle("icon-up");
  opcionesAcademia.classList.toggle("mostrar-opcion-submenu");
}

function abrirOpcionActi(e) {
  e.stopPropagation();
  iconoSubmenuArribaAct.classList.toggle("icon-up");
  opcionesActividades.classList.toggle("mostrar-opcion-submenu");
}
