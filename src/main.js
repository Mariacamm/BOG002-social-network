// Este es el punto de entrada de tu aplicacion

//import { router } from './routes/router.js';
import { ingreso } from "../views/ingreso.js";
import { PATHS } from "./routes/router.js"
import { router } from "./routes/router.js"


router(window.location.hash);

window.addEventListener("hashchange", function (e) {
  // hacer algo llamar al router
  router(window.location.hash);
})

function adelante() {
  let siguientePagina = document.getElementById("botonIngresar");
  siguientePagina.addEventListener('click', () => {
    console.log("yo tambien")
    location.assign('http://127.0.0.1:5500/src/#home')
  })
}
adelante()



// function cambioPantalla(){
//     document.getElementById("ingreso").style.display = "none";
// }
// let boton = document.getElementById("botonIngresar");
// boton.addEventListener("click", cambioPantalla);

// else ('#perfil' === path) {
//     console.log('estas en perfil');
//   const HTMLperfil = PATHS.perfil.template;  }