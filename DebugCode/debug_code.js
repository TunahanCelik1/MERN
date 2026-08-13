	
	function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Get the selected operation
    let operation = document.getElementById('operation').value;

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        let result;

        // Control the flow based on which operation is selected
        if (operation === 'add') {
            result = add(num1, num2);
        } else if (operation === 'multiply') {
            result = multiply(num1, num2);
        } else if (operation === 'divide') {
            result = divide(num1, num2);
        }

        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function add(a, b) {
    let testValue = "5"; // deliberately assigned as a character/string
    // Introduce a debugger statement to pause execution
    debugger;

    // Add the numbers
    return a + b;
}

function multiply(a, b) {
    let testValue = "5"; // deliberately assigned as a character/string
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function divide(a, b) {
    let testValue = "5"; // deliberately assigned as a character/string
    // Introduce a debugger statement to pause execution
    debugger;

    // Divide the numbers
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
		
