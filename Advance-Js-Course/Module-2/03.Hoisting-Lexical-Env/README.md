# Module 2 : The inner working of JavaScript

## Video - 3/6 : Hoisting(only for var and function) And Lexical Environment And Concept Of Closure.

### what is Hoisting ??

#### formal:

Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope during compilation, allowing you to use them before they are formally declared in the code.

#### Casual

Hoisting in JavaScript is like the language moving declarations (of variables and functions) to the top of your code behind the scenes, so you can use them even before writing them explicitly. It's like the language lifts them up.

### what is Lexical Environment??

In simple terms, a lexical environment in JavaScript is like a storage box that keeps track of variables and their values based on where they are written in the code. It helps the computer understand and manage these variables.

function greet() {
var message = "Hello, ";
console.log(message + name);
}

function sayHello() {
var name = "Alice";
greet();
}

sayHello();

In this example, when sayHello is called, it creates a new lexical environment with its own variable name. When greet is called inside sayHello, it still has access to the lexical environment of sayHello, so it can use the name variable even though it's declared outside of the greet function. The lexical environment helps maintain the relationship between functions and their variables.

#### If I had to describe a lexical environment in one word, I would say it's like a "context" or a "scope" in which variables are defined and can be accessed.

#### So....
A lexical environment in JavaScript is a context in which variables are declared and can be accessed. It captures the association between variable names and their values based on the code's structure and where the variables are defined.