const display = document.querySelector(".display");
const digits = document.querySelector(".digits");
const operators = document.querySelector(".operators");

let firstOperand = null;
let secondOperand = null;
let operation = null;
let shouldResetDisplay = false;
let isErrorState = false;

digits.addEventListener("click", (event) => {
  if (isErrorState) {
    clearCalculator();
    display.textContent = 0;
    isErrorState = false;
  }
  const digit = event.target.textContent;
  if (digit === "." && display.textContent.match(/\./) !== null) {
    return;
  }
  if (shouldResetDisplay) {
    display.textContent = digit;
    shouldResetDisplay = false;
  } else {
    display.textContent =
      display.textContent === "0" ? digit : display.textContent + digit;
  }
});

operators.addEventListener("click", (event) => {
  if (isErrorState) {
    clearCalculator();
    display.textContent = "0";
    isErrorState = false;
  }
  let operator = event.target.textContent;

  if (operator === "Clear") {
    clearCalculator();
    display.textContent = "0";
    return;
  }
  if (operator === "Back") {
    display.textContent = 0;
    return;
  }

  if (operator === "=") {
    if (firstOperand !== null && operation && !shouldResetDisplay) {
      secondOperand = Number(display.textContent);
      const result = operate(firstOperand, operation, secondOperand);

      if (!isFinite(result)) {
        display.textContent = "You can't divide by 0 dummy";
        clearCalculator();
        isErrorState = true;
        return;
      } else {
        display.textContent = result;
        firstOperand = result;
        operation = null;
      }
    }
    shouldResetDisplay = true;
    return;
  }

  if (firstOperand !== null && operation && !shouldResetDisplay) {
    secondOperand = Number(display.textContent);
    const result = operate(firstOperand, operation, secondOperand);

    if (!isFinite(result)) {
      display.textContent = "You can't divide by 0 dummy";
      clearCalculator();
      isErrorState = true;
      return;
    } else {
      display.textContent = result;
      firstOperand = result;
    }
  } else {
    firstOperand = Number(display.textContent);
  }
  operation = operator;
  shouldResetDisplay = true;
});

function clearCalculator() {
  firstOperand = null;
  secondOperand = null;
  operation = null;
  shouldResetDisplay = false;
}

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
  return a / b;
}

function operate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}
