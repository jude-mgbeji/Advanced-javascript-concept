//Using Object.create()
const elfFunctionStore = {
    attack(){
        console.log("Attacking with "+this.weapon)
    }
}

function createElf(name, weapon){
    let newElf = Object.create(elfFunctionStore)
    newElf.name = name
    newElf.weapon = weapon
    return newElf
}

let peter = createElf("peter", "knife")
console.log(peter.attack())
console.log(peter.name)

//using constructor function
function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function(){
    console.log("attack with "+this.weapon)
}

let sam = new Elf("sam", "cutlass")
console.log(sam.name)
console.log(sam.attack())

//Using ES6 Class
class Elf1 {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack(){
        console.log("attack with "+this.weapon) 
    }
}

let james = new Elf1("james", "stone")
console.log(james.name)
console.log(james.attack())