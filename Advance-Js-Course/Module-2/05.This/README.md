# Module 2 : The inner working of JavaScript

## Video - 5/6 : "This" Keyword.

## "this" Keyword is like a pointer !

In JavaScript, "this" is like a special word that refers to something

1. If "this" is used in a regular function, it usually refers to the thing that called the function

2. If "this" is used in an object method (a function inside an object), it refers to that object.

3. In a global setting (outside any function or object), "this" refers to the global object, which is usually the window in a web browser.

4. In arrow functions, "this" keeps its value from where the function was created, not where it's called.

var person = {
name: "John",
age: 30,

// Define a method within the object
introduce: function() {
console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
}
};

person.introduce(); // Hi, I'm John and I'm 30 years old.
