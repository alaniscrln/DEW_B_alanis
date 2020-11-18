const teclado = {
    elementos: {
        main: null,
        contenedorTeclas: null,
        teclas: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    propiedades: {
        valor: "",
        mayus: false
    },

    inicio() {
        //crear los elemetos o
        this.elementos.main = document.createElement("div");
        this.elementos.contenedorTeclas = document.createElement("div");

        this.elementos.main.classList.add("teclado");
        this.elementos.contenedorTeclas.classList.add("teclado-teclas");
        this.elementos.contenedorTeclas.appendChild(this.crearTeclas());
        this.elementos.teclas = this.elementos.contenedorTeclas.querySelectorAll(".tecla");



        this.elementos.main.appendChild(this.elementos.contenedorTeclas);
        document.body.appendChild(this.elementos.main);


        document.querySelectorAll(".usa-teclado").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });

    },

    crearTeclas() {
        const fragment = document.createDocumentFragment();
        const teclaLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "?", "¿", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ",
            "z", "x", "c", "v", "b", "n", "m", ",", ".",
            "space"
        ];

        //funcion q crea html para un icon

        const creaIconoHTML = (nombreIcono) => {
            return `<i class="material-icons">${nombreIcono}</i>`;
        };

        teclaLayout.forEach(tecla => {
            const teclaElemento = document.createElement("button");
            const insertSalto = ["backspace", "p", "ñ", "."].indexOf(tecla) !== -1;

            //añadir clases a tecla

            teclaElemento.setAttribute("type", "button");
            teclaElemento.classList.add("tecla");

            switch (tecla) {
                case "backspace":
                    teclaElemento.innerHTML = creaIconoHTML("backspace");

                    teclaElemento.addEventListener("click", () => {
                        this.propiedades.valor = this.propiedades.valor.substring(0, this.propiedades.valor.length - 1);
                        this.triggerEvent("oninput");
                    });
                    break;

                case "space":
                    teclaElemento.classList.add("tecla-ancha");
                    teclaElemento.innerHTML = creaIconoHTML("space_bar");

                    teclaElemento.addEventListener("click", () => {
                        this.propiedades.valor += " ";
                        this.dispartriggerEventadorEvento("oninput");
                    });
                    break;

                default:
                    teclaElemento.textContent = tecla.toLowerCase();
                    teclaElemento.addEventListener("click", () => {
                        this.propiedades.valor += tecla;
                        this.triggerEvent("oninput");
                    });
                    
            }

            fragment.appendChild(teclaElemento);

            if(insertSalto){
                fragment.appendChild(document.createElement("br"));
            }

        });

        return fragment;
    },

    triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.propiedades.valor);
        }
    },

    disparadorEvento(handlerEvent) {
        console.log("evento " + handlerEvent + " lanzado");
    },

    mayusActivado() {
        console.log("mayuda activas");
    },

    open(valorInicial, oninput, onclose) {
        this.propiedades.valor = valorInicial || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
    },

    close() {

    }

};

window.addEventListener("DOMContentLoaded", function () {
    teclado.inicio();
});