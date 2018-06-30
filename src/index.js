let spacers = require("./spacers");
let calc = require("./calc");

// manage checking and unchecking all
function checkAll() {
    let checkboxes = document.getElementsByClassName("spacerOption");

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
}

// function uncheckAll() {
//     let checkboxes = document.getElementsByClassName("spacerOption");

//     for (let i = 0; i < checkboxes.length; i++) {
//         checkboxes[i].checked = false;
//     }
// }

checkAll();

// handle input submission
document.getElementById("text").addEventListener("keyup", () => {
    document.getElementById("response").innerHTML = "";
    let input = document.getElementById("text").value;
    let number = parseFloat(input.trim());
    let availableSpacers = spacers.getSpacers();

    let result;
    if (input.trim().length > 0 && number !== NaN) {
        result = calc.calcSpacers(Math.round(1000 * number), availableSpacers);

        for (let i = 0; i < result.length; i++) {
            if (result[i].quantity > 0) {
                document.getElementById("response").appendChild(spacers.displaySpacer(result[i]));
            }
        }
    }
})
