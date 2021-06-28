export function ingreso (){
    const ingresoHTML = `<section>
    <div id="ingreso">
    <header>
      <img id="logoH" src="recursos/logoapp.png">
    </header>

    <article>
      <p class="texto"> Con MakeApp podrás acceder a todo el contenido del mundo del maquillaje, información sobre los productos utilizados por los más grandes maquilladores, aprender diferentes técnicas y enterarte de nuevas tendencias. </p>
    </article>

    <input type="text" placeholder="Ingresa tu nombre" id="input">

    <a href="#/ingreso"></a>

    <div id="prueba"></div>

    <button type="button" id="botonIngresar">Ingresar</button>
    
  </div>
  </section>
    `
    return ingresoHTML;
}

function guardarNombre() {
  let nombre = document.getElementById("input");
  let nombreUsuario = nombre.value;
  localStorage.setItem('nombre', nombreUsuario);
  console.log(nombreUsuario)
  // document.getElementById("prueba").innerHTML = nombre;
}



// export function ingresoApp() {
//   const btnIngreso = document.getElementById("botonIngresar");
//   btnIngreso.addEventListener("click", () => {
//     console.log("estamos probando")
//     window.location = "#home";
//     location.reload();
//   });
// }


