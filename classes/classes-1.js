class Calculator {
    constructor(x, y) {
        // public
        this.x = x;
        // public
        this.y = y;
        // private
        this.#z = 10;
    }

    // public
    add() {
        return this.x + this.y;
    }

    // public
    sub() {
        return this.x - this.y;
    }

    // private
    #mul() {
        return this.x * this.y;
    }
}

const calc = new Calculator(10, 20);
console.log(calc.add())
calc;