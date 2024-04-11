let removeFromArray = function(array,...args) {
    return array.filter(val => !args.includes(val))

};

// Do not edit below this line
module.exports = removeFromArray;
