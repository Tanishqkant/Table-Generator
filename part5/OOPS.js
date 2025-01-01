// let car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   start: function () {
//     return `${this.make} car got started in ${this.year}`;
//   },
// };

// // console.log(car.start());

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let john = new Person("john", 20);
// // console.log(john.name);

// function Animal(type) {
//   this.type = type;
// }

// Animal.prototype.speak = function () {
//   return `${this.type} makes a sound`;
// };

// Array.prototype.tanishq = function () {
//   return `Custom method ${this}`;
// };

// let myArray = [1, 2, 3];
// console.log(myArray.tanishq());
// let myNewArray = [1, 2, 3, 9, 89, 0];
// console.log(myNewArray.tanishq());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.make} in year ${this.model}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : this is an inheritance ${this.model}`;
  }
}

let myCar = new Car("Tata", "safari");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Hundai", "Creata");
// console.log(vehOne.make);
// console.log(vehOne.model);

// Encapsulation

class bankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new bankAccount();

// console.log(account.getBalance());

// Abstraction

class CoffeMachine {
  start() {
    return `Starting the machine...`;
  }
  brewcoffee() {
    return `brewing coffee`;
  }

  pressButton() {
    let msg1 = this.start();
    let msg2 = this.brewcoffee();
    return `${msg1} \n ${msg2}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());

// console.log(myMachine.brewcoffee());

// Polymorphism

class Bird {
  fly() {
    return ` Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

//  static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

// console.log(Calculator.add(2, 3));

// Getters and Setters

class Emp {
  #salary;
  constructor(name, Salary) {
    if (Salary < 0) {
      throw new Error("Salary in negative");
    }
    this.name = name;
    this.#salary = Salary;
  }

  get salary() {
    return `you are not allowed`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Emp("tanisq", 7000000);
console.log(emp._salary);

emp.salary = 7999909;
