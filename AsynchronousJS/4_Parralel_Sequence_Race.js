/**
 * With Asynchronous programming using promises, say we need to run multiple promises,
 * we might decide to run either;
 * 1. Parralel: this is running all the promises at the same time and output when all is done
 * 2. Sequence: this running each promise one at a time
 * 3. Race: first to execute and disregard the rest, only outputs the first to complete
 * Examples
 */

//say we have three promises
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hii")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "JJJJJ")
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 6000, "bbbbbbbbbbbbb")
})

async function parallel(){
    const promiseArray = [promise2, promise3, promise4]
    const [response1, response2, response3] = await Promise.all(promiseArray);
    console.log(response1)
    console.log(response2)
    console.log(response3)
    console.log("parralel is done")
}
parallel()

async function race(){
    const promiseArray = [promise2, promise3, promise4]
    const response1 = await Promise.race(promiseArray);
    console.log(response1)
    console.log("race is done")
}
race()

async function sequence(){
    const response1 = await promise2;
    const response2 = await promise3;
    const response3 = await promise4;
    console.log(response1)
    console.log(response2)
    console.log(response3)
    console.log("sequence is done")
}
sequence()