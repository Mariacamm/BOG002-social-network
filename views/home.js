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
    arrayPost.push(publicacion);
    localStorage.setItem('publicaciones', JSON.stringify(arrayPost));
    // console.log("hola", publicacion)    
    pintarPost();
  })
}

export function pintarPost(){
  const post = document.getElementById("pruebaPost")
  post.innerHTML = "TIMELINE:" + ""
   let obtenerPost = localStorage.getItem('publicaciones')
   let obtenerPostString = JSON.parse(obtenerPost)
  //  document.getElementById("postFinal").innerHTML = obtenerPostString;
   obtenerPostString.forEach((p) => {

    // console.log(p);
 
    let contenido = document.createElement('div');
    contenido.className = "contenido";

    let texto = document.createElement('p');
    texto.className = "postFinal";
    texto.innerHTML = (p);
    contenido.appendChild(texto)

    let boton = document.createElement('button');
    boton.className = "eliminar";
    boton.innerHTML = "eliminar";
    contenido.appendChild(boton)

    let likes = document.createElement('input');
    likes.setAttribute("type", "image");
    likes.src = 'imagenes/likes.png';
    likes.className = "btnlikes";
    contenido.appendChild(likes)

    let contador = document.createElement('p');
    contador.className = "contadorLikes";
    contenido.appendChild(contador)
    
    post.appendChild(contenido);
    
   })
  // console.log(obtenerPostString[2])
  eliminarPost();
  likePost();
  
}

// export function eliminarPost (){
//   const eliminarPost = document.querySelector(".eliminar");
//   eliminarPost.addEventListener('click', () => {
//     const postFinal = document.querySelector(".contenido");
//     const eliminar = postFinal.value;
//     localStorage.removeItem('publicaciones')
//     document.querySelector(".contenido").innerHTML = "";
//     /* alert("elimindado") */
//     /* document.getElementById("content").innerHTML = post; */
//   })
// }


export function eliminarPost (){
    const eliminarPost = document.querySelector(".eliminar");
    eliminarPost.addEventListener('click', () => {
      // const postFinal = document.querySelector(".contenido").value;
      let obtenerPost = localStorage.getItem('publicaciones');
      let postArray = JSON.parse(obtenerPost);
      let filtroP = postArray.filter((item, index)=>{
        return postArray.indexOf(item) === index;
      })
      // localStorage.setItem('publicaciones', filtroP)
      // localStorage.removeItem('publicaciones')
      console.log(filtroP)
      
      document.querySelector(".contenido").innerHTML = "";
      /* alert("elimindado") */
      /* document.getElementById("content").innerHTML = post; */
    })
  }

// evento likes 

export function likePost () {
  const btnLikes= document.querySelector(".btnlikes")
  const contadorLikes= document.querySelector(".contadorLikes")

  if (localStorage.getItem('contador')){
    contadorLikes.innerText= localStorage.getItem('contador')
  } else {
    localStorage.setItem('contador' , '0')
  }
  btnLikes.addEventListener('click', () => {
    // console.log("Hola")
    const contadorActual= localStorage.getItem('contador')
    localStorage.setItem('contador', parseInt(contadorActual) + 1)
    contadorLikes.innerText= localStorage.getItem('contador')
  })
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