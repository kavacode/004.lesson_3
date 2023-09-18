let math = prompt('Choose an operation (add, sub, mult, div):');

let firstNumber = parseFloat(prompt('Enter first number'));
let secondNumber = parseFloat(prompt('Enter second number'));

if (math === 'add'){
	let sum = firstNumber + secondNumber;
	alert(firstNumber + " + " + secondNumber + " = " + sum);
} else if (math === 'sub'){
	let diff = firstNumber - secondNumber;
	alert(firstNumber + " - " + secondNumber + " = " + diff);
} else if (math === 'mult'){
	let prod = firstNumber * secondNumber;
	alert(firstNumber + " * " + secondNumber + " = " + prod);
} else if(math === 'div'){
	let quot = firstNumber / secondNumber;
	alert(firstNumber + " / " + secondNumber + " = " + quot);
}
else{
	alert('Error. Please, try again');
}