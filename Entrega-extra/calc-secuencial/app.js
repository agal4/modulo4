//Initialize variables
var partialResult = 0;
var firstTime = true;

//Functions
var clearInput = () => (document.getElementById("num").value = "");
var printResult = (result) =>
  (document.getElementById("result").innerHTML = result);
var getOperationResult = (operation, num1, num2) => {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return sub(num1, num2);
    case "x":
      return mult(num1, num2);
    case "/":
      return div(num1, num2);
  }
};
var add = (num1, num2) => num1 + num2;
var sub = (num1, num2) => num1 - num2;
var mult = (num1, num2) => num1 * num2;
var div = (num1, num2) => num1 / num2;

//Event handler
var handleButtonClick = (event) => {
  var operation = event.target.value;
  var num = Number(document.getElementById("num").value);
  if (firstTime) {
    firstTime = false;
    partialResult = 0;
    if (operation != "=") {
      partialResult = getOperationResult(operation, partialResult, num);
      clearInput();
    }
  } else {
    if (operation != "=") {
      partialResult = getOperationResult(operation, partialResult, num);
      clearInput();
    } else {
      printResult(partialResult);
      partialResult = 0;
    }
  }
};

//Assign event listener to inputs
document.getElementById("add").addEventListener("click", handleButtonClick);
document.getElementById("sub").addEventListener("click", handleButtonClick);
document.getElementById("mult").addEventListener("click", handleButtonClick);
document.getElementById("div").addEventListener("click", handleButtonClick);
document.getElementById("equals").addEventListener("click", handleButtonClick);
