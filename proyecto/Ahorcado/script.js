

let palabraJugada = ""; // palabra con la que se juega
let palabraMostrada = ""; // string que ve el jugador en pantalla
let palabras = new Array(); // array donde se guardan las palabras existentes como Productos

let posLetra = new Array(); // array para ir guardando las posiciones de la letra elegida


class Jugador {
    constructor (nombre, puntos){
        this.nombre = nombre;
        this.puntos = puntos;
    }

    getNombre(){
        return this.nombre;
    }

    getPuntos(){
        return this.puntos;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setPuntos(){
        this.puntos += 1;
    }

}


class Productos{
    constructor(titulo, anioLanzamiento, director, actores, poster){
        this.titulo = titulo;
        this.anioLanzamiento = anioLanzamiento;
        this.director = director;
        this.actores = actores;
        this.poster = poster;
    }

    getTitulo(){
        return this.titulo;
    }

    getAnioLanzamiento(){
        return this.anioLanzamiento;
    }

    getDirector(){
        return this.director;
    }

    getActores(){
        return this.actores;
    }

    getPoster(){
        return this.poster;
    }

    setTitulo(titulo){
        this.titulo = titulo;
    }

    setAnioLanzamiento(anioLanzamiento){
        this.anioLanzamiento = anioLanzamiento;
    }

    setDirector(director){
        this.director = director;
    }

    setActores(actores){
        this.actores = actores;
    }

    setPoster(poster){
        this.poster = poster;
    }



}

palabras.push(new Productos("Parque Jurasico"));

// crear jugador

function crearJugador(nombre){
    let jugador = new Jugador(nombre, 0);

}

// guardar una palabra en el array
function guardarPalabra( p ){
    try{
        palabra = new Productos(p);
        palabras.push(palabra);
        palabraJugada = p;
        return true;
    }catch(error){
        return false;
    }
}

// escoger una palabra del array
function palabraRandom(){
    let palabra;
    try{
        palabra = palabras[ Math.random()*(palabras.length - 0) + 0 ];
        palabraJugada = palabra.getTitulo();
        return true;
    }catch(error){
        return false;
    }
}

// comprobar que existe la letra en la palabra y guardar las pos donde se encuentra
function posicionLetra( letra ){

    posLetra = [];  // vaciar el array para que no haya problemas con otras pos de otras letras

    for(let i =0; i < palabraJugada.length; i++){
        if(palabraJugada.charAt(i) == letra){
            posLetra.push(i);
        }
    }
}

// pintar los guiones en pantalla
function pintarGuiones(){
    for(let i = 0; i < palabraJugada.length; i++){
        if(palabraJugada.charAt(i) != ' ' ){
            palabraMostrada += "-";
        }else{
            palabraMostrada += " ";
        }
    }
}

// cambiar un char específico de un string
function setCharAt(texto, pos, letra) { // texto a cambiar, pos donde queremos cambiar, letra nueva a poner
    if(pos > texto.length-1) return texto;
    return texto.substring(0,pos) +  letra + texto.substring(pos+1);
}

// pintar letra en pantalla
function pintarLetra( letra ){

    for(let i = 0; i < posLetra.length; i++){
        palabraMostrada = setCharAt(palabraMostrada, posLetra[i], letra);
    }
}

// PARTIDA DOS JUGADORES:

/*
Implementar la dinámica de juego completa con dos jugadores (de forma local) y el número de partidas a jugar.

Guardar tanto en cookies como en webstorage: el usuario, el número de victorias y el número de partidas realizadas. 
Se tiene que poder visualizar esta información en algún momento, así como eliminarla.

Implementar las clases necesarias para el desarrollo completo del juego, mínimo se deben crear dos, con sus propiedades y métodos. 

Añadir información extra a producto: año de lanzamiento, director, actores, poster e imágenes. 

*/


/*

se guarda en cookies y en webstorage simplemente para poder ir tabajandolas, pero lo logico seria solo usar una, en este caso
webtorage.

IDEA:

se guardan los dos jugadores  (cookies y webstorage). 
se solicita el num de rondas.
jugador1 introduce la primera palabra
jugador2 juega.
se dice si jugador 2 gano o perdio
jugador2 introduce otra palbra
juega jugador1
.
.
.
.
al terminar todas las rondas, se dice quien ha ganado
se pregunta si se quiere volver a jugar.
si se juega de nuevo, se borran los datos y se vuelve al principio
si se quiere dejar de jugar, se borran los datos y se muestra mensaje


*/


//por mi crearia una clase jugador, pero el profe quiere q se guarde en cookies y en webstorage... asi q no se si crearla o no

function guardarJugador(jugador){   // jugador es el nombre del jugador

    document.cookie = "jugador-" + jugador + " = " + jugador; // jugador-alanis = alanis
    localStorage.setItem("jugador-" + jugador, jugador);
    /*
    if(document.cookie == null){
        document.cookie = "jugador1 = " + jugador;
        localStorage.setItem("jugador1", jugador);        
    }else{
        document.cookie = "jugador2 = " + jugador;
        localStorage.setItem("jugador2", jugador);
    }
*/
}

function guardarVictoriaJugador(jugador, numVictorias){ // jugador es el nombre del jugador

    document.cookie = "jugador-" + jugador + " = " + jugador + "; victorias = " + numVictorias;
    localStorage.setItem("victoriasJugador-"  + jugador, numVictorias);
  
    /*
    document,cookie = "jugador1 = " + jugador + "; victorias = " + numVictorias;
    localStorage.setItem("victoriasJugador1", numVictorias);
*/
}

/*
function guardarVictoriaJug2(jugador, numVictorias){
    document.cookie = "jugador2 = " + jugador + "; victorias = " + numVictorias;
    localStorage.setItem("victoriasJugador2", numVictorias);
}

*/

