/**
 * A promise is an object that may produce a single value sometimes in the future.
 * Either a resolved value or a reson that it is not resolved(rejected)
 * A promise can be in one of three possible states
 * 1. Fulfilled 
 * 2. Rejected
 * 3. Pending
 */
/**
 * Before promises came in in ES6, we used callbacks
 */
//Creating Promises

let promise = new Promise((resolve, reject) => {
    if(true){
        resolve("resolved successfully")
    }else{
        reject("error occurred")
    }
});

promise.then(result => console.log(result))

//Chain promise
promise.then(result => {
    return result+"!"
}).then(result2 => {
    return result2+"?"
}).then(result3 => console.log(result3))

//Exception handling in promise
//NB: the catch block only handles any exception that occurred in codes above it
promise.then(result => {
    return result+"!!!!"
}).then(result2 => {
    throw Error;
    return result2+"???"
}).catch(() => console.log("Exception"))
.then(result3 => console.log(result3))

//List of promises

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hii")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "JJJJJ")
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 6000, "bbbbbbbbbbbbb")
})

Promise.all([promise, promise2, promise3, promise4])
.then(results =>{
    console.log(results)
})
 //NB: Promise.all() takes an array of promises when .then is applied, 
 //it returns an array of results in the order of the promises 
 //it waits for all the promises to be resolved before outputting