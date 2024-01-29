/**
 * IIFE stands for immediately invoked function expression, 
 * It helps crrate a new environment thus keeping the global execution
 * context/envrionment clean
 * It is was used majorly used to build libraries like jquery and custom 
 * libraries to help curtail loading a lot of variables and functions 
 * in the global scope
 * Example
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