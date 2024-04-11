const reverseString = function(str) {
    const reversedString = str.split("").reduce((acc,char) => char + acc, "" ); 
    return reversedString
};


// Do not edit below this line
module.exports = reverseString;
