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

console.log(a, b, c, d);

//function is a block of reusable code

let names = function (f, l) {
  //! anonymous function
  return f + l;
};

const res = names(5, 6);
console.log(res);

// Reverse

const isReverse = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
};

console.log(isReverse("HELLO"));

// Palindrome
const isPalindrome = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse === str ? true : false;
};

console.log(isPalindrome("pop"));

