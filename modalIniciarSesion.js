const containerModalIniciar = document.getElementById(
  "container-modal-iniciar"
);
const cerrarModalInicio = document.getElementById("cerrar-modal-iniciar");
const btnIniciarSesion = document.getElementById("btn-iniciar-sesion");
try {
  btnIniciarSesion.addEventListener("click", abrirModalInicio);
  cerrarModalInicio.addEventListener("click", cerrarElModalInicio);

  function abrirModalInicio() {
    containerModalIniciar.classList.remove("quitar-modal");
  }
  function cerrarElModalInicio() {
    containerModalIniciar.classList.add("quitar-modal");
  }
} catch (error) {
  console.log("error");
}
