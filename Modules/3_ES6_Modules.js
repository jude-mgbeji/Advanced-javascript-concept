/**
 * In order to achieve modularity in JS without any of those initially discussed drawbacks of IIFE
 * JS invented it own way of handling modules natively without using commonJS or AMD or IIFE
 * It looks like this
 */
//to import a dependency
import module1 from 'module1'
import module2 from 'module2'

//to export an attribute or function, we just use the export keyword in front of it and it will be made
//available when it is imported into another another script

export function fight(){
    
}