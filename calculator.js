function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : "Error"; }

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = operation(num1, num2);
    document.getElementById('calculation-result').textContent = result;
}

document.getElementById('add').addEventListener('click', () => calculate(add));
document.getElementById('subtract').addEventListener('click', () => calculate(subtract));
document.getElementById('multiply').addEventListener('click', () => calculate(multiply));
document.getElementById('divide').addEventListener('click', () => calculate(divide));