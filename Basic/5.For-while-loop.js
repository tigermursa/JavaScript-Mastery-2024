/*
for (initialization; condition; iteration) {
  // code to be executed in each iteration
}
*/

//for loop:

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//while  loop:

/*
// Initialization
let initialization = initial_value;

// While loop
while (condition) {
  // Code to be executed in each iteration

  // Iteration expression (update the loop control variable)
  iteration_expression;
}
*/
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
