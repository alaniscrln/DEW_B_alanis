//definir y crear un obj utilizando literal

var persona1 ={
    nombre: "Alanis Carolina",
    apellidos: "Simoes Villalonga",
    dni: "y0695941k",
    edad: 21
};

//definir un obj utilizando new

var persona2 = new Object();
persona2.nombre = "Eduardo";
persona2.apellidos = "Da Silva Yanes";
persona2.dni = "123458s";
persona2.edad = 21;

//definir un constructor de objetos (similar a una clase)

function Persona(nom,apell, dn, ed){
    this.nombre = nom;
    this.apellidos = apell;
    this.dni = dn;
    this.edad = ed;
}

var persona3 = new Persona("Haydee Abigail", "SIñani Quispe", "12345678a", 24);

// acceder a las propiedades de un obj

persona1.nombre;
persona2["nombre"]; // hace lo mismo q la de arriba. debe tener las comillas
Object.values(persona3); // muestra los atrib
Object.keys(persona2);

//RECORRER PROP DE UN  OBJ

for( x in persona1){
    document.write(x + " "); // en un doc guarda las propiedades (atrib) de persona1
}

// añadir propiedades a obj

persona1.nacionalidad = "portuguesa"; // solo se añade a persona1, el resto no tiene el atrib 'nacionalidad'
// es posiblr hacer: Persona.nacionalidad;

// borrar propiedad de obj

delete persona1.edad;

//---------------------MÉTODOS-------------------------


//crear metodo dentro de un obj
var persona4 ={
    nombre: "Maria Cristina",
    apellidos: "Castro Cabrera",
    dni: "87654321a",
    edad: 21,

    //dos formas de añadir métodos
    
    nombreCompleto: function(){
        return this.nombre + " " + this.apellidos;
    },          // imporTANTE NO olvidar la coma
    dniEdad() {
        return this.dni + " y " + this.edad;
    }
 };

// ver propiedades de un obj (de otra forma)

Object.getOwnPropertyNames(persona4);

// OBJ ANIADOS

//definir de forma literal

var pelicula1 = {
    titulo = "Avatar",
    director: {
        nombre: "James",
        apellido: "Cameron"
    }
};

//para acceder
pelicula1.director.nombre;
pelicula1["director"].nombre;
pelicula1["director"]["apellido"];


// --------------------------------------PROTOTIPOS--------------------------------------

// cada vez q se crea un obj, se crea un prototipo. Ese prototipo tiene todos los metodos 
//heredados de sus 'ancestros'

//  "creacion" del prototpo: (en realidad constructor y prototipo son "lo mismo", el prototipo se crea creando el obj constructor)

function Humano (nom, apell, dn, an){
    this.nombre = nom;
    this.apellidos = apell;
    this.dni = dn;
    this.edad = an;

    this.nombreCompleto = function() {
        return this.nombre + " " + this.apell;
    }
}

var humano1 = new Humano("Daniel David", "Simoes Villalonga", "124355k", 17);

// añadir propiedad directamente al prototipo

Humano.prototype.muerte = 80; // se crea en el prototipo, no en el constructor
Humano.prototype.tiempoVida = function(){
    return this.muerte - thid.edad;
}

//---------------HERENCIA SIMPLE Y CADENA DE PROTOTIPOS---------------

function Animal (ojos, pelo){
    this.ojos = ojos;
    this.pelo = pelo;
}

Animal.prototype.correr = function(){
    console.log("Corriendo...");
}


function Perro (apodo, ojos, pelo){
    this.apodo = apodo;
    //herencia de Animal:
    Animal.call(this, ojos,pelo);

}

Perro.prototype.ladrar = function(){
    console.log("guau guau");
}


// union de prototipos 
/*
ojoo
si animal tiene una funcion en su prototipo, perro aunq herede de animal, no puede usar esa funcion.

*/ 
//crear obj nuevo con el prototipo  de animal:

Perro.prototype = Object.create(Animal.prototype); // une los dos prototipos
Perro.prototype.constructor = Perro; // definimos el constructor de perro otra vez, q es Perro.

/* de esta forma, al unir los ,prototipos, perro ya puede usar la funcion correr. Sigue manteniendo su funcion prototipo ladrar. */