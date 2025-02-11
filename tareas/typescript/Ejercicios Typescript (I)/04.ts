/*
4. En el siguiente bucle while tenemos que tener cuidado porque hay operaciones que pueden dar error 
(no puede haber raíces cuadradas de números negativos, ni divisiones por cero).

let result = 1, arg1, arg2, res1, res2;

while (result > 0) {

  arg1 = Math.random() - 0.5;

  res1 = Math.sqrt(arg1);

  arg2 = Math.random();

  res2 = res1/(arg1 + arg2);

  result = res1 + res2;

  console.log(result);

}

a) Cambia el bucle while usando continue y break para que si hay una raíz cuadrada de un número 
negativo directamente pase a la siguiente iteración. En el caso de haber una división por cero, 
el bucle debe detenerse inmediatamente.
*/

let result: number = 1;
let arg1: number, arg2: number, res1: number, res2: number;

while (result > 0) {

    arg1 = Math.random() - 0.5;

    if (arg1 < 0) continue;

    res1 = Math.sqrt(arg1);

    arg2 = Math.random();

    if ((arg1 + arg2) == 0) break;

    res2 = res1 / (arg1 + arg2);

    result = res1 + res2;

    console.log(result);

}

/*
b) Prueba a realizar el apartado anterior sin usar ni continue ni break. ¿Es más sencillo?
*/

while (result > 0) {

    arg1 = Math.random() - 0.5;

    if (arg1 >= 0) {

        res1 = Math.sqrt(arg1);

        arg2 = Math.random();

        if ((arg1 + arg2) != 0) {

            res2 = res1 / (arg1 + arg2);

            result = res1 + res2;

            console.log(result);
        }

    }

}


/*
c) Cambia el bucle while original para que se ejecute sin tener que asignar un valor inicial a la variable result.

*/

do {
    
    arg1 = Math.random() - 0.5;

    if (arg1 >= 0) {

        res1 = Math.sqrt(arg1);

        arg2 = Math.random();

        if ((arg1 + arg2) != 0) {

            res2 = res1 / (arg1 + arg2);

            result = res1 + res2;

            console.log(result);
        }

    }
} while (result > 0);
