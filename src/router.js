import { home } from "./home.js"

const PATHS = {
    home: {
        path: "/",
        template: home(),
    },
    about: {
        path: "/about",
        template: `<h1>👩🏻‍💻 Sobre mi</h1>`,
    },
    contact: {
        path: "/contact",
        template: `<h1>📱 Contacto</h1>`,
    }
}

export function router(path){
    

}