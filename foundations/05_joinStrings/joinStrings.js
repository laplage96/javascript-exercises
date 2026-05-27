// 1. Base data variables
const firstName = "Carlos";
const lastName = "Stevenson";
const thisYear = 1965;
const birthYear = 1947;

// 2. Optimization variables (Step 3)
const fullName = `${firstName} ${lastName}`;
const age = thisYear - birthYear;

// 3. Final greeting string constructed from fullName and age
const greeting = `Hello! My name is ${fullName} and I am ${age} years old.`;




// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
