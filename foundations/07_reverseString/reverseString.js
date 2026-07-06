const reverseString = function(string) {
    let reversedResult = "";
    for (let i = string.length - 1; i >= 0; i--){
        reversedResult += string[i]
    }

    return reversedResult;

};

// Do not edit below this line
module.exports = reverseString;
