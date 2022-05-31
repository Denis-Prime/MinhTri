function calculator_if() {
    let operator = "";
    let number1 = 0;
    let number2 = 0;
    while (true) {
        operator = prompt("Enter your operator");
        if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
            alert("operator is illegal");
        }
        else{
            break;
        }
    }
    while (true) {
        number1 = parseFloat(prompt("Enter number one: "));
        if ( isNaN(number1)) {
            alert("Number is illegal");
        }
        else{
            break;
        }
    }
    while (true) {
        number2 = parseFloat(prompt("Enter number one: "));
        if ( isNaN(number2)) {
            alert("Number is illegal");
        }
        else{
            break;
        }
    }

    if (operator == "+") {
        let result = number1 + number2;
        document.write(number1, " + ", number2, " = ", result)
    }
    else if (operator == " - ") {
        let result = number1 - number2;
        document.write(number1, " - ", number2, " = ", result)
    }
    else if (operator == "*") {
        let result = number1 * number2;
        document.write(number1, " * ", number2, " = ", result)
    }
    else {
        if (number2 == 0) {
            document.write("number two can't is 0")
            return;
        }
        let result = number1 / number2;
        document.write(number1, " / ", number2, " = ", result)
    }
}
function calculator_swich() {
    let operator = "";
    let number1 = 0;
    let number2 = 0;
    while (true) {
        operator = prompt("Enter your operator");
        if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
            alert("operator is illegal");
        }
        else{
            break;
        }
    }
    while (true) {
        number1 = parseFloat(prompt("Enter number one: "));
        if ( isNaN(number1)) {
            alert("Number is illegal");
        }
        else{
            break;
        }
    }
    while (true) {
        number2 = parseFloat(prompt("Enter number one: "));
        if ( isNaN(number2)) {
            alert("Number is illegal");
        }
        else{
            break;
        }
    }
    switch (operator) {
        case "+":
            result = number1 + number2;
            document.write(number1, " + ", number2, " = ", result)
            break;
        case "-":
            result = number1 - number2;
            document.write(number1, " - ", number2, " = ", result)
            break;
        case "*":
            result = number1 * number2;
            document.write(number1, " * ", number2, " = ", result)
            break;
        case "/":
            if (number2 == 0) {
                document.write("number two can't is 0")
                return;
            }
            result = number1 / number2;
            document.write(number1, " / ", number2, " = ", result)
            break;
    }
}
function checkPrime(){
    const number1 = parseInt( prompt("Enter Number: "))
    let isPrime = true
    let number2 = 2;
    while(true){
        if(number1%number1 == 0){
            document.write(number1," is prime")
            break
        }
        if(number2 >= number1/2){
            ocument.write(number1," is Noneprime")
            break
        }
    }
}

