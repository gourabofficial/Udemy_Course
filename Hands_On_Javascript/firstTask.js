// Prototypes in JavaScript
/*
Task: Prototype Chaining

Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

Then create another constructor Dog that inherits from Animal using prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.*/

// Step 1: Create Animal constructor function
function Animal() {}

// Step 2: Add speak() method to Animal's prototype
Animal.prototype.speak = function() {
  return 'Animal speaking';
};

// Step 3: Create Dog constructor function
function Dog() {}

// Step 4: Inherit from Animal using prototype
Dog.prototype = Object.create(Animal.prototype);

// Fix the constructor to point to Dog
Dog.prototype.constructor = Dog;

// Step 5: Add bark() method to Dog's prototype
Dog.prototype.bark = function() {
  return 'Woof!';
};

// Step 6: Demonstrate the prototype chain
const myDog = new Dog();

console.log(myDog.speak()); // Animal speaking (inherited from Animal)
console.log(myDog.bark());  // Woof! (from Dog's prototype)

// Demonstrate the prototype chain
console.log(myDog instanceof Dog);    // true
console.log(myDog instanceof Animal); // true
console.log(Object.getPrototypeOf(myDog) === Dog.prototype);   // true
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype); // true