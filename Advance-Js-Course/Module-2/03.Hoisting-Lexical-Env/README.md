# Module 2 : The inner working of JavaScript

## Video - 3/6 : Hoisting(only for var and function) And Lexical Environment And Concept Of Closure.

### what is Hoisting ??

#### formal:

Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope during compilation, allowing you to use them before they are formally declared in the code.

#### Casual

Hoisting in JavaScript is like the language moving declarations (of variables and functions) to the top of your code behind the scenes, so you can use them even before writing them explicitly. It's like the language lifts them up.

### what is Lexical Environment??

In simple terms, a lexical environment in JavaScript is like a storage box that keeps track of variables and their values based on where they are written in the code. It helps the computer understand and manage these variables.

function greet(name) {
    let message = "Hello, ";
    console.log(message + name);
  }
  
  function sayHello() {
    let name = "Alice";
    greet(name);
  }
  
  sayHello();

In this example, when sayHello is called, it creates a new lexical environment with its own variable name. When greet is called inside sayHello, it still has access to the lexical environment of sayHello, so it can use the name variable even though it's declared outside of the greet function. The lexical environment helps maintain the relationship between functions and their variables.

#### If I had to describe a lexical environment in one word, I would say it's like a "context" or a "scope" in which variables are defined and can be accessed.

#### So....

A lexical environment in JavaScript is a context in which variables are declared and can be accessed. It captures the association between variable names and their values based on the code's structure and where the variables are defined.

### what is Closure??

A closure environment in JavaScript is like a "remembered" space where a function can still access variables even after the function has finished running. It "captures" and holds onto the variables it needs.

function createCounter() {
let count = 0;

function increment() {
count++;
console.log(count);
}

return increment;
}

const counter = createCounter();

counter(); // Outputs: 1
counter(); // Outputs: 2
counter(); // Outputs: 3

In this example, createCounter creates a closure. The inner function increment "remembers" the count variable even after createCounter has finished executing. Each time counter is called, it continues to access and update the count variable within its closure.

#### So..

A closure is a mechanism in JavaScript that allows a function to retain access to variables from its outer scope, creating a sort of encapsulated environment even after the outer function has completed execution.
