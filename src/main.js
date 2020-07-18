let calSec = document.querySelector("#cal-sec");

let numMemory = 0;

window.addEventListener("keydown", filterKeys);
calSec.addEventListener("click", filterClick);

function filterClick(event) {  

    const inputNum = document.querySelector("#number-input");
    const opSymbol = document.querySelector("#op-symbol");    
    const btnText = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
    const btnNames = ["add", "subtract", "multiply", "divide"];

    if (btnText.includes(event.target.innerText)) displayNumbers(event, inputNum);

    if (event.target.name === "Enter" && opSymbol != "") calculateValues(inputNum, opSymbol);

    if (event.target.name === "Clear") clearDisplay(inputNum, opSymbol);    
    
    if (btnNames.includes(event.target.name)) contCalculation(event, inputNum, opSymbol);           
}    

function filterKeys(event) {

    const inputNum = document.querySelector("#number-input");
    const opSymbol = document.querySelector("#op-symbol");
    const numKeys = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
    const keys = ["+", "-", "*", "x", "/"]; 

    if (numKeys.includes(event.key)) displayNumbers(event, inputNum);

    if (event.key === "Enter" && opSymbol != "") calculateValues(inputNum, opSymbol);    

    if (event.key === "Clear") clearDisplay(inputNum, opSymbol); 

    if (keys.includes(event.key)) contCalculation(event, inputNum, opSymbol);
}   

function contCalculation(event, elementNum, elementOP) {
    elementOP.innerText === "" ? (   
        displayOperator(event, elementOP),
        saveDisplayedValue(elementNum)
    ) : (
        calculateValues(elementNum, elementOP),
        clearDisplay(elementNum, elementOP),
        displayOperator(event, elementOP)
    );
}

function clearDisplay(elementNum, elementOP) {
    elementNum.value || elementOP.innerText ? (
        elementNum.value = "",
        elementOP.innerText = ""
    ) :  numMemory = 0;
}

function saveDisplayedValue(elementNum) {
    numMemory = Number(elementNum.value);
    elementNum.value = "";
}

function calculateValues(elementNum, elementOP) {
    let numInput = Number(elementNum.value);
    numMemory = operate(elementOP.name, numMemory, numInput);
    elementNum.value = numMemory;
    elementOP.innerText = "";        
}

function displayOperator(event, element) {
    event.type === "click" ? (
        element.innerText = event.target.id,
        element.name = event.target.name
    ) : (
        element.innerText = event.key,
        findName(event, element)
    );
}

function displayNumbers(event, element) {
    element.value += event.type === "click" ? event.target.innerText : event.key;
}

function findName(event, element) {
    let ekey = event.key;
    if (ekey === "+") element.name = "add";  
    if (ekey === "-") element.name = "subtract";
    if (ekey === "x") element.name = "multiply";
    if (ekey === "*") element.name = "multiply";
    if (ekey === "/") element.name = "divide";   
}

function operate(operation, total, number) {
    if (operation === "add") return add(total, number);
    if (operation === "subtract") return subtract(total, number);
    if (operation === "multiply") return  multiply(total, number);
    if (operation === "divide") return divide(total, number);
}

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



