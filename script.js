const display = document.querySelector(".display");

const digits = document.querySelector(".digits");

let firstNumber;

digits.addEventListener("click", (event) => {
  let digit = event.target;
  currentDisplay = display.textContent;
  if (currentDisplay == 0) {
    display.textContent = digit.textContent;
  } else {
    display.textContent += digit.textContent;
  }
  firstNumber = currentDisplay;
});

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
