// let obj = {
//   cpu: 12,
//   brand: ["lenovo", "loq", "legion"],
// };

// let lenovo = {
//   screen: "hd",
//   __proto__: obj,
// };

// let tomHardware = {
//   name: "tanishq",
//   __proto__: obj,
// };

// console.log(`TomHardware`, tomHardware.__proto__);

let genericCar = {
  tyers: 4,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`genericCAR`, Object.getPrototypeOf(tesla));
