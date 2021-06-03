export function perfil (){
    const perfilHTML = `
    <section>
    <header>
      <img src="recursos/logoapp.png"> 
    </header>
    <div class="contenedorPerfil" id="perfil">
      <input type="image" src="imagenes/home.png" class="btninicio">
      <input type="image" src="imagenes/mensaje.png" class="btnmensaje">
      <input type="image" src="imagenes/perfil.png" class="btnperfil">
      <input type="image" src="imagenes/salir.png" class="btnsalir">
    </div>
  </section>
    `
    return perfilHTML;
}
