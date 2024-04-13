const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber-secondNumber;
};

const sum = function(arr) {
	let total = 0;
  for (let num of arr){
    total += num
  }
  return total;
};

const multiply = function(arr) {
	let total = 1;
  for (let num of arr){
    total *= num
  }
  return total;
};

const power = function(firstNumber,secondNumber) {
	let power = Math.pow(firstNumber, secondNumber)
  return power;
};

const factorial = function(n) {
  if (n === 0){
    return 1;
    } else {
      return n * factorial (n - 1);
    }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
