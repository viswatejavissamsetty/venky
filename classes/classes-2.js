class Pet {
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Pet{
    constructor(name){
        super(name);
    }
}

class Cat extends Pet {
    constructor(name){
        super(name);
    }

    eat() {
        console.log(`your cant ${this.name} is eating`);
    }
}

const dog = new Dog("kiddy");
const cat = new Cat("kitty");

dog.eat();
cat.eat();