function add(total, number) {
    return total += number;  
}

function subtract(total, number) {
    return total -= number;  
}

function multiply(total, number) {
    return total *= number;
}

function divide(total, number) {
    return total /= number;
}

function operate(operation, total, number) {
    if (operation === "add") { 
        return add(total, number);
    };
    if (operation === "subtract") { 
        return subtract(total, number);
    };
    if (operation === "multiply") { 
        return  multiply(total, number);
    };
    if (operation === "divide") { 
        return divide(total, number);
    };
   
}

