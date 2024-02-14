# Module 3 : Into the OOP

## Video - 5/6 : Prototypal Inheritance In Action.




function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

let goldenRetriever = new Dog("Buddy", "Golden Retriever");
goldenRetriever.sayHello(); // Output: Hello, I'm Buddy


### Here, Dog inherits the sayHello method from Animal through prototypal inheritance.