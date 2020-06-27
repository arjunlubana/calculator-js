var operand1;
var operand2 = "";
var expression = "";
var operatorFlag = false;
var operator;
var result;
var stringOperations = 0;

//Clear the calculation field
function clearField() {
    operand1 = 0;
    operand2 = "";
    expression = "";
    operatorFlag = false;
    stringOperations = 0;
    document.getElementById("first-operand").innerHTML = 0;
    document.getElementById("second-operand").innerHTML = "";
}

//Delete a value
function del() {
    operand1 = String(operand1);
    operand1 = Number(operand1.replace(expression[expression.length - 1], ''));

    operand2 = operand2.replace(expression[expression.length - 1], '');

    expression = expression.replace(expression[expression.length - 1], '');
    expression == '' ? document.getElementById("first-operand").innerHTML = "0" : document.getElementById("first-operand").innerHTML = expression;

}


//Takes input of a Number or operator;
function input(value) {
    if (value == "."){
        expression.includes(".")? _ : expression += value;
    }else{
        expression += value;
    }
    document.getElementById("first-operand").innerHTML = expression;
    operatorLogic(value);
}

function operatorLogic(value) {
    if (value == "+" || value == "-" || value == "÷" || value == "x") {
        operatorFlag = true;
        operator = value;
        stringOperations++;
        if (stringOperations > 1) {
            expression = String(result + value);
            document.getElementById("first-operand").innerHTML = expression;
            operand1 = result;
            operand2 = "";
            stringOperations = 1;
        }
    }
    else if (operatorFlag) {
        operand2 += value;
        operation(operator);
    }
    else {
        operand1 = Number(expression);
    }
}


function operation(operator) {
    if (operator == "+") {
        result = operand1 + Number(operand2);
        syntax(result);

    } else if (operator == "-") {
        result = operand1 - Number(operand2);
        syntax(result);

    } else if (operator == "÷") {
        result = operand1 / Number(operand2);
        syntax(result);

    } else if (operator == "x") {
        result = operand1 * Number(operand2);
        syntax(result);
    }

}

function syntax(result) {
    if (result == 0) {
        document.getElementById("second-operand").innerHTML = result;
    } else {
        document.getElementById("second-operand").innerHTML = result ? result : "Syntax Error";
    }
}

function answer() {
        expression = result;
        operand1 = result;
        operand2 = "";
        document.getElementById("second-operand").innerHTML = "";
        document.getElementById("first-operand").innerHTML = result;
}
