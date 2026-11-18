class Temperature {
    constructor(celcius){
        this.celcius = celcius
    }

    get c() {
        return `Hello, your temperature is ${this._celcius}`
    }

    set c(value) {
        if (!Number.isFinite(value)) throw new Error('The value must be a number!')
        this._celcius = value + 3
    }
}

const temperature = new Temperature(12)
temperature.c = 3
console.log(temperature.c)

temperature.c = 4
console.log(temperature.c)
console.log("I have added a new line.")