class Character {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack(){
        console.log("attack with "+this.weapon) 
    }
}

class Elf extends Character {
    constructor(name, weapon, type){
        super(name, weapon);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, colour){
        super(name, weapon);
        this.colour = colour;
    }
    makefort(){
        return "I have the strongest fort";
    }
}

const dolby = new Ogre("dolby", "cloth", "black")
dolby.attack()