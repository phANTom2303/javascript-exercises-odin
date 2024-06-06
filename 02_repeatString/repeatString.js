const repeatString = function (word, num) {
    if (num === -1)
        return 'ERROR';
    else if (num === 0)
        return '';
    else {
        let res = '';
        for (let i = 1; i <= num; i++)
            res = res + word;
        return res;
    }

};

// Do not edit below this line
module.exports = repeatString;
