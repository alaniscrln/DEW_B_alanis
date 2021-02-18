/*

8.Genera una lista que contenga el cuadrado de los números pares y el cubo de los impares entre 1 y 100 (inclusive).

 

9. Escribir un programa que proporcione el desglose en el número mínimo de billetes y monedas de una cantidad entera cualquiera de euros dada. Recuerda que los billetes y monedas de uso legal disponibles hasta 1 euro son de: 500, 200, 100, 50, 20, 10, 5, 2 y 1 euros. Para ello deben solicitar al usuario un número entero (comprobar que lo es) y desglosar la cantidad en el número mínimo de billetes y monedas.

 

10. Muestra la fecha y hora actuales en formato: “DD/MM/YYYY hh:mm:ss TimeZone”.

 

11. Construye una fecha a partir del texto “02/04/2015”. Muestra la fecha con console.log, ¿qué obtienes? Prueba ahora con “2015-04-02”.¿Cómo podrías crear una fecha con el texto “April 02, 2015”?

 

12. ¿Cuántos segundos han pasado desde que naciste? ¿y minutos? ¿y horas? ¿y días? Implementaruna función que dada una fecha cualquiera en formato “yyyy-mm-dd”, devuelva cuánto tiempo hapasado desde esa fecha. La función aceptará un segundo parámetro para indicar en qué unidad sequiere obtener el resultado: ‘d’ → días, ‘h’ → horas, ‘m’ → minutos y ‘s’ → segundos. Si no es ninguna de estas unidades, se mostrará un error.

 

13. Implementar una función hdec2hms(x) que transforme una hora en formato decimal a suequivalente en formato hh:mm:ss (en texto). Por ejemplo, 8.25 = “8:15:00” y 10.12 = “10:07:12”.Implementar también la función inversa hms2hdec(h,m,s).

 

14. Como hemos visto, javascript, como muchos otros lenguajes, utilizan el “UNIX EPOCH” que cuenta el tiempo a partir de la medianoche del 1 de enero de 1970. Sin embargo, hay otros tipos de fecha que tienen otro origen del tiempo. Por ejemplo, la fecha juliana empieza a contabilizar eltiempo desde las 12:00 (mediodía) del 1 de enero de 4713 a.C., e indica el número de días (y fracciones) que han transcurrido desde ese momento. La fecha juliana se suele utilizar para calcular el tiempo que ha transcurrido desde eventos que sucedieron en la antigüedad y es aún ampliamente usada para fenómenos astronómicos e históricos lejanos. En la wikipedia (https://es.wikipedia.org/wiki/Fecha_juliana) se puede encontrar la relación entre fecha juliana ytiempo Unix (contado a partir desde 1/1/1970), siendo esta:

fecha_juliana = tiempo_unix + 2440587.5

Implementar una función que dada una fecha en texto (por ejemplo “2018-09-20”), devuelva la fecha juliana equivalente.

Para realizar la suma, ten en cuenta que la fecha juliana almacena días, mientras que el tiempo_unix en javascript contiene milisegundos, por lo que hay que transformarlo en días. Por cierto, ¿de dónde crees que ha salido el valor 2440587.5?

 

15. Cuando hablamos de ángulos, normalmente utilizamos los grados sexagesimales (se suelenrepresentar como “deg”, una circunferencia completa son 360º deg). Sin embargo, en trigonometríaes más común utilizar los radianes (“rad”, una circunferencia completa son 2π rad).

De esta forma, 360º equivalen a 2π. Las funciones trigonométricas de javascript, como la mayoría de lenguajes, trabajan en radianes, sin embargo en muchas ocasiones nosotros vamos a querer trabajaren grados. Por ello, se pide:

a) Implementar una función llamada deg2rad(x) que transforme de grados a radianes, y suinversa rad2deg(x)

b) Implemtentar una función sinDeg(x)que devuelva el seno del ángulo x y otra función cosDeg(x) que devuelva el coseno del ángulo x (en ambos casos x está en grados).

c) El seno y el coseno están relacionados por la siguiente ecuación: sin2x + cos2x = 1.

Utilizar esta relación para implementar una función sinDegAlt(x) que obtenga el senode un ángulo x (en grados) usando para ello la función cosDeg(x) anteriormenteimplementada.

Implementar también la función inversa al apartado anterior:cosDegAlt(x) usando para ello sinDeg(x)
*/