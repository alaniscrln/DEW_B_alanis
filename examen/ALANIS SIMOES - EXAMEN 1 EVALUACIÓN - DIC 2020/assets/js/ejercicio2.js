let mochila = [];
let pokemonPrincipal = "";

document.getElementById("catchButton").addEventListener("click", ()=>{
    //obtener el tipo y la raza seleccionada
    let type = document.getElementById("type").value;
    let race = document.getElementById("race").value;
    let name = document.getElementById("name").value;


    if(!validarNombre(name)){
        alert("El nombre debe empezar por '@' ... Y no se puede repetir nombre. Inténtalo de nuevo.");
    }else{
        // el name es válido asi q se puede seguir
        
        if(type == 1){
            document.getElementById("mainPokemonContainer").style.display = "block";
            document.getElementById("resultContainer").style.display = "block";
            let pokemon = new Pokemon(type, name, race);
            //guardar pokemon en mochila  
            mochila.push(pokemon);

            //creo la opción de la selección del pokemon principal
            let op = document.createElement("option");
            op.setAttribute("value", pokemon.name);
            op.textContent =pokemon.name;

           document.getElementById("selector").appendChild(op);

        }else{
            document.getElementById("mainPokemonContainer").style.display = "block";
            document.getElementById("resultContainer").style.display = "block";
            let huevo = new Creature (type, race);
            //guardar huevo en mochila
            mochila.push(huevo);
        }

        document.getElementById("mochila").value = JSON.stringify(mochila);

    }

});

document.getElementById("btnPokemonPrincipal").addEventListener("click", ()=>{

    let select = document.getElementById("selector");
    //usar la opción seleccionada
    pokemonPrincipal = select.options[select.selectedIndex].value;
});


function validarNombre(name){
    let comprobarName = name.match(/@\D+/i);
    let bienEscrito;
    if(comprobarName != null) bienEscrito = true 
    else bienEscrito = false;
    
    let noSeRepite = true;
    for(let pokemon of mochila){
        if(name == pokemon.name){
            noSeRepite = false;
        }
        
    }

    return bienEscrito && noSeRepite;

}