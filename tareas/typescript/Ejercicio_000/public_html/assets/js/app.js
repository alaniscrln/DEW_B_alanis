"use strict";
var nombreAplicacion = "Ejercicio 000";
document.getElementById("nombreAplicacion").innerHTML = nombreAplicacion;
/*
let var1: number = 22;
console.log(var1);
var1= var1.toUpperCase();
console.log(var1);

enum Color1{Red, Green, Blue};
enum Color2{Red=1,  Green=2, Blue=4}
let c1: Color1 = Color1.Blue;
let c2: Color2 = Color2.Blue;

console.log(c1);
console.log(c2);*/
function test(param) {
    return param;
}
var xin = 5, xout;
var yin = '5', yout;
xout = test(xin);
yout = test(yin);
console.log(xout);
console.log(yout);
/*
type misVideojuegos = string | number;

let godOfWar: misVideojuegos = "aaaa";
let cuphead: misVideojuegos = 11;

///////////////////
interface Mueble {
    nombre: string;
    material: string;
    alto?: number;
    ancho?: number;
    profundo?: number;
    color?: string;
}


class Persona {
    nombre: string;
    estado: string;
    materialPredilecto: string;

    constructor(nombre: string, materialPredilecto: string = "") {
        this.nombre = nombre;
        this.estado = "De Pie";
        this.materialPredilecto = materialPredilecto;
    }

    usarMueble(mueble: Mueble): string {
        switch (mueble.nombre) {
            case "silla":
                this.estado = "sentado";
                break;
            case "cama":
                this.estado = "acostado";
                break;
            case "armario":
                this.estado = "vistiéndose";
                break;
            default:
                this.estado = "confundido";
        }
        return this.nombre + " está " + this.estado;
    }

    reaccionMaterial(mueble: Mueble) {
        if (this.materialPredilecto === mueble.material) {
            return mueble.nombre + " le gusta a " + this.nombre;
        } else {
            return this.nombre + " se muestra indiferente ante " + mueble.nombre;
        }
    }
}


let silla: Mueble = { nombre: 'silla', material: 'metal' };

let persona1: Persona = new Persona("alanis", "metal");



console.log(persona1.usarMueble(silla));
console.log(persona1.reaccionMaterial(silla));
*/ 
