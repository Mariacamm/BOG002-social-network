export function home() {
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

