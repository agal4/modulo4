var add = (num1, num2) => num1 + num2;
var sub = (num1, num2) => num1 - num2;
var mult = (num1, num2) => num1 * num2;
var div = (num1, num2) => num1 / num2;

var printResult = result => document.getElementById("result").innerHTML = result;
var getOperationResult = (operation, num1, num2) => {
    switch(operation){
        case "+": 
        return add(num1,num2);
        case "-": 
        return sub(num1,num2);
        case "x": 
        return mult(num1,num2);
        case "/": 
        return div(num1,num2);
    }
}
var handleButtonClick = (event) => {
    var result;
    var operation = event.target.value;
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if (num1===0 || num2===0) {
        printResult("Error");
    } else {
        printResult(getOperationResult(operation, num1, num2));
    }
}

document.getElementById("add").addEventListener("click", handleButtonClick);
document.getElementById("sub").addEventListener("click", handleButtonClick);
document.getElementById("mult").addEventListener("click", handleButtonClick);
document.getElementById("div").addEventListener("click", handleButtonClick);

