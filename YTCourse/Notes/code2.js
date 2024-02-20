//Prime

let num = 11;
let isPrime = true;

for (var i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}

//leaper

let year = 2023;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leaper");
} else {
  console.log("Not leaper");
}

// pattern i and j
for (let i = 1; i <= 3; i++) {
  var pattern = "";
  for (let j = 1; j < i; j++) {
    pattern = pattern + " *";
  }
  console.log(pattern);
}

//function ...

let a = 5,
  b = 6,
  c = 7,
  d = 8;



//function is a block of reusable code
 