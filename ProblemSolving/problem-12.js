/*
Problem: Count the Vowels

Write a JavaScript function that takes a string as input and returns the count of vowels (a, e, i, o, u) 
in the given string. Ignore case while counting

// Example usage:
console.log(countVowels("Hello"));       // Output should be 2 (e and o are vowels)
console.log(countVowels("Programming"));  // Output should be 3 (o, a, and i are vowels)
*/

const vowelsCounter = (string) => {
  let vowels = 0;
  let inputString = string.toLowerCase(); //toUpperCase();
  for (let index = 0; index < inputString.length; index++) {
    if (
      inputString[index] == "a" ||
      inputString[index] == "e" ||
      inputString[index] == "i" ||
      inputString[index] == "o" ||
      inputString[index] == "u"
    ) {
      vowels++;
    }
  }
  return vowels;
};

console.log(vowelsCounter("English"));
