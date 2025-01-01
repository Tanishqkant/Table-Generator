// function sayMyname() {
//   console.log("h");
//   console.log("e");
//   console.log("r");
//   console.log("o");
//   console.log("1");
// }

// sayMyname();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }

// const result = addTwoNumbers(3, 5);

// console.log("result:", result);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("please enter valid id");
    return;
  }
  return `${username} just Logged In`;
}

// loginUserMessage("tanishq");
// let logged = loginUserMessage("tanishq");
// console.log(logged);

console.log(loginUserMessage());
