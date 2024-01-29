/**
 * We have a concept of Closures in JS because
 * 1. Functions are first class citizens
 * 2. Lexical scope [i.e the JS engine knows what functions and variables are available in scope even before running the code]
 */

/**
 * Closures are simply a combination of functions and the lexical environment
 *  from which it was declared
 * Closures allow a function to access variable from an encloseing scope or environment
 *  even after it leaves the scope it was declared
 * 
 * Closures has two very important benefits
 * 1. Memory efficient
 * 2. Encapsulation
 */

//Memory efficient

//here the arr get stored in memory for everytime the function is called
function heavyDuty(index){
    const arr = new Array(10000).fill('❤️')
    console.log('Created!')
    return arr[index]
}
heavyDuty(10)
heavyDuty(100)
heavyDuty(100)

//With closure, the arr get created and stored once in memory
function heavyDuty1(){
    const arr = new Array(10000).fill('❤️')
    console.log('Created again!')
    return function(index){
        return arr[index]
    }
}
const hv = heavyDuty1()
hv(10)
hv(100)
hv(1000)

//Encapsulation, with closures we can restrict access to what a client is exposed to

const makeNuclearButton = function(){
    let peaceTimeToDestruction = 0
    const totalPeaceTime = () => peaceTimeToDestruction
    setInterval(()=> peaceTimeToDestruction++, 1000)
    const launch = ()=> {
        peaceTimeToDestruction = -1
        console.log('💣')
    }
    return {
        peaceTimeToDestruction: totalPeaceTime,
        launch: launch
    }
}
let button = makeNuclearButton()
console.log(button.peaceTimeToDestruction())
console.log(button.launch())