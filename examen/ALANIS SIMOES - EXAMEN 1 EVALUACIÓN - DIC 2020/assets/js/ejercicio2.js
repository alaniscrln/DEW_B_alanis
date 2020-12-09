let mochila = "";

document.getElementById("catchButton").addEventListener("click", ()=>{
    //obtener el tipo y la raza seleccionada
    let type = document.getElementById("type").value;
    let race = document.getElementById("race").value;
    let name = document.getElementById("name").value;

    let reName = /@\D/i;
    let comprobarName = name.match(reName);
    if(comprobarName == null){
        alert("El nombre debe empezar por '@' ... Inténtalo de nuevo.");
    }else{
        // el name es válido asi q se puede seguir
        
        if(type == 1){
            let pokemon = new Pokemon(type, name, race, randomLevel());
            //guardar pokemon en mochila
            document.getElementById("mochila").value += pokemon.mostrarPokemon();

            let pokemons = document.getElementById("mainPokemonContainer").firstChild;
            
            let op = document.createElement("option");
            op.setAttribute("value", pokemon.name);
            op.textContent =pokemon.name;

        }else{
            let huevo = new Creature (type, race);
            //guardar huevo en mochila
            document.getElementById("mochila").value += huevo.mostrarCreature();


        }


    }

});

function randomLevel() {
    let rand = Math.random() * 11;
    return Math.floor(rand);
   }
   
