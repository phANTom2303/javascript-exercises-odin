const palindromes = function (str) {
    str = str.toLowerCase();
    let forward = "";
    let reverse = "";
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i);
        if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
            forward = forward + c;
            reverse = c + reverse;
        }
    }
    if (forward == reverse)
        return true;
    else 
        return false;
};

// Do not edit below this line
module.exports = palindromes;
