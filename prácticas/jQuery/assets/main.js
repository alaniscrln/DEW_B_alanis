$(".loader").show("slow").delay(4000).hide("slow");
cargarArticulos();

//----------------------------------------------------

//evento al botón de agregar a la cesta
$('#agregar').on('click', function () {

    //guardo todos los div de clase "articulo"
    let articulos = [];
    articulos = $(".articulo");

    //por cada artículo...
    $.each(articulos, function (index, articulo) {
        if ($(this).children('input')[0].checked) {   //si el input del artículo esta checked...
            //añadimos el artículo a la cesta
            let nombre = $(this).children('span')[0].textContent;
            let precio = $(this).children('span')[1].textContent;
            $("#cesta").append(nombre + ' - ' + precio + ' €<br>');

            //mostrar precio total
            let total;
            if ($("#total").text() == undefined) total = 0;
            else total = Number($("#total").text());
            total += Number(precio);
            $("#total").text(total);

            //mostrar igic
            let igic = (7 * total) / 100;
            igic = igic.toFixed(2);
            $("#igic").text(igic);

        }

    });

});

//evento al botón de volver a cargar los datos del JSON
$("#cargar-datos").on('click', function () {
    $(".loader").show("slow").delay(4000).hide("slow");    
    setTimeout(cargarArticulos, 2000);
});

//cargar artículos del JSON
function cargarArticulos() {
    //primero hay que limpiar el div para que no aparezcan repetidos
    $("#articulos").empty();

    $.ajax({
        type: "GET",
        url: "http://localhost/jQuery/assets/articulos.json",
        dataType: "json",
        crossDomain: true,
        success: function (articulosJson) {
            let divArticulos = $("#articulos");
            $.each(articulosJson, function (index, articulo) {
                divArticulos.append('<div class="articulo">'
                    + '<input name ="' + articulo.nombre + '" type=checkbox /> '
                    + '<span>' + articulo.nombre + '</span> - '
                    + '<span>' + articulo.precio + '</span> €'
                    + '</div>');

            });
        },
        error: function (xhr, status, error) {
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
        }
    });
}
