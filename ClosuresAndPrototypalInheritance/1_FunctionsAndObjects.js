/**
 * Functions are objects
 * They are special type of objacts called callable objects 
 * hence we can move them around and store them as data
 *  
 */

/**
 * Functions are referred to as first class citizens of javascript
 * this is because;
 */

/**
 *  1. they can be assigned to a varaible or an object attribute. i.e
 */
const stuff = function(){
    console.log("doing stuff")
}
stuff()

const obj = {
    stuff(){
        console.log("doing stuff inside obj")
    }
}
obj.stuff()

/**
 * 2. We can pass functions as parameters to another function. i.e
 */

function a(an){
    an()
}
a(function(){console.log("function as a function parameter")})

/**
 * 3. Functions can be returned from within another function. i.e
 */

function b(){
    return function(){console.log("function returned within a function")}
}
const c = b()
c()

/**
 * NB: A higher order funtion is a function that returns a function 
 * or accepts a function as parameter
 */
const multiplyBy = function(num1){
    return function(num2){
        return num1*num2;
    }
}

const multiplyByTwo = multiplyBy(2)
multiplyByTwo(5)

//can be simplified using arrow functions
//const multiplyBy = (num1) => (num2) => num1*num2