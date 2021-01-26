//arrays de las habitaciones y sims
let rooms: Array<Room> = new Array();
let sims: Array<Sim> = new Array();

//objetos de las habitaciones
interface Item {
    name: string;
    action: string;
}

interface Room {
    name: string;
    items: Array<Item>;
}

class Sim {
    id: string;
    name: string;
    status: string;

    constructor(id: string, name: string) {
        this.name = name;
        this.id = id;
    }

    //devuelve el estado actual del sim
    getStatus(): string {
        return this.name + " is " + this.status;
    }

    //establece el estado del sim
    setStatus(room: Room) {
        let item = room.items[Math.floor(Math.random() * room.items.length)];
        //hora en formato 24 hh:mm
        let datetime: string = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric" });
        this.status = item.action + " " + item.name + " at the " + room.name + " since " + datetime + ".";
    }

    getName(): string {
        return this.name;
    }

    getId(): string {
        return this.id;
    }
}

//se crean los objetos y las habitaciones. Se guardan en el array 'rooms'
function createRoomsWithItems(): void {
    //bedroom
    let bed: Item = { name: "the bed", action: "sleeping in" };
    let wardrobe: Item = { name: "the wardrobe", action: "folding clothes" };
    let desk: Item = { name: "the desk", action: " doing homework in" };
    let diary: Item = { name: "the diary", action: "writing on" };

    let bedroom: Room = { name: "bedroom", items: new Array(bed, wardrobe, desk, diary) };

    //salón
    let windows: Item = { name: "the window", action: "looking through" };
    let book: Item = { name: "a book", action: "reading" };
    let tv: Item = { name: " TV ", action: " watching " };
    let couch: Item = { name: " the couch", action: "laying on" };

    let livingRoom: Room = { name: "living room", items: new Array(windows, book, tv, couch, desk) };

    //cocina
    let diningTable: Item = { name: "the dining table", action: "eating mac'n'cheese at" };
    let fridge: Item = { name: "the fridge", action: "looking for food at" };
    let trashCan: Item = { name: "the trash can", action: "throwing something in" };
    let dishwasher: Item = { name: "the dishwasher", action: "putting the dishes on" };

    let kitchen: Room = { name: "kitchen", items: new Array(diningTable, fridge, trashCan, dishwasher) };

    //baño
    let mirror: Item = { name: "the mirror", action: "cleaning" };
    let bathtub: Item = { name: "the bathtub", action: "taking a bath in" };
    let towel: Item = { name: "a towel", action: "folding" };
    let makeUp: Item = { name: "make up", action: "putting on" };

    let bathRoom: Room = { name: "bath room", items: new Array(mirror, bathtub, towel, makeUp) };

    rooms.push(bedroom);
    rooms.push(livingRoom);
    rooms.push(kitchen);
    rooms.push(bathRoom);
}

//se crean los sims y se guardan en el array 'sims'
function createSims(): void {
    let carlos: Sim = new Sim("1", "Carlos");
    let oscar: Sim = new Sim("2", "Oscar");
    let samuel: Sim = new Sim("3", "Samuel");
    let aythami: Sim = new Sim("4", "Aythami");
    let alejo: Sim = new Sim("5", "Alejo");
    let javier: Sim = new Sim("6", "Javier");
    let juan: Sim = new Sim("7", "Juan");
    let adrian: Sim = new Sim("8", "Adrián");
    let alanis: Sim = new Sim("9", "Alanis");

    sims.push(carlos);
    sims.push(oscar);
    sims.push(samuel);
    sims.push(aythami);
    sims.push(alejo);
    sims.push(javier);
    sims.push(juan);
    sims.push(adrian);
    sims.push(alanis);
}

function showSims(): void {
    let simsContainer: HTMLElement = document.getElementById("sims-container");

    sims.forEach(sim => {
        simsContainer.innerHTML += "<option value='" + sim.getId() + "'>" + sim.getName() + "</option>";
    });

}

function showRooms(): void {
    let roomsContainer: HTMLElement = document.getElementById("rooms-container");

    rooms.forEach(room => {
        roomsContainer.innerHTML += "<div class='row' id= '" + room.name + "'><button class='btn btn-primary btn-large'>" + room.name + "</button></div>";
        //setRoomEvent(room);
    });

}

function setRoomEvent(): void {

    rooms.forEach(room => {
        let btn: HTMLElement = document.getElementById(room.name);
        btn.addEventListener("click", () => {
            //cada vez que se pulse un btn de habitación, cojo al sim seleccionado del array,
            //seteo el estado del sim y lo empujo al div de status-list
            let selectElem: HTMLSelectElement = document.getElementById("sims-container") as (HTMLSelectElement);
            let idSelectedSim: string = selectElem.options[selectElem.selectedIndex].value;

            let selectedSim: Sim;
            sims.forEach(sim => {
                if (idSelectedSim == sim.getId()) {
                    selectedSim = sim;
                    selectedSim.setStatus(room);
                }
            });

            let statusList: HTMLElement = document.getElementById("status-list");
            statusList.innerHTML += "<p>" + selectedSim.getStatus() + "</p>";

        });

    });

}

function init(): void {
    createRoomsWithItems();
    createSims();
    showSims();
    showRooms();
    setRoomEvent();
}

window.addEventListener("load", init);
