// Get the display element
let display = document.querySelector('#display');

// Get the button elements
let buttons = document.querySelectorAll('.buttons button');

// Define the operators
let operators = ['+', '-', '*', '/'];

// Define the equals function
function equals() {
  try {
    let result = eval(display.value);
    display.value = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}

// Define the clear function
function clear() {
  display.value = '';
}

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      equals();
    } else if (value === 'C') {
      clear();
    } else if (operators.includes(value)) {
      display.value += value;
    } else {
      display.value += value;
    }
  });
});

