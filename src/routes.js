import { home } from "./home.js"

const PATHS = {
    home: {
        path: "/",
        template: `  <section>
        <div id="ingreso">
        <header>
          <img id="logoH" src="recursos/logoapp.png">
        </header>
    
        <article>
          <p class="texto"> Con MakeApp podrás acceder a todo el contenido del mundo del maquillaje, información sobre los productos utilizados por los más grandes maquilladores, aprender diferentes técnicas y enterarte de nuevas tendencias. </p>
        </article>
    
        <input type="text" placeholder="Ingresa tu nombre" id="input">
        <a href="#/ingreso"></a>
    
        <button id="botonIngresar">Ingresar</button>
      </div>
      </section>`,
    },
    about: {
        path: "/home",
        template: `<section id="home">
        <header>
          <img src="recursos/logoapp.png">    
          <input type="image" src="imagenes/home.png" class="btninicio">
          <input type="image" src="imagenes/mensaje.png" class="btnmensaje">
          <input type="image" src="imagenes/perfil.png" class="btnperfil">
          <input type="image" src="imagenes/salir.png" class="btnsalir">
        </header>
    
        <section>`,
    },
    contact: {
        path: "/perfil",
        template: `<section id="perfil">
        <header>
          <img src="recursos/logoapp.png">    
          <input type="image" src="imagenes/home.png" class="btninicio">
          <input type="image" src="imagenes/mensaje.png" class="btnmensaje">
          <input type="image" src="imagenes/perfil.png" class="btnperfil">
          <input type="image" src="imagenes/salir.png" class="btnsalir">
        </header>
    
        <section>`,
    }
}

export function router(path){
    

}