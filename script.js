let result = "";
let op1 = 0;
let func = "";

document.body.addEventListener("click", clickHandler);

function clickHandler(event) {
    if (event.target.type != "button") return;

    let button = event.target.value;
    let resultField = document.querySelector(".result");

    if (button == "C") {
        result = "";
        op1 = 0;
        func = "";
    }

    if ("0123456789".includes(button)) result += button;

    if (button == "." && !result.includes(".")) result += ".";

    if ("+-*/".includes(button)) {
        func = button;
        op1 = +result;
        result = "";
    }

    if (button == "=") {
        if (func == "+") result = op1 + (+result);
        if (func == "-") result = op1 - (+result);
        if (func == "*") result = op1 * (+result);
        if (func == "/") result = op1 / (+result);
        func = "";
        op1 = 0;
    }

    resultField.value = result;
};