class Pokemon extends Creature{
    constructor(type, name, race, level){
        super(type, race);
        this.name = name;
        this.level = level;
    }

    mostrarPokemon(){
        return '{"type":"' + this.type + '", "name":"' + this.name +  '", "race":"' + this.race +  '", "level":"' + this.level + '"}';
    }
}