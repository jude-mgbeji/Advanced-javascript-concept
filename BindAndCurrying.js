/**
 * the bind method can also be used for function currying
 * i.e partially supplying the required parameter of a function
 * Example
 */

function multiply(a, b) {
    console.log(a*b);
}

var multiplyByTen = multiply.bind(this, 10)

multiplyByTen(4);