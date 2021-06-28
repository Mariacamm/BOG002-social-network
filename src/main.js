// Este es el punto de entrada de tu aplicacion

//import { router } from './routes/router.js';
import { ingreso } from "../views/ingreso.js";
import { PATHS } from "./routes/router.js"
import { router } from "./routes/router.js"


router(window.location.hash);

// cambio de vistar con cambio de #
window.addEventListener("hashchange", function (e) {
  // hacer algo llamar al router
  router(window.location.hash);
})

// hacer el cambio de vista
export function adelante() {
  let siguientePagina = document.getElementById("botonIngresar");
  siguientePagina.addEventListener('click', () => {
    console.log("funciono")
    window.location = "#home";
    location.reload();
    // location.assign('http://127.0.0.1:5500/src/#home')
  })
}




// subir imagen
// const imgPreview = document.getElementById("imgPreview");
// const imgSubir = document.getElementById("imgSubir")

// imgSubir.addEventListener('change', (e) => {
//   console.log(e)
//   const file = e.target.files[0]

// })


// function cambioPantalla(){
//     document.getElementById("ingreso").style.display = "none";
// }
// let boton = document.getElementById("botonIngresar");
// boton.addEventListener("click", cambioPantalla);

// else ('#perfil' === path) {
//     console.log('estas en perfil');
//   const HTMLperfil = PATHS.perfil.template;  }