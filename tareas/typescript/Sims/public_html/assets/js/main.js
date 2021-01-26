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
        return this.name + " is " + this.status;
    };
    //establece el estado del sim
    Sim.prototype.setStatus = function (room) {
        var item = room.items[Math.floor(Math.random() * room.items.length)];
        //hora en formato 24 hh:mm
        var datetime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric" });
        this.status = item.action + " " + item.name + " at the " + room.name + " since " + datetime + ".";
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
    var wardrobe = { name: "the wardrobe", action: "folding clothes" };
    var desk = { name: "the desk", action: " doing homework in" };
    var diary = { name: "the diary", action: "writing on" };
    var bedroom = { name: "bedroom", items: new Array(bed, wardrobe, desk, diary) };
    //salón
    var windows = { name: "the window", action: "looking through" };
    var book = { name: "a book", action: "reading" };
    var tv = { name: " TV ", action: " watching " };
    var couch = { name: " the couch", action: "laying on" };
    var livingRoom = { name: "living room", items: new Array(windows, book, tv, couch, desk) };
    //cocina
    var diningTable = { name: "the dining table", action: "eating mac'n'cheese at" };
    var fridge = { name: "the fridge", action: "looking for food at" };
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
function showSims() {
    var simsContainer = document.getElementById("sims-container");
    sims.forEach(function (sim) {
        simsContainer.innerHTML += "<option value='" + sim.getId() + "'>" + sim.getName() + "</option>";
    });
}
function showRooms() {
    var roomsContainer = document.getElementById("rooms-container");
    rooms.forEach(function (room) {
        roomsContainer.innerHTML += "<div class='row' id= '" + room.name + "'><button class='btn btn-primary btn-large'>" + room.name + "</button></div>";
        //setRoomEvent(room);
    });
}
function setRoomEvent() {
    rooms.forEach(function (room) {
        var btn = document.getElementById(room.name);
        btn.addEventListener("click", function () {
            //cada vez que se pulse un btn de habitación, cojo al sim seleccionado del array,
            //seteo el estado del sim y lo empujo al div de status-list
            var selectElem = document.getElementById("sims-container");
            var idSelectedSim = selectElem.options[selectElem.selectedIndex].value;
            var selectedSim;
            sims.forEach(function (sim) {
                if (idSelectedSim == sim.getId()) {
                    selectedSim = sim;
                    selectedSim.setStatus(room);
                }
            });
            var statusList = document.getElementById("status-list");
            statusList.innerHTML += "<p>" + selectedSim.getStatus() + "</p>";
        });
    });
}
function init() {
    createRoomsWithItems();
    createSims();
    showSims();
    showRooms();
    setRoomEvent();
}
window.addEventListener("load", init);
