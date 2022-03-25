// Here, we get the inputs we will need.
const buttons = document.querySelectorAll('.calculator_button');
const display = document.getElementById('calculator_display');
const clear = document.getElementById('clear');
const erase = document.getElementById('erase');
const equal = document.getElementById('equal');

// Here, when the user clicks on a button, we add it to the input.
buttons.forEach((b) => {
	b.addEventListener('click', () => {
		display.value += b.value;
	});
});

// When the user clicks on the AC button, the operation in progress is deleted.
clear.addEventListener('click', () => {
	display.value = '';
});

// When the user clicks on the DEL button, the last digit added is removed.
erase.addEventListener('click', () => {
	display.value = display.value.substr(0, display.value.length - 1);
});

// When the user clicks on the = button, the operation is performed
equal.addEventListener('click', () => {
	try {
		let result = eval(display.value);

		if (Number.isInteger(result)) {
			display.value = result;
		} else {
			display.value = result.toFixed(2);
		}
	} catch (error) {
		alert('Invalid operation');
	}
});
