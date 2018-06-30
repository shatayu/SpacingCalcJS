let spacers = require("./spacers");
let calc = require("./calc");

document.getElementById("submit").addEventListener("click", () => {
    let input = document.getElementById("text").value;
    let availableSpacers = spacers.getSpacers(); 
    let result = calc.calcSpacers(Math.round(1000 * parseFloat(input)), availableSpacers);
})

document.getElementById("checkall").addEventListener("click", () => {
    let checkboxes = document.getElementsByClassName("spacerOption");

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
})

document.getElementById("uncheckall").addEventListener("click", () => {
    let checkboxes = document.getElementsByClassName("spacerOption");

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
})