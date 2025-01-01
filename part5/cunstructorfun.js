// function greet() {
//   return "help me to learn code";
// }

// console.log(greet());

function person(name, age) {
  //    let  myName = name
  this.name = name;
  this.age = age;
}

function car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new car("ferrari", "9c");
// console.log(myCar);

let myNewCar = new car("Tata", "safari");
// console.log(myNewCar);

function tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}

let teaType = new tea("Masala chai");
// console.log(teaType.describe());

// function Animal(species) {
//   this.species = species;
// }

// Animal.prototype.sound = function () {
//   return `${this.species} makes a sound`;
// };

// let lion = new Animal("Cat");
// console.log(lion.sound());

function tea(tea) {
  this.tea = tea;
}
