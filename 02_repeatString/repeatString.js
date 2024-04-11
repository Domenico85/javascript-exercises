const repeatString = function(string, num) {
    if (typeof string !== 'string' || num < 0){
        return 'ERROR';
    }else if(num === 0){
        return '';
    }

    let finalString = string;
    for ( let i=1; i<num; i++){
        finalString += string;
    }
    return finalString;
};
// repeatString()
// Do not edit below this line
module.exports = repeatString;
