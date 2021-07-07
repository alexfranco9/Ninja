class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Hello I am ${this.name} Ninja!`);
    }
    showStats() {
        console.log("********|Ninja Stats|************");
        console.log(`Name:     ${this.name}`);
        console.log(`Health:   ${this.health}`);
        console.log(`Speed:    ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        
    }
    dinkSake() {
        this.health += 10;
        console.log(`Ninja ${this.name} heals to ${this.health}`)
    }
}

const James = new Ninja("James", 100);
const John = new Ninja("John", 100);
const Ralph = new Ninja("Ralph", 100);

James.sayName();
James.showStats();
James.dinkSake();

