

let palabraJugada = ""; // palabra con la que se juega
let palabraMostrada = ""; // string que ve el jugador en pantalla
let palabras = new Array(); // array donde se guardan las palabras existentes como Productos
palabras.push(new Productos("Parque Jurasico"));

let posLetra = new Array(); // array para ir guardando las posiciones de la letra elegida


class Productos{
    constructor(titulo){
        this.titulo = titulo;
    }

    getTitulo(){
        return thid.titulo;
    }


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
function coincideLetra( letra ){

    posLetra = [];  // vaciar el array para que no haya problemas con otras pos

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
            palabraMostrada += "_";
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


