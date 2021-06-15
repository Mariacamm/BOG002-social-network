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

    
  </section>    
    `
  return homeHTML;
}

export function volverHome() {
  const btnHome = document.getElementById("btninicio");
  btnHome.addEventListener("click", () => {
    window.location = "";
    location.reload();
  });
}

export function perfil() {
  const btnPefil = document.getElementById("btnperfil");
  btnIngreso.addEventListener("click", () => {
    window.location = "#perfil";
    location.reload();
  });
}

