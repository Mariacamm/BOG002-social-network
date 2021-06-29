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
    <div class="tarjeta" id="tarjeta"> 
      <div class="post">
        <h1 class="textoSubida">¡Sube tu imagen o video y muestra a la comunidad tu talento!</h1>
          <div class="Formulario">
            <form id="ingreso_post" class="ingreso_post">
              <input type="text" id="publicacion" class="descripcion_form" placeholder="¿Qué estás pensando?">
              <button type="button" id="postear">Guardar</button>
            </form>
          </div>
          <div class="postFinales" id="postFinales">
            <textarea class="postFinal" id="postFinal"></textarea>
            <input type="image" src="imagenes/likes.png" id="btnlikes">
            <h2 id="contadorLikes"></h2>
            <button type="button" id="eliminar">Eliminar</button>
          </div>

      </div>
    
    </div>
    </section>
    
  </section>    
    `
return homeHTML;
}

// export function guardarPost (){
//   const publicacion = document.getElementById("publicacion");
//   const post = publicacion.value;
//   const p = post.toString();
  
//   localStorage.setItem('publicacion5', post)
// }

export function subirPost (){
  const subirPost = document.getElementById("postear");
  subirPost.addEventListener('click', () => {
    const publicacion = document.getElementById("publicacion");
    const post = publicacion.value;
    localStorage.setItem('publicacion', post)
    console.log("hola", post)
    document.getElementById("postFinal").innerHTML = post;
  })
}

export function eliminarPost (){
  const eliminarPost = document.getElementById("eliminar");
  eliminarPost.addEventListener('click', () => {
    const postFinal = document.getElementById("postFinal");
    const eliminar = postFinal.value;
    localStorage.clear('postFinal', eliminar)
    document.getElementById("postFinal").innerHTML = "";
    /* alert("elimindado") */
    /* document.getElementById("content").innerHTML = post; */
  })
}

// evento likes 

export function likePost () {
const btnLikes= document.getElementById("btnLikes")
const contadorLikes= document.getElementById("contadorLikes")

if (localStorage.getItem('contador')){
  contadorLikes.innerText= localStorage.getItem('contador')
} else {
  localStorage.setItem('contador' , '0')
}
  btnLikes.onclick = () => {
  const contadorActual= localStorage.getItem('contador')
  localStorage.setItem('contador', parseInt(contadorActual) + 1)
  contadorLikes.innerText= localStorage.getItem('contador')
}}

    
  





// class Descripcion{
//   constructor(descripcion,img){
//       this.descripcion= descripcion;
//       this.img= img;
//   }

// }

// class UI{
//   addDescripcion(){

// }

//   deleteDescripion(){

//   }
  
//   showMessage(){

//   }

// }


// enevtos del DOM

/*   const ui = new UI();
  ui.addDescripcion(descripcion);
  ui.resetForm(); */

// document.getElementById("tarjeta").addEventListener('submit', function(){
//   alert("Enviando Formulario")
// })



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
// 