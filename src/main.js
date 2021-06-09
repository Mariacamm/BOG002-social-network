// Este es el punto de entrada de tu aplicacion

//import { router } from './routes/router.js';
import { PATHS } from "./routes/router.js"
import { router } from "./routes/router.js"

router(window.location.hash);

window.addEventListener("hashchange", function (e) {
  // hacer algo llamar al router
  router(window.location.hash);
})



// function cambioPantalla(){
//     document.getElementById("ingreso").style.display = "none";
// }
// let boton = document.getElementById("botonIngresar");
// boton.addEventListener("click", cambioPantalla);

// else ('#perfil' === path) {
//     console.log('estas en perfil');
//   const HTMLperfil = PATHS.perfil.template;  }