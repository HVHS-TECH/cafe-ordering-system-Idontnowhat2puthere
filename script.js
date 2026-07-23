console.log("Running script.js");

const OUTPUT = document.getElementById("Mysterymail");

function showOutput() {
    OUTPUT.style.display = "block";
}

// variables
let username = "";
let age = 0;
let dollars = 0;
let year = 2026;

// arrays
let classArray = ["Pretty good", "Good", "Meh", "Bad", "Pretty crap"];
let shoppingList = [];

// input field
const CHOOSE_FIELD = document.getElementById("CHOOSE_FIELD");

/****************************
Shopping List Functions
****************************/

function addItem() {

    const form = document.getElementById("orderForm");

    let name =
        document.getElementById("nameInput").value;

    let item =
        document.getElementById("itemInput").value;

    let money =
        Number(document.getElementById("moneyInput").value);

    let price = 0;
    
    if (item ==="Small Size Package") {
        price = 15;
    }

    if (item ==="Medium Size Package") {
        price = 35;
    }

    if (item ==="Large Size Package") {
        price = 50;
    }

    if (item ==="Extra Large Size Package") {
        price = 100;
    }

    if (item ==="Retro Package") {
        price = 75;
    }

    if (item ==="Global Treasures Package") {
        price = 120;
    }

    if (money < price) {
        showOutput();
        OUTPUT.innerHTML =
        "<p>Not enough money </p>";
        return;
    }

let change = money - price;
    shoppingList.push({
        name: name,
        item: item,
        money: money,
        price: price,
        change: change
    });

    showOutput();

   OUTPUT.innerHTML = "";

OUTPUT.innerHTML =
    "<p>Order added successfully.</p>" +
    "<p>Name: " + name + "</p>" +
    "<p>Item: " + item + "</p>" +
    "<p>You paid: $" + money + "</p>" +
    "<p>Item cost: $" + price + "</p>";

if (change > 0) {
    OUTPUT.innerHTML += "<p>Change: $" + change.toFixed(2) + "</p>";
} else {
    OUTPUT.innerHTML += "<p>No change due</p>";
}

    document.getElementById("nameInput").value = "";
    document.getElementById("itemInput").value = "";
    document.getElementById("moneyInput").value = "";
}

