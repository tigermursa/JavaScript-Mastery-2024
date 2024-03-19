const myArray = ["mother", "father", "sister", "brother", "grand-mother"];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i].length <= 6) {
    return myArray[i] + "important";
  } else {
    return myArray[i] + "important kom";
  }
}

// for in loop for each loop for of loop while loop