const display = document.querySelector("#display");
const clear = document.querySelector("#clearDisplay");

// Initialize variables to store operands and operator 
let operand1 = "";
let operator = "";

// Function to append input to the display
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
    operand1 = ""; // Reset operand1 when clearing the display
    operator = "" // Reset operator when clearing the display
}

// Function to remove the last character from the display
function pop() {
    display.value = display.value.slice(0, -1);
}

// Function to handle operator assignment
function assignmentOperator(Op) {
    operand1 = display.value;
    operator = Op;
    console.log(operand1 + operator);
    display.value = ""
}

// Function to calculate the result
function calculate() {
    try {
        operand2 = display.value;
        if(operand2.endsWith('%')) {
            // Convert percentage to decimal  and calculating the result using eval()
            operand2 = parseFloat(operand2.replace('%', '')) / 100;
            display.value = eval(operand1 + operator + operand2);
        } else {
            display.value = eval(operand1 + operator + operand2)

        }        
    } catch (error) {
        console.error("Error occured:", error.message);
        display.value = "Error"
    }
}