const removeFromArray = function(arr, ...args) {
    arr = arr.filter(arr => !args.includes(arr));
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
