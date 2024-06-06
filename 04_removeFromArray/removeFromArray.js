const removeFromArray = function (arr, ...dels) {
    for (const del of dels) {
        while (arr.indexOf(del) >= 0)
            arr.splice(arr.indexOf(del), 1);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
