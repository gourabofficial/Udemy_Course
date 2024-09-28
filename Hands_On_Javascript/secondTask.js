/* Functional Constructor and Errors
Task 1: Create a Functional Constructor

Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".



Task 2: Handle Errors

Modify the Person constructor to throw an error if the age is not a positive number.
*/

// Corrected Person constructor
function Person(name, age) {
    // Correct type and value check for age
    if (typeof age !== 'number' || age <= 0) {
        throw new Error("Age must be a positive number");
    }

    this.name = name;
    this.age = age;

    // Attach the greet method to the instance
    this.greet = function() {
        return `Hello, my name is ${this.name}`;
    };
}

// Correct usage
try {
    const person1 = new Person('gourab', 21);
    console.log(person1.greet()); // Hello, my name is Alice
} catch (error) {
    console.error(error.message);
}

// Fix the object name to persion2
try {
    const persion2 = new Person('Hitesh', 40);
    console.log(persion2.greet()); // Hello, my name is Hitesh
} catch (error) {
    console.error(error.message);
}