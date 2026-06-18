console.log("Running t16_arrays_continued.js");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

// variables
let username = "";
let age = 0;
let dollars = 0;
let year = 2026;

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

// start function
function start() {

    dollars = Number(document.getElementById("moneyInput").value);

    age = Number(document.getElementById("ageInput").value);

    username =
        document.getElementById("usernameInput").value;

}

    // calculate AFTER getting age
    let oldAge = age + 10;
    let birthYear = year - age;

    if (dollars < 4) {
        console.log("You're broke");
    } else {
        console.log("Rich boy");
    }

    // display pay
OUTPUT.innerHTML += "<h3>This week's pay:</h3>";

OUTPUT.innerHTML +=
    "Monday: $" + mondayPay + "<br>";

OUTPUT.innerHTML +=
    "Tuesday: $" + tuesdayPay + "<br>";


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
