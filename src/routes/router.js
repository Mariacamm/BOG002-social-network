//import { home } from "../../views/home.js"

export const PATHS = {
  ingreso: {
    path: "/",
    template: home(),
  },
  home: {
    path: "#home",
    template: `<h1>👩🏻‍💻 Sobre mi</h1>`,
  },
  perfil: {
    path: "#perfil",
    template: `<h1>📱 Contacto</h1>`,
  }
}

export function router(path) {

}

function home() {
  const homeHTML = `
    <section id="home">
    <header>
      <img src="recursos/logoapp.png"> 
    </header>

    <section>
      <input type="image" src="imagenes/home.png" class="btninicio">
      <input type="image" src="imagenes/mensaje.png" class="btnmensaje">
      <input type="image" src="imagenes/perfil.png" class="btnperfil">
      <input type="image" src="imagenes/salir.png" class="btnsalir">
    </section>

    <a href="#/home"></a>
    
  </section>    
    `
  return homeHTML;
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

