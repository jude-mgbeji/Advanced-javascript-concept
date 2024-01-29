/**
 * High order functions are functions that does one or both of the below;
 * 1. accepts a function as an argument
 * 2. returns a function
 * example
 */
const hof = () => () => 5
hof()();

/**
 * Closures is some sort of mechanism for containing state
 * in JS we craete a closure when a function access a variable defined outside of
 * the immediate function scope
 * example
 */

const closure = function(){
    let count = 0
    return function(){
        count++
        return count;
    }
}
const closureFn = closure();
console.log(closureFn())
console.log(closureFn())
console.log(closureFn())
console.log(closureFn())