// example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let changetext = document.getElementById("myParagraph");
    changetext.innerHTML = "ho gaya change";
  });

// example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//   example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffe = document.getElementById("coffeeOrder");
  coffe.firstElementChild.innerHTML = "Macha";
});

// example 4(need to practice more)
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.innerHTML = "eggs";
  let shoppingList = document.getElementById("shoppingList");
  shoppingList.appendChild(newItem);
});

// example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });
