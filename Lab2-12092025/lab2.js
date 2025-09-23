// Student Name: Henrique Custodio
// Student ID: 101497015
// Date: Tuesday September 16th 2025

// Exercise 1
let greeter = (arr) => {
    for (let name of arr) {
        console.log(`Hello ${name}`);
    }

}
greeter(['John', 'Jane', 'Doe'], 3);

// Exercise 2
function capitalizeFirst(string) {
    const [ first, ...rest ] = string;
    return first.toUpperCase() + rest.join('');
}
console.log(capitalizeFirst('fooBar'));
console.log(capitalizeFirst('nodeJs'));

// Exercise 3
const colors = ['red', 'green', 'blue'];

let colorCapitalize = (arr) => {
    const colorReturn = arr.map(color => capitalizeFirst(color));
    return colorReturn;
}
console.log(colorCapitalize(colors));

// Exercise 4
var values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = arr => {    
    return arr.filter(arr => arr > 20);
}
console.log(filterLessThan20(values));

// Exercise 5
var arrEx = [1, 2, 3, 4];
const calculateSum = arr => arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);

const calculateProduct = arr => arr.reduce((acc, curr) => {
    return acc * curr;
}, 1);
console.log(calculateSum(arrEx));
console.log(calculateProduct(arrEx));

// Exercise 6
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    
    getName() {
        return this.name;
    }

    getYear() {
        return this.year;
    }

    setYear(newYear) {
        this.year = newYear;
    }

    setName(newName) {
        this.name = newName;
    }

    toString() {
        return `Model: ${this.name}, year: ${this.year}`;
    }

    details() {
        console.log(this.toString());
    }
}

class Sedan extends Car {
    constructor(name, year, balance) {
        super(name, year);
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }
    
    setBalance(newBalance) {
        this.balance = newBalance;
    }

    toString() {
        return `${super.toString()}, balance: ${this.balance}`;
    }

    info() {
        console.log(this.toString());
    }
}

let myCar = new Sedan('Toyota', 2020, 5000);
myCar.info();
myCar.setBalance(6000);
myCar.setYear(2021);
myCar.info();
console.log(`Car name is: ${myCar.getName()}`);
console.log(`Car year is: ${myCar.getYear()}`);
console.log(`Car balance is: ${myCar.getBalance()}`);
