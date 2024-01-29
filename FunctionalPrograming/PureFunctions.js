/**
 * A function is said to be a pure function if;
 * 1. it returns the same output given the same input
 * 2. it cannot modify anyhting outside of itself i.e no side effects
 */

//The below function mutateArray is said to have a side effect in the sense that it modifies 
//the state of the global array property
let array = [1,2,3]

function mutateArray(arr){
    arr.pop;
}
mutateArray(array)
console.log(array)

//The above function can be made not to have any side effects as shown below

let array2 = [1,2,3]

function removeLastItem(arr){
    let a = [].concat(arr) //NB: the array concat mehtod creates a new array in memory rather than just parsing by reference in memory
    a.pop()
    return a;
}
function multiplyByTwo(arr){
    let a = [].concat(arr)
    return a.map(item => item * 2)
}
console.log(removeLastItem(array2))
console.log(multiplyByTwo(array2))
console.log(array2)

/**
 * NB: Pure functions are very easy to test, very easy to compose and it avoids a lot of buugs]
 * because there is no mutation, no shared states and they are very predictable
 * The goal of FP is not to always create pure functions but to minimize side effects and organise your
 * code so that the functions with side effects are isolated
 */