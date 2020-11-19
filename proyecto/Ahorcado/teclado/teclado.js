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
        this.elementos.containerTeclado.classList.add("teclado");
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
            btn.addEventListener("click", () => {
                this.propiedades.valor = letra;
                //escribir letra en la zona de texto
                zonaTexto = document.querySelector(".usa-teclado");
                zonaTexto.textContent = this.propiedades.valor;
            });

            fragment.appendChild(btn);  // guardamos en fragment cada btn de letra

            if (letra == "p" || letra == "ñ") {   // mostrar teclado en filas
                fragment.appendChild(document.createElement("br"));
            }

        });

        return fragment;
    }

};

window.addEventListener("load", teclado.init());