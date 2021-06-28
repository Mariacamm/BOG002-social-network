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
          <div class="post_finales">
          
          </div>

      </div>
    
    </div>
    </section>
    
  </section>    
    `
return homeHTML;
}

export function guardarPost (){
  const publicacion = document.getElementById("publicacion");
  const post = publicacion.value;
  localStorage.setItem('publicacion3', "post")
}

export function subirPost (){
  const subirPost = document.getElementById("postear");
  subirPost.addEventListener('click', guardarPost())
    document.getElementById("content").innerHTML = post;
    console.log("hola")
  }





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
// }

