/**
 * Using IIFE to handle modularity in JS javascript does not really solve the problem of
 * clashing variables in the global scope[it only reduced it]
 * Also, there is also a dependency problem, such that we dont know what is needed in the IIFE as a 
 * depency so that we can orderly import to those dependency
 */

/**
 * The above problems of IIFE was solved with the introduction of CommonJS, AMD and UMD
 * 
 */

//CommonJS -- HEelps us handle dependency import into a js file and also can also export 
// certain attribute and behaviours in a JS file

var module1 = require("moduele1")
var module2 = require("moduele2")

function fight(){

}

module.exporta = {
    fight: fight
}