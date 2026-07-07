const sumAll = function(min, max) {
    // 1. Guard against negative numbers and non-integer types
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';

    // 2. If the parameters are passed out of order, swap them
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    // 3. Accumulate the sum from min up to and including max
    let finalSum = 0;
    for (let i = min; i <= max; i++) {
        finalSum += i;

    }

    return finalSum;


};

// Do not edit below this line
module.exports = sumAll;
