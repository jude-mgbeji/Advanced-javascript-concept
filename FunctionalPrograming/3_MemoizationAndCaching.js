/**
 * Memoization is simply caching the return value of a function to reduce run time and efficiency
 * Exanple
 */

let cacche = {}

function memoizedAdd80(n){
    if(n in cacche){
        return cacche[n]
    }else{
        console.log("compute first time")
        cacche[n] = n + 80
        return cacche[n]
    }
}

console.log("1 "+ memoizedAdd80(10))
console.log("2 "+ memoizedAdd80(10))
console.log("3 "+ memoizedAdd80(10))
console.log("1 "+ memoizedAdd80(3))

/**
 * in order to optimise, we can use closures. So that the cache is not stored in the global scope
 */

function memoizedWithClosuresAdd80(){
    let cacche = {}
    return function(n){
        if(n in cacche){
            return cacche[n]
        }else{
            console.log("compute first time")
            cacche[n] = n + 80
            return cacche[n]
        }
    }
}
const colosureAdd80 = memoizedWithClosuresAdd80()
console.log("1 "+ colosureAdd80(4))
console.log("2 "+ colosureAdd80(4))
console.log("3 "+ colosureAdd80(4))
console.log("1 "+ colosureAdd80(3))

