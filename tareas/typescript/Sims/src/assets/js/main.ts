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
        return this.status;
    }

    //establece el estado del sim por string (para selección múltiple de sims)
    setStatus(status: string) {
        this.status = status;
    }

    //establece un estado aleatorio del sim
    setRandomStatus(room: Room) {
        let item = room.items[Math.floor(Math.random() * room.items.length)];
        //hora en formato 24 hh:mm
        let datetime: string = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric" });
        this.status = item.action + " " + item.name + " in the " + room.name + " since " + datetime + "h.";
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
    let wardrobe: Item = { name: "the dressing room", action: "changing clothes in" };
    let desk: Item = { name: "the desk", action: " doing homework in" };
    let diary: Item = { name: "the diary", action: "writing on" };

    let bedroom: Room = { name: "bedroom", items: new Array(bed, wardrobe, desk, diary) };

    //salón
    let windows: Item = { name: "the window", action: "looking through" };
    let book: Item = { name: "a book", action: "reading" };
    let tv: Item = { name: " TV ", action: "watching" };
    let couch: Item = { name: " the couch", action: "laying on" };

    let livingRoom: Room = { name: "living room", items: new Array(windows, book, tv, couch, desk) };

    //cocina
    let diningTable: Item = { name: "the dining table", action: "eating mac'n'cheese at" };
    let fridge: Item = { name: "the fridge", action: "looking for food in" };
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

//mostrar los sims en la página
function showSims(): void {
    let simsContainer: HTMLElement = document.getElementById("sims-container");
    simsContainer.setAttribute("size", sims.length.toString()); //para  mostrar bien todos los sims

    sims.forEach(sim => {
        simsContainer.innerHTML += "<option value='" + sim.getId() + "'>" + sim.getName() + "</option>";
    });
}

//mostrar las habitaciones en la página
function showRooms(): void {
    let roomsContainer: HTMLElement = document.getElementById("rooms-container");

    rooms.forEach(room => {
        roomsContainer.innerHTML += "<button class='btn btn-primary btn-lg btn-block' id= '" + room.name + "'>" + room.name + "</button>";
    });
}

//método para establecer el estado del primer sim seleccionado (necesario para la selección múltiple de sims)
function setSimStatus(selectedOptions: HTMLCollectionOf<HTMLOptionElement>, room: Room): Sim {
    if(selectedOptions[0] == undefined) alert("First you have to choose a sim!");
    
    let idSelectedSim: string = selectedOptions[0].value;

    let selectedSim: Sim;
    sims.forEach(sim => {
        if (idSelectedSim == sim.getId()) {
            selectedSim = sim;
            selectedSim.setRandomStatus(room);
        }
    });
    return selectedSim;
}

//agregar evento a los botones de las habitaciones
function setRoomEvent(): void {
    rooms.forEach(room => {
        let btn: HTMLElement = document.getElementById(room.name);
        btn.addEventListener("click", () => {
            //cada vez que se pulse un btn de habitación, cojo al sim(s) seleccionado(s) del array,
            //seteo el estado del sim y lo empujo al div de status-list
            let selectElem: HTMLSelectElement = document.getElementById("sims-container") as (HTMLSelectElement);
            let selectedOptions: HTMLCollectionOf<HTMLOptionElement> = selectElem.selectedOptions;

            if (selectedOptions.length > 1) { // selección múltiple de sims
                //seteo el estado del primer sim seleccionado, para luego copiar 
                //ese estado a los demás sims seleccionados
                let firstSelectedSim: Sim = setSimStatus(selectedOptions, room);

                let otherSelectedSim: Sim;
                let selectedSims: string = "";
                for (let i: number = 1; i < selectedOptions.length; i++) {
                    sims.forEach(sim => {
                        if (selectedOptions[i].value == sim.getId()) {
                            otherSelectedSim = sim;
                            otherSelectedSim.setStatus(firstSelectedSim.getStatus());
                            selectedSims += otherSelectedSim.getName() + " and ";
                        }
                    });
                }

                let statusList: HTMLElement = document.getElementById("status-list");
                statusList.innerHTML += "<h5 class='text-secondary'>" + selectedSims + firstSelectedSim.getName() + " are " + firstSelectedSim.getStatus() + "</h5> <hr>";
            } else {  //un sim seleccionado
                let selectedSim: Sim = setSimStatus(selectedOptions, room);

                let statusList: HTMLElement = document.getElementById("status-list");
                statusList.innerHTML += "<h5 class='text-secondary'>" + selectedSim.getName() + " is " + selectedSim.getStatus() + "</h5> <hr>";
            }

        });

    });

}

//para limpiar el div de los estados
function setClearEvent() :void {
    let clearBtn : HTMLElement = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", ()=>{
        let statusList : HTMLElement = document.getElementById("status-list");
        statusList.innerHTML= "";
    });
}

function init(): void {
    createRoomsWithItems();
    createSims();
    showSims();
    showRooms();
    setRoomEvent();
    setClearEvent();
}

window.addEventListener("load", init);
