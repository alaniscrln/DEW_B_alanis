class Pokemon extends Creature{
    constructor(type, name, race){
        super(type, race);
        this.name = name;
        this.level = this.randomLevel();
    }

    randomLevel() {
        let rand = Math.random() * 11;
        return Math.floor(rand);
   }

}