// Find the close number from array

function findClosestTemperature(arr) {
  if (arr.length === 0) {
    return 0;
  }

  // Initialize the closest temperature to the first element in the array
  let closestTemperature = arr[0];

  // Iterate through the array to find the closest temperature to 0
  for (let i = 1; i < arr.length; i++) {
    // Compare the absolute values to find the closest temperature
    if (
      Math.abs(arr[i]) < Math.abs(closestTemperature) ||
      (Math.abs(arr[i]) === Math.abs(closestTemperature) && arr[i] > 0)
    ) {
      closestTemperature = arr[i];
    }
  }

  return closestTemperature;
}

// Example usage:
const temperatures = [-8, -1, 3, 4, 5, 7,9,10,-5];
const closestTemp = findClosestTemperature(temperatures);
console.log("Closest Temperature:", closestTemp);

/*Math.abs() is a JavaScript built-in function that returns the absolute value of a number. 
The absolute value of a number is its distance from zero on the number line, 
without regard to its sign (positive or negative). So, whether you have a positive or negative number, 
applying Math.abs() will give you the positive version of that number. */
