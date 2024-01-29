/**
 * The "this" keyword can be used to bind objects in four ways
 */

/**
 * 1. new binding
 * mostly in constrtuctor functions and constructors
 * here, "this" refers to the instance of the object created with the "new" keyword
 * Example;
 */

function Person(name, age){
    this.name = name;
    this.age = age;
}
let person1 = new Person("Ahmed",27);
console.log(person1)

/**
 * 2. Implicit binding
 * here, what "this" refers to is implied
 * Example;
 */
const person ={
    name: "Karen",
    age: 47,
    greet(){
        return "hi "+ this.name //this refers to the person object
    }
}

/**
 * 3. Explicit binding
 * here we dictate what the "this" keyword should refer to
 */

const person3 =  {
    name: "Karen",
    age: 47,
    greet: function(){
        console.log( "hi "+ this.setTimeout) //this is explicitly bounded to the windows object
    }.bind(window)
}
      
/**
 * 4. arrow function
 * We know that arrow functions are lexically scoped
 *  i.e, "this" within an arrow function would refer to whereever we write the function
 */
const person4 = {   
    name: "Karen",
    age: 47,
    greet: function() {
       inner =() => console.log( "hi "+ this.name) //because "this" is within an arrow function it refers to the object within which it is located
       inner()
    }
}

//NB: from case 4, if the fuction within function is not an arrow function, then this will refer to the window object 