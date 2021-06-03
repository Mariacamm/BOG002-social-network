// Este es el punto de entrada de tu aplicacion

//import { router } from './routes/router.js';
import { PATHS } from "./routes/router.js"

window.addEventListener("hashchange", function (e) {
  // hacer algo llamar al router
  router(window.location.hash);
})


function router(path) {
  //console.log(path);
  // evaluar path, preguntar que?
  // si es home (path?) muestra home
  // si es perfil mostrar perfil
  if ('#home' === path) {
    console.log('estas en home');
    // mostrar home
    const textHtml = PATHS.ingreso.template;
    console.log(textHtml)

  } else {
    console.log('estas en otra ruta')
  }

}
// function cambioPantalla();
// let boton = document.getElementById("botonIngresar");
// boton.addEventListener("click", )