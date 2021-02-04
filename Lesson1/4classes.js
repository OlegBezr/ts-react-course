class Animal {
    #secret;

    constructor(speed, health) {
        this.speed = speed;
        this.health = health;
        this.#secret = speed - 5;
    }

    getStrength() {
        return this.speed * this.health;
    }

    #privateMethod() {
        return this.#secret;
    }
}

let animal = new Animal(10, 10);
console.log(animal.getStrength());
// console.log(animal.#secret);
// console.log(animal.#privateMethod());


class Fish extends Animal {
    makeNoise() {
        console.log('bul bul bul');
    }
}

let fish = new Fish(5, 7);
console.log(fish.getStrength());
fish.makeNoise();