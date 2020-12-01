const unJugador ={
    jugador: null,
    //----------------------------

    guardarJugador(nombre){
        this.jugador = crearJugador(nombre);
    },
    
    sumarPunto(){
        this.jugador.setPuntos();
    }
}

const dosJugadores = {
    jugador1 : null,
    jugador2 : null,
    //-----------------------------

    guardarJugadores(nombre1, nombre2){
        this.jugador1 = crearJugador(nombre1);
        this.jugador2 = crearJugador(nombre2);
    },

    sumarPuntoJugador1(){
        this.jugador1.setPuntos();
    },

    sumarPuntoJugador2(){
        this.jugador2.setPuntos();
    }
}