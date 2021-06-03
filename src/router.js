/* class Router {

    //constructor
   constructor(paths){
       let paths= paths
   }

    //metodo para inicializar el router
iniRouter(){
    const {
        location: { pathname = '/'}
    } = window
    const URI = pathname === '/' ? 'home' : pathname.replace('/', '');
}
    
    //metodo para cargar las vistas


} */

page('/', home)
page('/inicio', inicio)
page('/perfil', perfil)
page('/mensaje', mensaje)

function home () {
    document.querySelector('p').textContent= 'Aqui esta el home'
}

function inicio () {
    document.querySelector('p').textContent= 'Aqui esta el inicio'
}

function perfil () {
    document.querySelector('p').textContent= 'Aqui esta el perfil'
}

function mensaje () {
    document.querySelector('p').textContent= 'Aqui esta el mensaje'
}
