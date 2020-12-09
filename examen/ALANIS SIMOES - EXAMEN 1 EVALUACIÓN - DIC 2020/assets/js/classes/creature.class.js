class Creature{
    constructor(type, race){
        this.type = type;
        this.race = race;
    }

    mostrarCreature(){
        return '{"type":"' + this.type + '", "race":"' + this.race + '"}';
    }
}