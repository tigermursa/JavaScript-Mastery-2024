# Module 3 : Into the OOP

## Video - 4/6 : Creating Your First Constructor Function

### A constructor function is a special function in programming used to create and initialize objects. It defines a blueprint for objects and is commonly used in object-oriented programming languages. In JavaScript, for instance, you use the new keyword to create instances of an object defined by a constructor function.

## A constructor function is like a recipe for making objects in programming. It sets up how objects should be created and what they should initially have. In languages like JavaScript, you can think of it as a template. When you want to create an object following that template, you use the "new" keyword. It's like following the recipe to bake cookies - the recipe is the constructor, and each batch you make using it is an instance of the object.

function Person(name, age) {
this.name = name;
this.age = age;
}

var person1 = new Person('John', 25);
var person2 = new Person('Jane', 30);

console.log(person1.name); // John
console.log(person2.age); // 30
