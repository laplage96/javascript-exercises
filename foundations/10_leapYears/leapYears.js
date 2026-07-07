const leapYears = function(year) {
    //check if divisible by 4
    const isDivisibleByFour = year % 4 === 0;
    //check if is a century year
    const isCentury = year % 100 === 0;
    //check if is divisble by 400
    const isDivisibleByFourHundred = year % 400 === 0;


    //combine the logic using standard operators
    if (isDivisibleByFour && (!isCentury || isDivisibleByFourHundred)){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
