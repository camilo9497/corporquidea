const btnActividad = document.getElementById("btn-actividad");
btnActividad.addEventListener("click", actividadRealizada);

const videoDiplomado = document.getElementById("video-diplomado");

function actividadRealizada() {
  videoDiplomado.classList.add("filtro-gris");
}
