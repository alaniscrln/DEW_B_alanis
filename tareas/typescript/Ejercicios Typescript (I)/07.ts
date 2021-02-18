/*
7. En el ejercicio anterior, añadir un argumento opcional booleano de forma 
que si está a `False` (valor por defecto) devuelve sólo el resultado numérico (p.ej: `24`), 
mientras que si se indica `True` le añade la unidad `ºC` (p.ej `24ºC`).
 */

console.log(fAC(32));
console.log(fAC(75.2, true));

function fAC(gradosF: number, unidad: boolean = false): string {

    let result : string = ((gradosF - 32) * 5 / 9).toString();
    
    if(!unidad){
        return result ;
    }else{

        return result + "ºC";
    }
}