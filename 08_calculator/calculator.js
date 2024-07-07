const add = function(num1, num2) {
	if(num1 == 0 && num2 == 0)
      return 0;
    else
      return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let total = arr.reduce(function(total, num){
    return total + num;
  },0);
  return total;
};

const multiply = function(arr) {
  let total = arr.reduce(function(total, num){
    return total * num;
  },1);
  return total;
};

const power = function(num,power) {
	let ans = 1;
  for(let i = 1; i <= power;i++)
      ans = ans * num;
  return ans;
};

const factorial = function(num) {
  if(num == 0)
      return 1
	else if(num <= 2)
      return num;
  else {
    let ans = 1;
    for(let i =1; i <= num; i ++)
      ans = ans * i;
    return ans;
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
