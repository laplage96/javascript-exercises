const palindromes = function (str) {
const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//reverse the clean string
const reversedStr = cleanStr.split('').reverse().join('');

//Compare the cleaned string with its reversed version
return cleanStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
