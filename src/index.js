let spacers = require("./spacers");
let calc = require("./calc");

// manage checking all
function checkAll() {
    let checkboxes = document.getElementsByClassName("spacerOption");

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
}

checkAll();

// manage getting the answer
function submit() {
    document.getElementById("response").innerHTML = "";
    let input = document.getElementById("text").value;
    let number = parseFloat(input.trim());
    let availableSpacers = spacers.getSpacers();
    let result;
    if (input.trim().length > 0 && !isNaN(number)) {
        result = calc.dynamic(Math.round(1000 * number), availableSpacers);

        if (result == undefined) {
            result = calc.failsafe(Math.round(1000 * number), availableSpacers);
        }

        if (result != undefined) {
            let coveredLength = 0;
            let response = document.getElementById("response");
            for (let i = 0; i < result.length; i++) {
                if (result[i].quantity > 0) {
                    response.appendChild(spacers.displaySpacer(result[i]));
                    coveredLength += result[i].length * result[i].quantity;
                }
            }

            let finalResult = document.createElement("span");
            finalResult.innerHTML = "<br />The total distance covered is <strong>" + coveredLength/1000.0 + "</strong> inches.<br />";
            response.appendChild(finalResult);
        }
    }
}

// handle event listeners for submission
document.getElementById("text").addEventListener("keyup", submit);

function getCheckedBoxes() {
    let checkedboxes = [];

    let checkboxes = document.getElementsByClassName("spacerOption");
    for (let j = 0; j < checkboxes.length; j++) {
        if (checkboxes[j].checked) {
            checkedboxes.push(checkboxes[j]);
        }
    }

    return checkboxes;
}

// checking if checkbox changed state and recalculating inputs if so
document.addEventListener("DOMContentLoaded", function() {
    let checkboxes = document.getElementsByTagName("label");
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].onclick = () => {
            let oldCheckedBoxes = getCheckedBoxes();
            let newCheckedBoxes = undefined;
            let interval = setInterval(function() {
                newCheckedBoxes = getCheckedBoxes;
                if (oldCheckedBoxes !== newCheckedBoxes) { // changed
                    submit();
                    clearInterval(interval);
                }
            }, 50);
        };
    }
})