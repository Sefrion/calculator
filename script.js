window.addEventListener('DOMContentLoaded', () => {
	// Elements
	const numbers = document.querySelector('.numbers');
	const operations = document.querySelector('.operations');
	const display = document.querySelector('#display');

	// Variables
	let result;

	// Event listeners
	window.addEventListener('keydown', (e) => {
		if (
			!isNaN(+e.key) ||
			e.key === '+' ||
			e.key === '-' ||
			e.key === '*' ||
			e.key === '/'
		) {
			display.disabled = false;
			display.value += e.key;
			display.disabled = true;
		}
		if (e.key === '=' || e.key === 'Enter') {
			display.disabled = false;
			calculate(display.value);
			display.disabled = true;
		}
		if (e.key === 'Backspace') {
			display.value = '';
		}
	});

	numbers.addEventListener('click', (e) => {
		display.disabled = false;
		display.value += e.target.value;
		display.disabled = true;
		if (e.target.value === 'reset') {
			display.value = '';
		}
	});

	operations.addEventListener('click', (e) => {
		if (e.target.value === '=') {
			display.disabled = false;
			calculate(display.value);
			display.disabled = true;
		} else {
			display.disabled = false;
			display.value += e.target.value;
			display.disabled = true;
		}
	});

	// Functions
	function calculate(input) {
		if (
			input.includes('+') ||
			input.includes('-') ||
			input.includes('*') ||
			input.includes('/')
		) {
			const operator = input.includes('+')
				? '+'
				: '' || input.includes('-')
				? '-'
				: '' || input.includes('*')
				? '*'
				: '' || input.includes('/')
				? '/'
				: '';
			const values = input.split(operator);
			result = 0;
			switch (operator) {
				case '+':
					values.forEach((value, idx) => {
						result += +values[idx];
						isNaN(result) ? (result = '') : result;
					});
					break;
				case '-':
					values.forEach((value, idx) => {
						if (idx === 0) {
							result = value;
						} else {
							result -= +values[idx];
							isNaN(result) ? (result = '') : result;
						}
					});
					break;
				case '*':
					values.forEach((value, idx) => {
						if (idx === 0) {
							result = value;
						} else {
							result *= +values[idx];
							isNaN(result) ? (result = '') : result;
						}
					});
					break;
				case '/':
					values.forEach((value, idx) => {
						if (idx === 0) {
							result = value;
						} else {
							result /= +values[idx];
							isNaN(result) ? (result = '') : result;
						}
					});
					break;
				default:
					display.value = result;
			}

			display.value = result;
		}
	}
});
