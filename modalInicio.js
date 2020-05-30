const cerrarModal = document.getElementById("cerrar-modal");
const containerModal = document.getElementById("container-modal");
cerrarModal.addEventListener("click", cerrarElModal);
function cerrarElModal() {
  containerModal.classList.add("quitar-modal");
}
