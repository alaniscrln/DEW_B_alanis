let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    if (comprobarJugador()) {
        //unJugador.guardarJugador(document.getElementById("jugador1").value);
        //console.log(document.getElementById("jugador1").value);
        //let jugador = crearJugador(document.getElementById("jugador1").value);
        //console.log(jugador.getNombre() + "en formjugador");
        localStorage.setItem("jugador1", document.getElementById("jugador1").value);
        window.location.href = "partidanueva.html";
    }
});

//-----------------------------------------------------

function comprobarJugador() {
    let nombreJugador = document.getElementById("jugador1").value;
    let re = /\w/g;
    if (nombreJugador.match(re) == null) {
        alert("Por favor, ¡introduzca bien el nombre del jugador!");
        return false;
    } else {
        return true;
    }
}