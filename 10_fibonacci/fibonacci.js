const fibonacci = function (num) {
    if (typeof num != 'number')
        num = parseInt(num);

    if (num < 0)
        return "OOPS";
    if (num == 0)
        return 0;
    else if (num <= 2)
        return 1;
    else {
        let a = 1, b = 1, sum;
        for (let i = 3; i <= num; i++) {
            sum = a + b;
            a = b;
            b = sum;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
