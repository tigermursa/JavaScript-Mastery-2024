/*
Problem: Count the Vowels

Write a JavaScript function that takes a string as input and returns the count of vowels (a, e, i, o, u) 
in the given string. Ignore case while counting

// Example usage:
console.log(countVowels("Hello"));       // Output should be 2 (e and o are vowels)
console.log(countVowels("Programming"));  // Output should be 3 (o, a, and i are vowels)
*/

function countVowels(str) {
  let vowels = 0;
  let input = str.toLowerCase(); // Convert the input to lowercase to ignore case

  for (let i = 0; i < input.length; i++) {
    // Use input[i] to access the character at index i
    if (
      input[i] == "a" ||
      input[i] == "e" ||
      input[i] == "i" ||
      input[i] == "o" ||
      input[i] == "u"
    ) {
      vowels++;
    }
  }

  return vowels; // Return the count of vowels
}
console.log(countVowels("aeiou")); 