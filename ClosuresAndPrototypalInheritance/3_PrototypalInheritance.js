/**
 * Prototypal inheritance in JS is simply a means with objects inherits attributes and behaviours from
 * another object.
 * In Javascript, Arrays and functions are objects thus, they inherit all the attributes and behaviours 
 * of an object
 */

//Prototypal inheritance is demonstrated below

const animal = {
    move: () => console.log("I can move"),
    feed: () => console.log("I can eat"),
}

const dog = {
    legs: 4,
    bark: ()=> console.log("woo woo woo")
}
//this is not an efficient way to achieve inheritance and should not be used in reality
dog.__proto__ = animal

dog.feed()
dog.bark()
dog.move()
console.log(animal.isPrototypeOf(dog)) //true

/**
 * IMPORTANT NOTE
 * Only functions has the prototype property
 * 
 * All functions has the prototype property and it references an object used to attach properties
 * that will be inherited by objects further down the prototype chain.
 *          The prototype object within a function is where we find the call(), apply(), 
 *          bind() behaviours of a funtion
 * Hence, "Object" is said to be a function because it has the prototype property
 * However, "Object.prototype" is an object. It is the base object from which others inherits from.
 *          this objcet [Object.prototype] contains attributes and behaviours e.g toString() etc
 * 
 * The proto is used as a pointer up the chain to the
 *  prototype property of the parent object(function) in the inheritance chain
 */



/**
 * A better way of achieving prototypal inheritance is shown bwlow
 */

const human = {
    mortal: true
}

let socrates = Object.create(human)
socrates.age = 67

console.log(human.isPrototypeOf(socrates)) //true
console.log(socrates.mortal)
