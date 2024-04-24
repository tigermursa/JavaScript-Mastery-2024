/* 
All common math operators:
+ , - , * , / ,%  (remainder)

!All different operators:
**, ++,++,--,--

*/
// **  Exponentiation
let y = 3;
let x = y ** 2; // means y = 3, so 3 * 3 = 9
//console.log(x); //9

//++ Pre increment

 let v = 9;
 let s = ++v; // 1 + v , v = 9 so v = 10
 //console.log(v); //10
 //console.log(s); //10


//++ Post increment

let m = 3;
let n = m++; // m = 3 + 1 = 4
//console.log(n); // = 3
//console.log(m); // = 4

//-- Pre decrement

let  r = 7 ;
let t = --r; // 1 - 7

//console.log(r); //6
//console.log(t); //6

//-- Post decrement

let  p = 4 ;
let q = p--; //  4 -1 = 3

console.log(p); //3
console.log(q); //4

// Remainder % 

let  w = 13;
let remainder = w % 5;

console.log(remainder);