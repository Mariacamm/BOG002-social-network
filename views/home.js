export function home() {
  const homeHTML = `
    <section id="home">
    <header>
      <img src="recursos/logoapp.png"> 
    </header>

    <section>
      <input type="image" src="imagenes/newPost.png" id="btnnewPost">
      <input type="image" src="imagenes/home.png" id="btninicio">
      <input type="image" src="imagenes/mensaje.png" class="btnmensaje">
      <input type="image" src="imagenes/perfil.png" class="btnPerfil">
      <input type="image" src="imagenes/salir.png" class="btnsalir">
    </section>

    <section class="subida">
    <div class="tarjeta" id="tarjeta"> 
      <div class="post" id="post">
        <h1 class="textoSubida">¡Sube tu imagen o video y muestra a la comunidad tu talento!</h1>
          <div class="Formulario">
            <form id="ingreso_post" class="ingreso_post">
              <input type="text" id="publicacion" class="descripcion_form" placeholder="¿Qué estás pensando?">
              <button type="button" class="postear" id="postear">Guardar</button>
            </form>
          </div>
      </div>
    </div>

    <div id="pruebaPost">
    <textarea class="postFinal" id="postFinal"></textarea>
    <input type="image" src="imagenes/likes.png" id="btnlikes">
    <h2 id="contadorLikes"></h2>
    <button type="button" id="eliminar">Eliminar</button>
  </div>
    </section>
    
  </section>    
    `
return homeHTML;
}


const arrayPost = []
export function subirPost (){
  const subirPost = document.getElementById("postear");
  subirPost.addEventListener('click', () => {
    const publicacion = document.getElementById("publicacion").value;
    // const post = publicacion.value;
    arrayPost.push(publicacion)
    localStorage.setItem('publicaciones', JSON.stringify(arrayPost))
    // console.log("hola", publicacion)    
    pintarPost();
  })
}

export function pintarPost(){
  const post = document.getElementById("postFinal")
  post.innerHTML = "POST:" + ""
   let obtenerPost = localStorage.getItem('publicaciones')
   let obtenerPostString = JSON.parse(obtenerPost)
   document.getElementById("postFinal").innerHTML = obtenerPostString;
  //  obtenerPostString.forEach((p) => {

  //   console.log(p);
 
  //   const publicacion = document.createElement('div');
  //   publicacion.innerHTML = obtenerPostString;
  //  })
  // console.log(obtenerPostString[2])
  
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
  const btnLikes= document.getElementById("btnlikes")
  const contadorLikes= document.getElementById("contadorLikes")

  if (localStorage.getItem('contador')){
    contadorLikes.innerText= localStorage.getItem('contador')
  } else {
    localStorage.setItem('contador' , '0')
  }
    btnLikes.onclick = () => {
    // console.log("Hola")
    const contadorActual= localStorage.getItem('contador')
    localStorage.setItem('contador', parseInt(contadorActual) + 1)
    contadorLikes.innerText= localStorage.getItem('contador')
  }
}

// Pop UP

export function popUpPost () {

  const popUpPost = document.getElementById("btnnewPost"),
  tarjeta = document.getElementById("tarjeta"),
  postPop = document.getElementById("post"),
  guardar = document.getElementById("postear");
  // console.log(popUpPost)
  popUpPost.addEventListener("click", function(){
    tarjeta.classList.add('active');
    postPop.classList.add('active');
  })

  guardar.addEventListener("click", function(){
    tarjeta.classList.remove('active');
    postPop.classList.remove('active');
  })
}
    
  



{/* <div class="postFinales" id="postFinales">
<textarea class="postFinal" id="postFinal"></textarea>
<input type="image" src="imagenes/likes.png" id="btnlikes">
<h2 id="contadorLikes"></h2>
<button type="button" id="eliminar">Eliminar</button>
</div> */}


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