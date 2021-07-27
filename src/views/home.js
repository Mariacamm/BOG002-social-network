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
       <i class="far fa-window-close" id="cerrar"></i>
        <h1 class="textoSubida">¡Sube tu imagen o video y muestra a la comunidad tu talento!</h1>
          <div class="Formulario">
            <form id="ingreso_post" class="ingreso_post">
              <input type="text" id="publicacion" class="descripcion_form" placeholder="¿Qué estás pensando?">
            </form>
            <button type="button" class="boton" id="postear">Guardar</button>
            <button type="button" class="boton" id="actualizar">Actualizar</button>
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


const primeraP = []
localStorage.setItem('publicaciones', JSON.stringify(primeraP));
export function subirPost (){
  const subirPost = document.getElementById("postear");
  subirPost.addEventListener('click', () => {
    const publicacion = document.getElementById("publicacion").value;
    const arrayPostString = localStorage.getItem('publicaciones');
    let arrayPost = JSON.parse(arrayPostString)
    // const post = publicacion.value;
    arrayPost.push({id:arrayPost.length,publicacion, likes:0});
    localStorage.setItem('publicaciones', JSON.stringify(arrayPost));
    // console.log("hola", publicacion)    
    pintarPost();
    document.getElementById("publicacion").value = "";
  })
}

export function actualizarPost() {
  const actualizarbtn = document.getElementById("actualizar");
  actualizarbtn.addEventListener('click', () => {
    let postId = actualizarbtn.getAttribute("post-id");
    // console.log(postId)
    const publicacion = document.getElementById("publicacion").value;
    const arrayPostString = localStorage.getItem('publicaciones');
    let arrayPost = JSON.parse(arrayPostString);
    const arrayActualizado = arrayPost.map((item) =>
    item.id == postId ? ({ ...item, publicacion }): ({ ...item}))
    console.log(arrayActualizado)
    localStorage.setItem('publicaciones', JSON.stringify(arrayActualizado));
    // console.log("hola", publicacion)    
    pintarPost();
    document.getElementById("publicacion").value = "";
  })
}

export function pintarPost(){

  const post = document.getElementById("pruebaPost")
  post.innerHTML = ""
   let obtenerPost = localStorage.getItem('publicaciones')
   let obtenerPostString = JSON.parse(obtenerPost)
  //  document.getElementById("postFinal").innerHTML = obtenerPostString;
   obtenerPostString.forEach((p) => {
    // console.log(p);
 
    let contenido = document.createElement('div');
    contenido.className = "contenido";

    let editar = document.createElement('i');
    editar.className = "far fa-edit";
    editar.id="btnEditar";
    editar.addEventListener("click", actualizarBtn());
    // editar.innerHTML = "Editar";
    contenido.appendChild(editar)

    let texto = document.createElement('p');
    texto.className = "postFinal";
    texto.innerHTML = p.publicacion;
    contenido.appendChild(texto)

    let likesPrueba = document.createElement('i');
    likesPrueba.id = "btnLikes";
    likesPrueba.className = "btnDislikes"
    contenido.appendChild(likesPrueba);
    
    let contador = document.createElement('p');
    contador.className = "contadorLikes";
    contador.innerText = p.likes;
    contenido.appendChild(contador);

    if (p.likes == 0){
      likesPrueba.className = "far fa-heart";
    }
    else{
      likesPrueba.className = "fas fa-heart";
    }

    likesPrueba.addEventListener('click', () => {
      // console.log("Hola")
      let publicaciones = localStorage.getItem('publicaciones')
      let likeA = JSON.parse(publicaciones);
      let likesPrueba = likeA.find((item)=>
      item.id == p.id
      )
      if (p.likes == 0){
        likesPrueba.likes = likesPrueba.likes+1;
        likesPrueba.className = "far fa-heart";
      }
      else {
        likesPrueba.likes = likesPrueba.likes-1;
        likesPrueba.className = "fas fa-heart";
      }
      // console.log(likeA)
      localStorage.setItem('publicaciones', JSON.stringify(likeA));
      pintarPost()
      /* likePost(); */
    })

    let eliminar = document.createElement('button');
    eliminar.className = "boton";
    eliminar.id="btnEliminar"
    eliminar.innerHTML = "Eliminar";
    contenido.appendChild(eliminar)
    eliminar.addEventListener('click', () => {
      let obtenerPost = localStorage.getItem('publicaciones');
      let postArray = JSON.parse(obtenerPost);
      let filtroP = postArray.filter((item)=>
        item.id!==p.id
      )
      localStorage.setItem('publicaciones', JSON.stringify(filtroP));
      pintarPost()
    })

    // Funcionalidad boton editar
    let tarjeta = document.getElementById("tarjeta");
    let postPop = document.getElementById("post");
    editar.addEventListener('click', () => {
      tarjeta.classList.add('active');
      postPop.classList.add('active');
      let obtenerPost = localStorage.getItem('publicaciones');
      let postArray = JSON.parse(obtenerPost);
      let actualPost = postArray.find((item)=>
        item.id==p.id
      )
      document.getElementById("publicacion").value = actualPost.publicacion;
      const actualizarbtn = document.getElementById("actualizar");
      actualizarbtn.setAttribute("post-id", actualPost.id);
      // actualizarbtn.addEventListener('click', () => {
      //   console.log(actualPost)   
    })

    post.appendChild(contenido);  
   })  
}


export function guardarBtn (){
  document.getElementById("postear").style.display = "block";
    document.getElementById("actualizar").style.display = "none";
}
export function actualizarBtn (){
  document.getElementById("postear").style.display = "none";
    document.getElementById("actualizar").style.display = "block";
}


export function popUpPost () {
  const popUpPost = document.getElementById("btnnewPost"),
  tarjeta = document.getElementById("tarjeta"),
  postPop = document.getElementById("post"),
  guardar = document.getElementById("postear"),
  cerrar = document.getElementById("cerrar"),
  editar = document.getElementById("btnEditar"),
  actualizar = document.getElementById("actualizar");
  // console.log(popUpPost)
  popUpPost.addEventListener("click", function(){
    tarjeta.classList.add('active');
    postPop.classList.add('active');
    guardarBtn()
  })
  guardar.addEventListener("click", function(){
    tarjeta.classList.remove('active');
    postPop.classList.remove('active');
  })
  cerrar.addEventListener("click", function(){
    tarjeta.classList.remove('active');
    postPop.classList.remove('active');
  })
  actualizar.addEventListener("click", function(){
    guardar.classList.remove('active');
    tarjeta.classList.remove('active');
    postPop.classList.remove('active');
  })
  
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


/* export function eliminarPost (){
    const eliminarPost = document.querySelector(".eliminar");
    eliminarPost.addEventListener('click', () => {
      // const postFinal = document.querySelector(".contenido").value;
      let obtenerPost = localStorage.getItem('publicaciones');
      let postArray = JSON.parse(obtenerPost);
      let filtroP = postArray.filter((item, index)=>{
        return postArray.indexOf(item) === index;
      })
      /* localStorage.getItem('publicaciones', filtroP) */
      /* localStorage.clear('publicaciones') */
   /*    console.log(filtroP)
      
      document.querySelector(".contenido").innerHTML = ""; */
      /* alert("elimindado") */
      /* document.getElementById("content").innerHTML = post; */
/*     })
  } */

// evento likes 

/* export function likePost () {
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
    let prueba = {id:btnLikes.length+1};
    localStorage.setItem('contadorLikes', JSON.stringify(btnLikes));
    likePost();
  })
} */

// Pop UP



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