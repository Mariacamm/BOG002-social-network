import { popUpPost, subirPost, home } from "../views/home.js"
import { ingreso } from "../views/ingreso.js"
import { perfil } from "../views/perfil.js"
import { adelante } from "../main.js"


export const PATHS = {
  ingreso: {
    path: "",
    template: ingreso(),
  },
  home: {
    path: "#home",
    template: home(),
  },
  perfil: {
    path: "#perfil",
    template: perfil(),
  }
}

export function router(path) {
    // console.log(path);
    // evaluar path, preguntar que?
    // si es home (path?) muestra home
    // si es perfil mostrar perfil
    if (path === "#home") {
      // console.log('estas en home');
      // mostrar home
      const textHtml = PATHS.home.template;
      // console.log(textHtml)
      document.getElementById("content").innerHTML = textHtml;
      /* setTimeout(()=>{ */
        subirPost();
        // eliminarPost();
        // likePost();
        popUpPost();
     /*  },500) */
      
      /* popUpPost(); */
    //   document.getElementById("content").appendChild(textHtml);
    
    }
    else if (path === "#perfil"){
      // console.log('estas en perfil');
      const HTMLperfil = PATHS.perfil.template;
      // console.log(HTMLperfil)
      document.getElementById("content").innerHTML = HTMLperfil;
    }
    else if (path === ""){
      // console.log('estas en ingreso');
      const HTMLingreso = PATHS.ingreso.template;
      // console.log(HTMLingreso)
      document.getElementById("content").innerHTML = HTMLingreso;
      adelante();
    }
}









//  class Router {

//     //constructor
//    constructor(paths){
//        let paths= paths
//    }

//     //metodo para inicializar el router
// iniRouter(){
//     const {
//         location: { pathname = '/'}
//     } = window
//     const URI = pathname === '/' ? 'home' : pathname.replace('/', '');
// }

//     //metodo para cargar las vistas



// page('/', home)
// page('/inicio', inicio)
// page('/perfil', perfil)
// page('/mensaje', mensaje)

// function home () {
//     document.querySelector('p').textContent= 'Aqui esta el home'
// }

// function inicio () {
//     document.querySelector('p').textContent= 'Aqui esta el inicio'
// }

// function perfil () {
//     document.querySelector('p').textContent= 'Aqui esta el perfil'
// }

// function mensaje () {
//     document.querySelector('p').textContent= 'Aqui esta el mensaje'
// }

