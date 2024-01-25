/*
Write a function called calculateGrade that takes a numerical score as an argument and returns the corresponding grade
 according to the following scale:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
The function should validate that the input score is within a valid range (0-100) and return an appropriate message if it's not.

console.log(calculateGrade(95)); // Output: 'A'
console.log(calculateGrade(78)); // Output: 'C'
console.log(calculateGrade(105)); // Output: 'Invalid score, please enter a score between 0 and 100.'
*/

const calculateGrade = (num) => {
  if (num >= 90 && num <= 100) {
    return `Your got A`;
  } else if (num >= 80 && num <= 89) {
    return `Your got B`;
  } else if (num >= 70 && num <= 79) {
    return `Your got C`;
  } else if (num >= 60 && num <= 69) {
    return `Your got D`;
  } else if (num >= 0 && num < 59) {
    return `Haha you fail dude`;
  }
};
const myNumber = 99;
const myResult = calculateGrade(myNumber);
console.log(myResult);

// const calculateGrade = (num) => (
//     (num >= 90 && num <= 100) ? 'A' :
//     (num >= 80) ? 'B' :
//     (num >= 70) ? 'C' :
//     (num >= 60) ? 'D' :
//     (num >= 0 && num < 60) ? 'F' :
//     'Invalid score, please enter a score between 0 and 100.'
//   );
