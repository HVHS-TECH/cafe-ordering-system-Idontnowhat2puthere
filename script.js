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
Functions
****************************/

// pay function
function calculatePay(_hours) {

    let pay = _hours * 18.80;
    pay = pay - (pay * 0.105);
    pay = pay - (pay * 0.04);
    pay = pay + 10;

    return pay.toFixed(2);
}

// pay calculations
let mondayPay = calculatePay(8);
let tuesdayPay = calculatePay(6);

// show first choice safely
if (CHOOSE_FIELD) {

    let choice = Number(CHOOSE_FIELD.value);

    OUTPUT.innerHTML +=
        "You chose: " + classArray[choice] + "<br>";
}

// function for changing choice
function showChoice() {

    if (CHOOSE_FIELD) {

        let choice = Number(CHOOSE_FIELD.value);

        OUTPUT.innerHTML +=
            "You chose: " + classArray[choice] + "<br>";
    }
}

// start function
function start() {

    dollars = Number(document.getElementById("moneyInput").value);

    age = Number(document.getElementById("ageInput").value);

    username =
        document.getElementById("usernameInput").value;

    // calculate AFTER getting age
    let oldAge = age + 10;
    let birthYear = year - age;

    if (dollars < 4) {
        console.log("You're broke");
    } else {
        console.log("Rich boy");
    }

    OUTPUT.innerHTML +=
        "<p>Hi " + username +
        " as of " + year +
        " you are " + age +
        " years old.</p>";

    OUTPUT.innerHTML +=
        "<p>You were born in " + birthYear + "</p>";

    OUTPUT.innerHTML +=
        "<p>In 10 years you'll be " + oldAge +
        " years old</p>";

    OUTPUT.innerHTML +=
        "<p>You have $" + dollars + "</p>";

    OUTPUT.innerHTML +=
        "<p>The current year is " + year + "</p>";
}

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

    alert(item);
    
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
        "<p>You entered $" + money +
        ". This package costs $" + price +
        ". Please enter enough money to continue.</p>";
        return;
    }

    shoppingList.push({
        name: name,
        item: item,
        money: money
    });

    showOutput();

    OUTPUT.innerHTML =
        "<p>Order added successfully.</p>";

    document.getElementById("nameInput").value = "";
    document.getElementById("itemInput").value = "";
    document.getElementById("moneyInput").value = "";
}

function showList() {

    showOutput();

    OUTPUT.innerHTML = "";

    OUTPUT.innerHTML +=
        "<h3>Customer Orders</h3>";

    OUTPUT.innerHTML +=
        "<p>Number of orders: " +
        shoppingList.length +
        "</p>";

    for (let i = 0; i < shoppingList.length; i++) {

        OUTPUT.innerHTML +=
            "<p>" +
            shoppingList[i].name +
            " ordered " +
            shoppingList[i].item +
            " for $" +
            shoppingList[i].money +
            "</p>";
    }
}