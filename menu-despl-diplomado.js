const menuDiplomado = document.getElementById("menu-despl-diplomado");
const contenedorCursosDi = document.getElementById("desple-cursos-diplomado");
menuDiplomado.addEventListener("click", desplegarBarraCursos);
const contenedorCursosDest = document.getElementById("cursos-destacados");

function desplegarBarraCursos() {
  contenedorCursosDi.classList.toggle("add-barra-curso");
  menuDiplomado.classList.toggle("cambio-submenu-dipl");
}

let observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    menuDiplomado.classList.add("esconder-menu-despl");
  } else {
    menuDiplomado.classList.remove("esconder-menu-despl");
  }
});

observer.observe(contenedorCursosDest);
