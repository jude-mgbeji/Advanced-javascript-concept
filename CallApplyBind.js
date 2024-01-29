/**
 * Call()
 * Calls a method of an object, substituting another object for the current object
 * the first argument is the object to be used as the current object
 * and then a comma separated list of method parameters/arguements
 * 
 * apply()
 * same as call(), difference is that, this takes in array of
 *  function parametters/arguements
 * 
 * call and apply are used when we want to boorow a methods from an 
 * object into another object
 * 
 * bind is used when we want to call a function later on with a certain
 * context or a certain this keyword
 * a bind function returns a function
 * Example
 */

const wizard = {
    name: "Merlin",
    health: 100,
    heal (num1, num2) {
        this.health = num1 + num2;
    }
}

const archer = {
    name: "Robin hood",
    health: 30
}

console.log(archer);

// wizard.heal.call(archer, 50, 30);

// wizard.heal.apply(archer, [50, 100]);

const archerHeal = wizard.heal.bind(archer, 100, 100);
archerHeal();


console.log(archer);

/**
 * bind()
 * An object to which the this keyword can refer inside the new function.
For a given function, creates a bound function that has the same body as the original function.
 The this object of the bound function is associated with the specified object,
  and has the specified initial parameters.
 */
