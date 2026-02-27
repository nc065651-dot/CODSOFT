function calculator(a, b, c) {
    if (c == "+") return a + b;
    else if (c == "-") return a - b;
    else if (c == "*") return a * b;
    else if (c == "/") return a / b;
    else if (c == "**") return a ** b;
    else return "Invalid";
}

function calculate() {
    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);
    let ch = document.getElementById("operator").value;

    if (isNaN(x) || isNaN(y)) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }

    let random = Math.random();

    if (random < 0.1) {
        switch (ch) {
            case "+": ch = "-"; break;
            case "-": ch = "/"; break;
            case "*": ch = "+"; break;
            case "/": ch = "**"; break;
        }
    }

    let ans = calculator(x, y, ch);
    document.getElementById("result").innerText = "Result: " + ans;
}
