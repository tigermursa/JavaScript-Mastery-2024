/*
Write a function that takes a string as input and returns the string reversed.
console.log(reverseString("Hello")); // Should return "olleH"
console.log(reverseString("JavaScript")); // Should return "tpircSavaJ"
*/

const stringReverser = (str) => {
  const reversed = str.toString().split("").reverse().join("");
  return reversed;
};

const actualStringText = 12345;
const reversedText = stringReverser(actualStringText);

console.log(reversedText);


// str.toString() converts the input to a string (if it's not already).
// split('') splits the string into an array of characters.
// reverse() reverses the array.
// join('') joins the reversed array back into a string.