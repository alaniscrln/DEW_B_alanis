/*
1. Implementar el control de 3 variables (a, b, c) para que se muestre un mensaje
de error cuando se produzca alguna de las siguientes situaciones (el mensaje de error
debe indicar qué situacion(es) no se cumplieron):

a) Al menos una de las 3 variables es negativa

b) Las tres variables son iguales a 0

c) Las suma de las 3 variables es mayor que 10 Y las tres variables son diferentes

*/


let a : number = -4;
let b : number = 0;
let c : number = 11;


if(a < 0 || b < 0 || c < 0){
    console.log("ERROR: Hay al menos una variable negativa.");
}
if(a == 0 && b == 0 && c == 0){
    console.log("ERROR: Las tres variables son iguales a 0.");
}
if( (a+b+c) > 10 && ( (a!=b) && (a!=c) && (b!=c) ) ){
    console.log("ERROR: Las suma de las 3 variables es mayor que 10 Y las tres variables son diferentes");
}