/**
 * There are 7 data types in javascript
 * 1. number
 * 2. String
 * 3. boolean
 * 4. undefined [absence of a definition]
 * 5. Null [] [absense of value]
 * 6. Symbol
 * 7. Objects
 * 
 * type 1-6 are called prmitive types
 * type 7 is called the non-premitive type
 * 
 * NB: Arrays and functions are objects
 * 
 * NB: type of null returns an Object, this is a JS known fault
 */

console.log(typeof 5)
console.log(typeof "I am")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof Symbol("jj"))
console.log(typeof {})
console.log('>>>>>>>>>>>>>>>> typeof Ends')
/**
 *  * 
 * Objects are passed by reference in memory
 * Premitives are passed by value
 */

var a = 5;

//simply just copies the value of a which is 5 into b
var b = a;

b++;
console.log(a);
console.log(b);
console.log('>>>>>>>>>>>>>>>> parse by value Ends')

//in memory, obj contains pointer/reference/address to the object
var obj = {
    name: 'jaydee',
    password: '123'
}

//in memery, obj2 is assigned the pointer/ref/address of the same object as obj
var obj2 = obj;

obj2.password = 'hjdhjdhjwdhk';

console.log(obj);
console.log(obj2);
console.log('>>>>>>>>>>>>>>>> pass by reference Ends')

//if u don't want the object to point to the same address in memory, then
//shallow cloning
var obj3 = Object.assign({}, obj);
//or
var obj4 = {...obj};

obj3.password = 'hhhhh';
obj4.password = 'ggggg';


console.log(obj);
console.log(obj3);
console.log(obj4);
console.log('>>>>>>>>>>>>>>>> shallow cloning Ends')

/**
 * if the object conatains an object or an heirachy of objects, then shallow cloning
 * will not get to the inner objects
 */

var obj5 =  {
    name: 'jaydee',
    password: '123',
    address: {
        state: 'oyo',
        country: 'naija'
    }
}

var obj6 = {...obj5};
obj6.address.state = 'lagos';

console.log(obj5);
console.log(obj6);

//to deep clone use JSON

var obj7 = JSON.parse(JSON.stringify(obj5));
obj7.address.state = 'Texas';

console.log(obj5);
console.log(obj7);
console.log('>>>>>>>>>>>>>>>> deep cloning Ends')

