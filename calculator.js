function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

document.getElementById('add').addEventListener('click', function() {
    const [number1, number2] = getNumbers();
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    const [number1, number2] = getNumbers();
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function() {
    const [number1, number2] = getNumbers();
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function() {
    const [number1, number2] = getNumbers();
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});