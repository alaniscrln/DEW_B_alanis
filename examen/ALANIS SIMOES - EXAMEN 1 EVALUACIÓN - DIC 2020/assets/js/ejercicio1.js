
   
document.getElementById("agregar").addEventListener("click", ()=>{

    // todos los div de clase articulo
    let articulos =[];
    articulos = document.querySelectorAll(".articulo");

    articulos.forEach(articulo => {
        //aqui esta guardado los 3 elementos del div.articulo
        let contenedor = articulo.children;

        //comprobar que el articula esta seleccionado (checked)
        if(contenedor[0].checked){
            //MOSTRAR ARTICULOS EN LA CESTA
            document.getElementById("cesta").innerHTML += contenedor[1].textContent + " - " + contenedor[2].textContent + "€<br>"; 

            // COGER EL TOTAL ACTUAL
            let total = Number(document.getElementById("total").textContent);
            if(total == "") total = 0; // en caso de que no haya nada, poner 0€

            //MOSTRAR EL TOTAL
            total += Number(contenedor[2].textContent);
            total = total.toFixed(2);
            document.getElementById("total").textContent = total;

            //CALCULAR IGIC
            let igic = (7 * total) / 100;
            igic = igic.toFixed(2);
            document.getElementById("igic").textContent = igic;
        }
    
    });

});
