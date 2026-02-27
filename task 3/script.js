let screen = document.querySelector(".screen p");
let buttons = document.querySelectorAll(".but");
let extraButtons = document.querySelectorAll(".but1");

buttons.forEach(btn => {
    btn.onclick = () => {
        let val = btn.innerText;

        if (val === "=") {
            try {
                let result = eval(screen.innerText);
                screen.innerText = Number(result.toFixed(2));
            } catch {
                screen.innerText = "Error";
            }
        } else {
            if (screen.innerText === "0") {
                screen.innerText = val;
            } else {
                screen.innerText += val;
            }
        }
    };
});

extraButtons.forEach(btn => {
    btn.onclick = () => {
        if (btn.innerText === "CLEAR") {
            screen.innerText = "0";
        } else if (btn.innerText === "DELETE") {
            screen.innerText =
                screen.innerText.length > 1
                    ? screen.innerText.slice(0, -1)
                    : "0";
        }
    };
});
