let rondas = localStorage.getItem("rondas");
let jugador = new Jugador(localStorage.getItem("jugador1"), 0);
//let jugador = jugadores[0];
let partida = new Partida(rondas, jugador);

function crearTeclas() {
    //fragment es un doc pequeño donde se guarda mucha info, para cuando
    //ya este todo guardado en ella, empujarlo de una al html.
    const fragment = document.createDocumentFragment();
    const letras = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
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
            let mensaje = document.getElementById("container-mensaje");

            //primero hay que comprobar que la letra no haya sido usada antes, para que si es errónea, no sume otro error.
            if (!esRepetida(letra)) { // si la letra no ha aparecido antes, se juega con ella
                //todavia tiene intentos y no ha adivinado la palabra
                if (partida.errores < 6 && !haGanado()) {
                    posicionLetra(letra);   // comprobar que existe la letra en la palabra y guardar las pos donde se encuentra
                    if (posLetra.length == 0) { // si está vacio, significa q la letra era erronea
                        partida.sumarError();
                        pintarLetrasUsadas(letra);
                        pintarAhorcado(partida.errores);
                    } else {
                        pintarLetraString(letra);   // modifico string de palabraMostrada
                        pintarLetrasUsadas(letra);
                        pintarPalabraMostrada();
                    }
                }

                //ya ha adivinado la palabra
                if (partida.errores < 6 && haGanado()) {
                    mensaje.style.visibility = "visible";
                    mensaje.textContent = "¡Qué bien! Has ganado esta ronda";
                    jugador.sumarPunto();
                    document.getElementById("container-pelicula").style.visibility = "visible";
                    siguientePartida();
                }

                //no ha adivinado la palabra y no le quedan intentos
                if (partida.errores >= 6) {
                    mensaje.style.visibility = "visible";
                    mensaje.textContent = "¡Oh, no! Has perdido... La solución es... ";
                    document.getElementById("container-pelicula").style.visibility = "visible";
                    siguientePartida();
                }
            }else{  //la letra ya se ha usado
                alert("¡Ya has usado esa letra! Escoge otra");
            }

        });

        fragment.appendChild(btn);  // guardamos en fragment cada btn de letra

        if (letra == "p" || letra == "ñ" || letra == "9") {   // mostrar teclado en filas
            fragment.appendChild(document.createElement("br"));
        }

    });

    return fragment;
}

function esRepetida(letra) {
    let letrasUsadas = document.getElementById("letras-usadas").textContent;
    let patt = new RegExp(letra);

    if (patt.test(letrasUsadas)) {
        return true;
    } else {
        return false;
    }
}

function getCtx() {
    var lienzo = document.getElementById("canvas");
    return lienzo.getContext('2d');
}

function pintarLetrasUsadas(letra) {

    if (esRepetida(letra)) {
        alert("¡Ya has usado esa letra! Escoge otra");
    } else {
        document.getElementById("letras-usadas").textContent += (letra + "  ");
    }

}

function pintarPalabraMostrada() {
    //para que solo aparezca una vez en pantalla
    document.getElementById("guiones").remove();

    //crear elemento
    let guiones = document.createElement("h1");
    guiones.setAttribute("id", "guiones");
    guiones.textContent = palabraMostrada;

    //crear estructura
    document.getElementById("container-palabraMostrada").appendChild(guiones);
}

function pintarHorca() {
    let ctx = getCtx();
    ctx.fillStyle = '#663333';
    ctx.fillRect(30, 240, 200, 9);
    ctx.fillRect(64, 9, 20, 237);
    ctx.fillRect(64, 9, 115, 20);
    ctx.fillRect(155, 9, 4, 40);
    ctx.beginPath();
    ctx.moveTo(70, 65);
    ctx.lineTo(70, 80);
    ctx.lineTo(133, 11);
    ctx.lineTo(118, 11);
    ctx.closePath();
    ctx.fill();
}

function pintarAhorcado(numError) {
    let ctx = getCtx();
    switch (numError) {
        case 1: //pintar cabeza
            ctx.beginPath();
            ctx.arc(157, 75, 25, 0, 2 * Math.PI);
            ctx.lineWidth = 3;
            ctx.stroke();
            break;
        case 2: //pintar cuerpo
            ctx.beginPath();
            ctx.fillStyle = 'black';
            ctx.rect(154, 100, 3, 75);
            ctx.fill();
            break;
        case 3: //pintar brazo izq
            ctx.beginPath();
            ctx.moveTo(154, 110);
            ctx.lineTo(125, 135);
            ctx.lineWidth = 3;
            ctx.stroke();
            break;
        case 4: //pinta brazo der
            ctx.beginPath();
            ctx.moveTo(156, 110);
            ctx.lineTo(183, 135);
            ctx.lineWidth = 3;
            ctx.stroke();
            break;
        case 5: //pintar pierna izq
            ctx.beginPath();
            ctx.moveTo(154, 173);
            ctx.lineTo(125, 200);
            ctx.lineWidth = 3;
            ctx.stroke();
            break;
        case 6: //pintar pierna der
            ctx.beginPath();
            ctx.moveTo(156, 173);
            ctx.lineTo(183, 200);
            ctx.lineWidth = 3;
            ctx.stroke();
            break;

    }

}

