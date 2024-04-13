const palindromes = function (str) {
    const lowerCaseStr = str.toLowerCase();
    const punctuationStr = lowerCaseStr.replace(/[\W_]/g, '');
    const reversedString = punctuationStr.split('').reverse().join('');
if (str === reversedString){
    return true;
}else if(str !== punctuationStr){
    return true;
}else{
    return false;
}

};

// Do not edit below this line
module.exports = palindromes;
