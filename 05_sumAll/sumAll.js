const sumAll = function (num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        if (num1 > 0 && num2 > 0) {
            let sum = 0;
            let max = (num1 > num2) ? num1 : num2;
            let min = num1 + num2 - max;
            for (let i = min; i <= max; i++)
                sum += i;
            return sum;
        }
        return 'ERROR';
    }
    else
        return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
