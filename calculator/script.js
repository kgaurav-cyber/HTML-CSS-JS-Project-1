const display = document.getElementById("display");

// Add value
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Safe calculation (no eval)
function calculate() {
    try {
        const expression = display.value;
        const result = Function('"use strict"; return (' + expression + ')')();
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// ⌨️ Keyboard support
document.addEventListener("keydown", function (e) {
    const key = e.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});