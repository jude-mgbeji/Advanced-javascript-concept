/**
 * Composition is the idea that any sort of data transformation that we do is obvious.
 * Composability is a system design pronciple that deals with the relationship between components. 
 * This components that be moved around defining different data flow
 * Most JS libraries have compose() inbuilt
 * NB: Here the order of execution of the different components is from right to left
 */
/**
 * Pipe is a similar concept, the difference is the order of execution of the different component
 * i.e from left to right
 */
//Example

function compose(f, g){
    return function (data) {
       return f(g(data))
    }
}
let multiplyBy3 = function multiplyBy3Fn(n){
    return n*3
}
let makePositive = function makePositiveFn(n){
    return Math.abs(n)
}
let comp = compose(multiplyBy3, makePositive)
console.log(comp(-40))