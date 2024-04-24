/*

!There are mainly two type of data in JavaScript

1)Primitive Data 
2)Reference Data

Primitive Type data:
1)Number = 1 2 3 4 5 6 ...
2)String = "1","Hello","String-words"
3)Boolean = true false
4)Undefine 
5)Null
6)symbol
7)BigInt = 90071992547409913

Reference Type data:
1)Array
2)Object

3)Date()
4)Function
5)map,set



BigInt is particularly useful in scenarios where precision matters, and you need to work with integers
that exceed the limitations of regular JavaScript numbers. It's important to note that not all operations 
available for regular numbers are available for BigInt. For example, bitwise operations are not supported on BigInt

*/

const myObj = {
  name: "Mursalin Hossain",
  country: "Bangladesh",
  gmail: {
    one: "mursalin@gmail.com",
    two: "mue@gmail.com",
  },
};

const newObj = { ...myObj };

newObj.name = "updated";

console.log(newObj);
