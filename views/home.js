export function home() {
  const homeHTML = `
    <section id="home">
    <header>
      <img src="recursos/logoapp.png"> 
    </header>

    <section>
      <input type="image" src="imagenes/home.png" id="btninicio">
      <input type="image" src="imagenes/mensaje.png" class="btnmensaje">
      <input type="image" src="imagenes/perfil.png" class="btnPerfil">
      <input type="image" src="imagenes/salir.png" class="btnsalir">
    </section>

    <section class=subida>
    <div class="tarjeta"> 
    <article>
    <p class="textoSubida">¡Sube tu imagen o video y muestra a la comunidad tu talento!</p>
    </article>
      <img id="imgPreview">
      <input type="text" id="pruebaLocal">
      <button id="postear">Publicar</button>
    </div>
    </section>
    
  </section>    
    `
  return homeHTML;
}

function subirPost (){
  const postear = document.getElementById("postear");
}
// export function volverHome() {
//   const btnHome = document.getElementById("btninicio");
//   btnHome.addEventListener("click", () => {
//     window.location = "";
//     location.reload();
//   });
// }
// volverHome ()

// export function perfil() {
//   const btnPefil = document.getElementById("btnperfil");
//   btnIngreso.addEventListener("click", () => {
//     window.location = "#perfil";
//     location.reload();
//   });
// }

