"use strict";
//arrays de las habitaciones y sims
var rooms = new Array();
var sims = new Array();
var Sim = /** @class */ (function () {
    function Sim(id, name) {
        this.name = name;
        this.id = id;
    }
    //devuelve el estado actual del sim
    Sim.prototype.getStatus = function () {
        return this.status;
    };
    //establece el estado del sim por string (para selección múltiple de sims)
    Sim.prototype.setStatus = function (status) {
        this.status = status;
    };
    //establece un estado aleatorio del sim
    Sim.prototype.setRandomStatus = function (room) {
        var item = room.items[Math.floor(Math.random() * room.items.length)];
        //hora en formato 24 hh:mm
        var datetime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric" });
        this.status = item.action + " " + item.name + " in the " + room.name + " since " + datetime + "h.";
    };
    Sim.prototype.getName = function () {
        return this.name;
    };
    Sim.prototype.getId = function () {
        return this.id;
    };
    return Sim;
}());
//se crean los objetos y las habitaciones. Se guardan en el array 'rooms'
function createRoomsWithItems() {
    //bedroom
    var bed = { name: "the bed", action: "sleeping in" };
    var wardrobe = { name: "the dressing room", action: "changing clothes in" };
    var desk = { name: "the desk", action: " doing homework in" };
    var diary = { name: "the diary", action: "writing on" };
    var bedroom = { name: "bedroom", items: new Array(bed, wardrobe, desk, diary) };
    //salón
    var windows = { name: "the window", action: "looking through" };
    var book = { name: "a book", action: "reading" };
    var tv = { name: " TV ", action: "watching" };
    var couch = { name: " the couch", action: "laying on" };
    var livingRoom = { name: "living room", items: new Array(windows, book, tv, couch, desk) };
    //cocina
    var diningTable = { name: "the dining table", action: "eating mac'n'cheese at" };
    var fridge = { name: "the fridge", action: "looking for food in" };
    var trashCan = { name: "the trash can", action: "throwing something in" };
    var dishwasher = { name: "the dishwasher", action: "putting the dishes on" };
    var kitchen = { name: "kitchen", items: new Array(diningTable, fridge, trashCan, dishwasher) };
    //baño
    var mirror = { name: "the mirror", action: "cleaning" };
    var bathtub = { name: "the bathtub", action: "taking a bath in" };
    var towel = { name: "a towel", action: "folding" };
    var makeUp = { name: "make up", action: "putting on" };
    var bathRoom = { name: "bath room", items: new Array(mirror, bathtub, towel, makeUp) };
    rooms.push(bedroom);
    rooms.push(livingRoom);
    rooms.push(kitchen);
    rooms.push(bathRoom);
}
//se crean los sims y se guardan en el array 'sims'
function createSims() {
    var carlos = new Sim("1", "Carlos");
    var oscar = new Sim("2", "Oscar");
    var samuel = new Sim("3", "Samuel");
    var aythami = new Sim("4", "Aythami");
    var alejo = new Sim("5", "Alejo");
    var javier = new Sim("6", "Javier");
    var juan = new Sim("7", "Juan");
    var adrian = new Sim("8", "Adrián");
    var alanis = new Sim("9", "Alanis");
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
function showSims() {
    var simsContainer = document.getElementById("sims-container");
    simsContainer.setAttribute("size", sims.length.toString()); //para  mostrar bien todos los sims
    sims.forEach(function (sim) {
        simsContainer.innerHTML += "<option value='" + sim.getId() + "'>" + sim.getName() + "</option>";
    });
}
//mostrar las habitaciones en la página
function showRooms() {
    var roomsContainer = document.getElementById("rooms-container");
    rooms.forEach(function (room) {
        roomsContainer.innerHTML += "<button class='btn btn-primary btn-lg btn-block' id= '" + room.name + "'>" + room.name + "</button>";
    });
}
//método para establecer el estado del primer sim seleccionado (necesario para la selección múltiple de sims)
function setSimStatus(selectedOptions, room) {
    if (selectedOptions[0] == undefined)
        alert("First you have to choose a sim!");
    var idSelectedSim = selectedOptions[0].value;
    var selectedSim;
    sims.forEach(function (sim) {
        if (idSelectedSim == sim.getId()) {
            selectedSim = sim;
            selectedSim.setRandomStatus(room);
        }
    });
    return selectedSim;
}
//agregar evento a los botones de las habitaciones
function setRoomEvent() {
    rooms.forEach(function (room) {
        var btn = document.getElementById(room.name);
        btn.addEventListener("click", function () {
            //cada vez que se pulse un btn de habitación, cojo al sim(s) seleccionado(s) del array,
            //seteo el estado del sim y lo empujo al div de status-list
            var selectElem = document.getElementById("sims-container");
            var selectedOptions = selectElem.selectedOptions;
            if (selectedOptions.length > 1) { // selección múltiple de sims
                //seteo el estado del primer sim seleccionado, para luego copiar 
                //ese estado a los demás sims seleccionados
                var firstSelectedSim_1 = setSimStatus(selectedOptions, room);
                var otherSelectedSim_1;
                var selectedSims_1 = "";
                var _loop_1 = function (i) {
                    sims.forEach(function (sim) {
                        if (selectedOptions[i].value == sim.getId()) {
                            otherSelectedSim_1 = sim;
                            otherSelectedSim_1.setStatus(firstSelectedSim_1.getStatus());
                            selectedSims_1 += otherSelectedSim_1.getName() + " and ";
                        }
                    });
                };
                for (var i = 1; i < selectedOptions.length; i++) {
                    _loop_1(i);
                }
                var statusList = document.getElementById("status-list");
                statusList.innerHTML += "<h5 class='text-secondary'>" + selectedSims_1 + firstSelectedSim_1.getName() + " are " + firstSelectedSim_1.getStatus() + "</h5> <hr>";
            }
            else { //un sim seleccionado
                var selectedSim = setSimStatus(selectedOptions, room);
                var statusList = document.getElementById("status-list");
                statusList.innerHTML += "<h5 class='text-secondary'>" + selectedSim.getName() + " is " + selectedSim.getStatus() + "</h5> <hr>";
            }
        });
    });
}
//para limpiar el div de los estados
function setClearEvent() {
    var clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", function () {
        var statusList = document.getElementById("status-list");
        statusList.innerHTML = "";
    });
}
function init() {
    createRoomsWithItems();
    createSims();
    showSims();
    showRooms();
    setRoomEvent();
    setClearEvent();
}
window.addEventListener("load", init);
