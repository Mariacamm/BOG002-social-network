import { home } from "../../views/home.js"

const PATHS = {
    ingreso: {
        path: "/",
        template: home(),
    },
    home: {
        path: "#home",
        template: `<h1>👩🏻‍💻 Sobre mi</h1>`,
    },
    perfil: {
        path: "#perfil",
        template: `<h1>📱 Contacto</h1>`,
    }
}

export function router(path){


}