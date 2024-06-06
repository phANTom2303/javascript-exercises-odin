const reverseString = function (str) {
    if (str.length <= 1)
        return str;
    else {
        let rev = '';
        for(let i = 0; i < str.length;i++)
            rev = str.charAt(i) + rev;
        return rev;
    }
};

// Do not edit below this line
module.exports = reverseString;
