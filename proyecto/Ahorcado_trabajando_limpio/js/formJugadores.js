let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    if (comprobarJugadores()) {
        localStorage.setItem("jugador1", document.getElementById("jugador1").value);
        localStorage.setItem("jugador2", document.getElementById("jugador2").value);

        let jugadorActivo = Math.floor(Math.random() * (2 - 1 + 1) + 1);    // escoge un num aleatorio entre 1 y 2
        localStorage.setItem("jugadorActivo", jugadorActivo);
   
        window.location.href = "palabra.html";
    }
});

//-----------------------------------------------------

function comprobarJugadores() {
    let nombreJugador1 = document.getElementById("jugador1").value;
    let nombreJugador2 = document.getElementById("jugador2").value;
    
    let re = /\w/g;
    if (nombreJugador1.match(re) == null || nombreJugador2.match(re) == null ) {
        alert("Por favor, ¡introduzca bien el nombre de los jugadores!");
        return false;
    } else {
        return true;
    }
}