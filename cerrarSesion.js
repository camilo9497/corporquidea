let containerCerrarSesion;
try {
  const containerUserProfile = document.getElementById(
    "container-user-profile"
  );
  containerUserProfile.addEventListener("click", mostrarOpcionCerrar);

  function mostrarOpcionCerrar(e) {
    e.stopPropagation();
    containerCerrarSesion.classList.toggle("opcion-cerrar-sesion");
  }
  containerCerrarSesion = document.getElementById("container-cerrar-sesion");
} catch (error) {
  console.log(error);
}
