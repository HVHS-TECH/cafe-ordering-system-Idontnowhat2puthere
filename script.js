console.log("Running t16_arrays_continued.js");

const OUTPUT = document.getElementById("Mysterymail");

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

Welcome();

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

    let item =
        document.getElementById("shoppingInput").value;

    if (item === "") {

        OUTPUT.innerHTML +=
            "<p>Please enter an item.</p>";

        return;
    }

    shoppingList.push(item);

    OUTPUT.innerHTML +=
        "<p>You have added " +
        item +
        " to the list.</p>";

    document.getElementById("shoppingInput").value = "";
}

function showList() {

    OUTPUT.innerHTML +=
        "<h3>These are the items on your shopping list:</h3>";

    for (let i = 0; i < shoppingList.length; i++) {

        OUTPUT.innerHTML +=
            shoppingList[i] + "<br>";
    }
}
