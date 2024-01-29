/**
 * Modules is a way/design pattern to independently divide our program into components such that each component
 * can interact with each other without tight coupling
 */
/**
 * One example of the module pattern is the Immediately invoked function expression(IIFE)
 * which prevents functions and variables from being loaded in the global scope
 */
const script1 = (function(){
    function doNothing(){
        return "I have nothing to do";
    }
    function doStuff(){
        return "I am doing something";
    }
    return {
        doStuff: doStuff,
        doNothing: doNothing
    }
})();

let x = script1.doStuff();
let y = script1.doNothing();
console.log(x);
console.log(y);

/**
 * NB: In using a IFFE, if we need an attribute or prop from the global scope, it is advisable to pass 
 * that attribute or prop to the IFFE as an arguemnant rather than directlly modifying it in IFFE.
 * This helps us to not override the attribute or prop in the global scope
 */
