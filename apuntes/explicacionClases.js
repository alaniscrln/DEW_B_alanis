// FECHA 26 OCT 2020

// js tiene un modo estricto q cambia la ejecucion del js

//ejemplos

function myFunction (p1, p2, p1){
    "use strict";
    alert(p1);  // en modo strict esto peta, en modo normal, p1 tendria el valor del ultimo param
    alert(p2);
}

// hay muchos mas ejemplos de strict


// CLASES

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

var persona1 = new Persona("Eduardo", "Da Silva");

// las clases nos meten automaticamente las funciones y propiedades al prototipo.
// en las clases no existe private

// HERENCIAS

class Animal{
    constructor(ojos, pelo){
        this.ojos = ojos;
        this.pelo = pelo;
    }

    correr(){
        console.log("corriendo...");
    }
}

class Perro extends Animal{

    // no es posible tener mas de un constructor

    constructor(ojos, pelo, apodo){
        super(ojos, pelo);      // LLAMO AL CONSTRUCTOR PADRE
        this.apodo = apodo;
    }

    correr(){
        console.log("corriendo muy rapido"); // sobreescribo el padre
    }

    ladrar(){   // se añade este metodo al prototipo tambn
        console.log("guau, guau");
    }

    // metodo estatico. podemos llamarla sin crear un obj
    // los metodos static no aparecen en el prototype, tampoco se puede añadir. 

    static queEres(){
        console.log("Los perros somos los mejores amigos del hombre");
    }

}

//MAPAS

var mapa = new Map();

mapa.set(0, "ceor");
mapa.set(1, "uno");

for(let[clave, valor] of mapa){
    alert(clave + " = " + valor);
}


// MANEJO DE ERRORES

function test(){

    try{

        var a = Number(3);
        var b = Number(x);
        if(isNaN(a) || isNaN(b)){
            throw new Error("TE HAS EQUIVOCADO");
        }else{
            alert(a + b);
        }
    }catch(error1){

        alert("Error: " + error1);

    }finally{    // se ejecuta siempre
        alert("Recarga la pag");
    }

}

// EVAL

// ejecutar un string

eval( alert("Hola mundo") );

let cod = "2 < 4";

alert( eval(cod) ); // mostrara true;