//comprobar que la palabraMostrada no tenga ningun guion
function haGanado() {
    let result = true;
    for (let i = 0; i < palabraMostrada.length; i++) {
        if (palabraMostrada.charAt(i) == '-') {
            result = false;
            i = palabraMostrada.length; // para salir del bucle
        }
    }
    return result;
}

function siguientePartida() {
    if (document.getElementById("btnSiguientePartida") == undefined) {  //para q solo se cree el boton una vez
        //creo el boton
        let btnSiguientePartida = document.createElement("button");
        btnSiguientePartida.setAttribute("type", "button");
        btnSiguientePartida.setAttribute("id", "btnSiguientePartida");
        btnSiguientePartida.textContent = "Siguiente Partida";
        btnSiguientePartida.classList.add("btn");
        //inserto el boton en el container
        document.getElementById("container-boton").appendChild(btnSiguientePartida);

        btnSiguientePartida.addEventListener("click", () => {

            if (partida.rondaActual < partida.numRondas) {
                // establecer todo para la nueva partida
                partida.siguienteRonda();
                init();

            } else {    // ya se ha terminado la partida
                localStorage.setItem("puntos-jugador1", jugador.getPuntos());
                if (jugador.puntos < (partida.numRondas / 2)) {
                    //ha perdido la partida
                    window.location.href = './hasPerdido.html';
                } else {
                    //ha ganado la partida
                    window.location.href = './hasGanado.html';
                }
            }

            document.getElementById("container-mensaje").style.visibility = "hidden";

        });
    }
}

function actualizarCanvas(ctx) {
    var lienzo = document.getElementById("canvas");
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, lienzo.width, lienzo.height); //Esto es para limpiar el canvas
    pintarHorca();
}

function pintarDatosPelicula(poster, titulo, anio, genero, director, actores) {
    let tituloPelicula = document.getElementById("tituloPelicula");
    let anioPelicula = document.getElementById("anioPelicula");
    let generoPelicula = document.getElementById("generoPelicula");
    let directorPelicula = document.getElementById("directorPelicula");
    let actoresPelicula = document.getElementById("actoresPelicula");
    let elemPoster = document.getElementById("poster");

    elemPoster.setAttribute("src", poster);
    elemPoster.setAttribute("alt", titulo);

    tituloPelicula.textContent = "Título: " + titulo;
    anioPelicula.textContent = "Lanzamiento: " + anio;
    generoPelicula.textContent = "Género: " + genero;
    directorPelicula.textContent = "Director: " + director;
    actoresPelicula.textContent = "Actores principales: " + actores;

    document.getElementById("container-pelicula").style.visibility = "hidden";

}

//establecer valores iniciales y cargar palabra aleatoria
function cargarInfo() {
    document.getElementById("ronda").textContent = "Ronda: " + partida.rondaActual;
    document.getElementById("letras-usadas").textContent = "";
    document.getElementById("jugador").textContent = "Jugando: " + jugador.getNombre();
    document.getElementById("puntosJugador").textContent = "Puntos: " + jugador.getPuntos();
    partida.resetearErrores();
    actualizarCanvas(getCtx());

    //para no repetir el teclado
    document.getElementById("container-teclas").remove();
    let container_teclas = document.createElement("div");
    container_teclas.setAttribute("class", "container-teclas");
    container_teclas.setAttribute("id", "container-teclas");
    container_teclas.appendChild(crearTeclas());
    document.getElementById("teclado").appendChild(container_teclas);

}

const quitarAcentos = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

function init() {

    cargarInfo();

    fetch("json/peliculas.json")
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (peliculas) {

            let pelicula = peliculas[(Math.random() * peliculas.length) | 0];   //index aleatorio

            let tituloSinAcento = quitarAcentos(pelicula.titulo.toLowerCase());

            //me falta evitar q se repitan las pelis en la misma partida

            guardarPalabra(tituloSinAcento);
            pintarGuiones();
            pintarPalabraMostrada();
            pintarDatosPelicula(pelicula.poster, pelicula.titulo, pelicula.fecha_lanzamiento,
                pelicula.genero, pelicula.director, pelicula.actores);

        });

}

window.addEventListener("load", init());
