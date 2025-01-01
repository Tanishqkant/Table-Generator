// // problem 1

// let teaFlavors = ["green tea", "black tea", "oolong tea"];

// let firstTea = teaFlavors[0];

// // console.log(firstTea);

// // problem 2

// let cities = ["London", "Tokyo", "Paris", "New York"];

// let favoriteCity = cities[2];
// // console.log(favoriteCity);

// // problem 3

// let teaTypes = ["hearbel tea", "white tea", "masala chai"];

// teaTypes[1] = "Jasmine tea";

// // console.log(teaTypes);

// // Problem 4

// let citiesVisited = ["Mumbai", "Sydeny"];

// citiesVisited.push("Berlin");

// // console.log(citiesVisited);

// // problem 5

// let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];

// teaOrders.pop();
// // console.log(teaOrders);

// let lastOrder = teaOrders;
// // console.log(lastOrder);

// // problem 6

// let populartTeas = ["green tea", "oolong tea", "chai"];
// let softCopy = populartTeas;

// // populartTeas.pop(); (if the changes are made in the (popularteas) it will be reflectd in the (softcopy)
// // console.log(populartTeas);
// // console.log(softCopy);

// // problem 7
// // Hardcopy
// let topCities = ["Berlin", "Singapore", " New York"];
// let hardCopyCities = [...topCities];
// // let  hardCopyCities = topCities.slice()
// topCities.pop();

// //

// // problem 8

// let europeanCities = ["Paris", "Rome"];
// let asiaCities = [" Tokyo", "Bangkok"];

// // let worldCities = [europeanCities + asiaCities];
// let worldCities = europeanCities.concat(asiaCities);
// // console.log(worldCities);
// // console.log(typeof worldCities);

// // problem 9

// let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];
// // let menuLenght = teaMenu.length;
// // console.log(menuLenght);

// // problem 10
// let cityBucketList = ["Kyoto", "London", "cape town", "vancouver"];

// // let isLondonInList = cityBucketList.includes("London");
// // console.log(isLondonInList);

// let arr = [1, 2, 3, 4, 5];

// // arr.reverse();
// // console.log(arr);

// let arr1 = [1, 2, 3, 4];
// // console.log(arr.indexOf(3));

// self solving above
// problem 1
let teaFlavors = ["green tea", " black tea", " oolong tea"];
teaFlavors[0];
// let firstTea = teaFlavors[0];
// console.log(firstTea);

// problem 2
let cities = ["london", "tokyo", "paris", "new york"];
cities[2];
// let favoriteCity = cities[2];
// console.log(favoriteCity);

// problem 3
let teaTypes = ["hearbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

// problem 4
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// console.log(citiesVisited);

// problem 5
let teaOrders = ["chai", "iced tea", "matcha", "early grey"];
teaOrders.pop();
let lastOrder = teaOrders;
// console.log(lastOrder);

// problem 6
let populartTeas = ["green tea", "oolong tea", "chai"];
let softCopy = populartTeas;

// populartTeas.pop();
// console.log(populartTeas);
// console.log(softCopy);

// problem 7
let topCities = ["Berlin", "Singapore", "New York"];
let Hardcopy = [...topCities];
// console.log(Hardcopy);

// topCities.pop();
// console.log(topCities);
// Hardcopy.pop();
// console.log(Hardcopy);

// problem 8

let europeanCities = ["paris", "Rome"];
let asiaCities = ["Tokyo", "Bangkok"];

let worldCities = europeanCities.concat(asiaCities);
// console.log(typeof worldCities);
// console.log(worldCities);

// problem 9
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLenght = teaMenu.length;
// console.log(menuLenght);

// problem 10
let cityBucketList = ["kyoto", "London", "cape town", "Vancouver"];
if (cityBucketList.includes("london")) {
  console.log("true");
} else {
  console.log("no");
}
