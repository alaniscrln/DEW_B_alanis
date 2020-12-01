const teclado = {   //elemento teclado
    elementos: {
        containerTeclado: null,
        containerTeclas: null,
        teclas: []
    },
    propiedades: {
        valor: ""   // aqui va la letra
    },

    // metodos

    init() {
        // crear contenedores
        this.elementos.containerTeclado = document.createElement("div");
        this.elementos.containerTeclado.setAttribute("id", "teclado");
        this.elementos.containerTeclas = document.createElement("div");
        this.elementos.containerTeclas.classList.add("container-teclas");

        //crear la estructura
        document.body.appendChild(this.elementos.containerTeclado);
        this.elementos.containerTeclado.appendChild(this.elementos.containerTeclas);
        this.elementos.containerTeclas.appendChild(this.crearTeclas());

        this.elementos.teclas = this.elementos.containerTeclas.querySelectorAll(".tecla");

    },

    crearTeclas() {

        //fragment es un doc pequeño donde se guarda mucha info, para cuando
        //ya este todo guardado en ella, empujarlo de una al html. asi se evita el reflow
        //Reflow sucede cuando un nav debe procesar y pintar parte de una web nuevamente (f5)
        const fragment = document.createDocumentFragment();
        const letras = [
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ",
            "z", "x", "c", "v", "b", "n", "m"
        ];

        letras.forEach(letra => {
            btn = document.createElement("button");

            btn.setAttribute("type", "button");
            btn.classList.add("tecla");

            btn.textContent = letra;
            btn.addEventListener("click", (btn) => {
                this.propiedades.valor = letra;
                // metodos del archivo "metodos.js"
/*
                if (errores < 6) {  // errores es de metodos.js

                    if (!this.haGanado()) {
                        posicionLetra(letra);   // comprobar que existe la letra en la palabra y guardar las pos donde se encuentra
                        if (posLetra.length == 0) { // si está vacio, significa q la letra era erronea
                            errores += 1;
                            this.pintarLetrasUsadas(letra);
                        } else{
                            pintarLetraString(letra);   // modifico string de palabraMostrada
                            this.pintarLetrasUsadas(letra);
                            this.pintar();
                        }
                    }
                    
                    if(this.haGanado()){      // si se ha ganado la partida
                        // ir a otra pag q sea has ganado
                        window.location.href = "./hasGanado.html";
                    }


                } else {
                    // ir a otra pagina q sea "has perdido"
                    window.location.href = "./hasPerdido.html";
                }

*/

            });

            fragment.appendChild(btn);  // guardamos en fragment cada btn de letra

            if (letra == "p" || letra == "ñ") {   // mostrar teclado en filas
                fragment.appendChild(document.createElement("br"));
            }

        });

        return fragment;
    },

    pintar() {

        //para que solo aparezca una vez en pantalla
        document.getElementById("guiones").remove();

        //crear elemento
        let guiones = document.createElement("p");
        guiones.setAttribute("id", "guiones");
        guiones.textContent = palabraMostrada;

        //crear estructura
        document.getElementById("container-palabraMostrada").appendChild(guiones);
    },

    pintarLetrasUsadas(letra) {
        document.getElementById("letras-usadas").textContent += (letra + "  ");
    },

    haGanado() {

        let result = true;
        for (let i = 0; i < palabraMostrada.length; i++) {
            if (palabraMostrada.charAt(i) == '-') {
                result = false;
                i = palabraMostrada.length; // para salir del bucle
            }
        }
        return result;
    }
};

window.addEventListener("load", teclado.init());