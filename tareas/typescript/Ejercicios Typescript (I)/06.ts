/*
6. Para convertir grados Farenheit (`F`) a Celsius (`C`) se usa la siguiente 
expresión: `C = (F − 32) * 5/9`. Implementar una función que realice esta conversión 
(comprueba que 32ºF son 0ºC y que 75.2ºF son 24ºC).
*/

console.log(fToC(32));
console.log(fToC(75.2));

function fToC(gradosF: number): number {

    return (gradosF - 32) * 5 / 9;

}