const menuDiplomado = document.getElementById("menu-despl-diplomado");
const contenedorCursosDi = document.getElementById("desple-cursos-diplomado");
menuDiplomado.addEventListener("click", desplegarBarraCursos);
const contenedorCursosDest = document.getElementById("cursos-destacados");

const footer = document.querySelector("footer");

function desplegarBarraCursos() {
  contenedorCursosDi.classList.toggle("add-barra-curso");
  menuDiplomado.classList.toggle("cambio-submenu-dipl");
}
let isFooterIntersectiong = false;
let isSectionIntersectiong = false;
let observer = new IntersectionObserver((entries) => {
  if (entries[0].target === contenedorCursosDest) {
    isSectionIntersectiong = entries[0].isIntersecting;
  }
  if (entries[0].target === footer) {
    isFooterIntersectiong = entries[0].isIntersecting;
  }

  if (isFooterIntersectiong || isSectionIntersectiong) {
    menuDiplomado.classList.add("esconder-menu-despl");
  } else {
    menuDiplomado.classList.remove("esconder-menu-despl");
  }
});

observer.observe(contenedorCursosDest);
observer.observe(footer);
