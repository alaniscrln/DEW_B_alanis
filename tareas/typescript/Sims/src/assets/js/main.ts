interface Item {
    name: string;
    action: string;
}

interface Room {
    name: string;
    items: Array<Item>;
}

class Status {
    status: string;

    constructor(room: Room) {
        // selecciona una actividad aleatoria de la habitación y guarda su acción en el estado
        let item = room.items[Math.floor(Math.random() * room.items.length)];

        //hora en formato hh:mm
        let datetime: string = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric" });

        this.status = item.action + " " + item.name + " since " + datetime + ".";
    }
}

class Sim {
    name: string;
    status: Status;

    constructor(name: string) {
        this.name = name;
    }

    //devuelve el estado actual del sim
    getStatus(): string {
        return this.name + " is " + this.status;
    }

    //establece el estado del sim
    setStatus(room: Room) {
        this.status = new Status(room);
    }

}

let rooms: Array<Room> = new Array();

//se crean las habitaciones y los items y se guardan en el array 'rooms'
function createRoomsWithItems(): void {

    //bedroom
    let bed: Item = { name: "the bed", action: "sleeping in" };
    let wardrobe: Item = { name: "the wardrobe", action: "folding clothes" };
    let desk: Item = { name: "the desk", action: " doing homework in" };
    let diary: Item = { name: "the diary", action: "writing on" };

    let bedroom: Room = { name: "the bedroom", items: new Array(bed, wardrobe, desk, diary) };

    //salón
    let windows: Item = { name: "the windows", action: "looking through" };
    let book: Item = { name: "a book", action: "reading" };
    let tv: Item = { name: " TV ", action: " watching " };
    let couch: Item = { name: " the couch", action: "laying on" };

    let livingRoom: Room = { name: "the living room", items: new Array(windows, book, tv, couch, desk) };

    //cocina
    let diningTable: Item = { name: "the dining table", action: "eating at" };
    let fridge: Item = { name: "the fridge", action: "looking for food at" };
    let trashCan: Item = { name: "the trash can", action: "throwing something in" };
    let dishwasher: Item = { name: "the dishwasher", action: "putting dirty plates on" };

    let kitchen: Room = { name: "the kitchen", items: new Array(diningTable, fridge, trashCan, dishwasher) };

    //baño
    let mirror: Item = { name: "the mirror", action: "cleaning" };
    let bathtub: Item = { name: "the bathtub", action: "taking a bath at" };
    let towel: Item = { name: "a towel", action: "folding" };
    let makeUp: Item = { name: "make up", action: "putting on" };

    let bathRoom: Room = { name: "the bath room", items: new Array(mirror, bathtub, towel, makeUp) };

    rooms.push(bedroom);
    rooms.push(livingRoom);
    rooms.push(kitchen);
    rooms.push(bathRoom);

}

let sims: Array<Sim> = new Array();

//se crean los sims y se guardan en el array 'sims'
function createSims(): void {
    let carlos: Sim = new Sim("Carlos");
    let gonzalo: Sim = new Sim("Gonzalo");
    let luisa: Sim = new Sim("Luisa");
    let fernando: Sim = new Sim("Fernando");
    let amancio: Sim = new Sim("Amancio");
    let carolina: Sim = new Sim("Carolina");

    sims.push(carlos);
    sims.push(gonzalo);
    sims.push(luisa);
    sims.push(fernando);
    sims.push(amancio);
    sims.push(carolina);
}










function init(): void {
    createRoomsWithItems();
    createSims();

}



window.addEventListener("load", init);


//interfaces objetos y habitaciones. crea arrays de objetos y las habitaciones los tienen.
//document.getElmentById("statusList")!.innerHTML += 
//el profe tiene un metodo "processNewStatus()"

