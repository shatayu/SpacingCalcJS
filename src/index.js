let spacers = require("./spacers");
let calc = require("./calc");

// manage checking and unchecking all
function checkAll() {
    let checkboxes = document.getElementsByClassName("spacerOption");

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
}

function uncheckAll() {
    let checkboxes = document.getElementsByClassName("spacerOption");

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}

checkAll();

document.getElementById("checkall").addEventListener("click", checkAll);

document.getElementById("uncheckall").addEventListener("click", uncheckAll);

// handle input submission
document.getElementById("submit").addEventListener("click", () => {
    document.getElementById("response").innerHTML = "";
    let input = document.getElementById("text").value;
    let availableSpacers = spacers.getSpacers(); 
    let result = calc.calcSpacers(Math.round(1000 * parseFloat(input)), availableSpacers);

    for (let i = 0; i < result.length; i++) {
        if (result[i].quantity > 0) {
            document.getElementById("response").appendChild(spacers.displaySpacer(result[i]));
        }
    }
})
