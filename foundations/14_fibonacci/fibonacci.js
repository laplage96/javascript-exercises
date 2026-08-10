const fibonacci = function(n) {
const count = Number(n);

//handle edge cases for zero or negative numbers
if (count < 0) return "OOPS";
if (count === 0) return 0;
if (count === 1 || count === 2) return 1;

let prev = 1;
let current = 1;

for (let i = 3; i <= count ; i++) {
    let next = prev + current;
    prev = current;
    current = next;

}
return current;
};

// Do not edit below this line
module.exports = fibonacci;
