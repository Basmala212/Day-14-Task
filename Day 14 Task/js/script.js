"use strict";

            //  النص الاول 

// const container = document.getElementById("container");
// const addBtn = document.getElementById("addBoxBtn");
// const removeBtn = document.getElementById("removeBoxBtn");

// addBtn.addEventListener("click", () => {
//   const box = document.createElement("div");
//   box.textContent = "A new element has been created.";

//   // Mouse over event
//   box.addEventListener("mouseover", () => {
//     console.log("Mouse is over the element.");
//   });

//   // Double click event
//   box.addEventListener("dblclick", () => {
//     alert("Element was double-clicked!");
//   });

//   // Click event
//   box.addEventListener("click", () => {
//     box.textContent = "You clicked the element.";
//   });

//   container.appendChild(box);
// });

// removeBtn.addEventListener("click", () => {
//   if (container.lastChild) {
//     container.removeChild(container.lastChild);
//   }
// });

// =>>>>>--------------------------------------------------------------------------------=>>>>>

            //  النص التاني


//  Create Element and Add EventListeners
document.getElementById("createBtn").addEventListener("click", function () {
  let card = document.createElement("div");
  card.className = "card";
  card.id = "card1";
  let text = document.createTextNode("This is a dynamic card!");
  card.appendChild(text);

  card.addEventListener("mouseenter", function () {
    card.style.backgroundColor = "lightblue";
  });

  card.addEventListener("mouseleave", function () {
    card.style.backgroundColor = "white";
  });

  document.body.appendChild(card);
});

//  Remove Element
document.getElementById("removeBtn").addEventListener("click", function (){
  let card = document.getElementById("card1");
  if (card) card.remove();
});

//  ClassList Methods
let title = document.createElement("h2");
title.textContent = "JS ClassList Example";
document.body.appendChild(title);

title.classList.add("highlight", "centered");
title.classList.remove("highlight");
title.classList.replace("centered", "left-aligned");
console.log(title.classList.contains("left-aligned"));

//  Strict Mode and Scope
function testScope() {
  let x = 5;
  console.log("x inside function:", x);
}
testScope();

//  var / let / const differences
var globalVar = "I am var";
if (true) {
  let blockLet = "I am let";
  const blockConst = "I am const";
  console.log(blockLet, blockConst);
}
console.log(globalVar);

//  Default Parameters + Template Literals
function greet(name = "Guest", age = "??") {
  console.log(`Welcome ${name}, your age is ${age}.`);
}
greet("Mona", 22);
greet();

//  Spread & Rest
let numbers = [1, 2, 3];
let moreNumbers = [0, ...numbers, 4];
console.log("Spread:", moreNumbers);

function sumAll(...nums) {
  console.log("Rest:", nums.reduce((acc, val) => acc + val));
}
sumAll(5, 10, 15);

//  Destructuring
let student = {
  name: "basmala",
  age: 21,
  grades: { math: 90, english: 85 }
};
let { name, grades: { math } } = student;
console.log(name, math);

let colors = ["red", "green", "blue"];
let [firstColor, , thirdColor] = colors;
console.log(firstColor, thirdColor);

//  this + arrow / regular
let btn = document.createElement("button");
btn.textContent = "Test this";
document.body.appendChild(btn);

btn.addEventListener("click", function (){
  console.log("Regular function:", this);
});
btn.addEventListener("click", () =>{
  console.log("Arrow function:", this);
});

//  for...of / for...in
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) console.log("for of:", fruit);

let car = { brand: "Toyota", model: "Corolla", year: 2022 };
for (let key in car) console.log(`for in: ${key} = ${car[key]}`);

//  map / filter / find / findIndex
let users = [
  { name: "Sara", age: 19 },
  { name: "Ali", age: 25 },
  { name: "Nada", age: 22 },
  { name: "Ali", age: 30 }
];

let names = users.map(user => user.name);
console.log("map:", names);

let adults = users.filter(user => user.age >= 21);
console.log("filter:", adults);

let aliUser = users.find(user => user.name === "Ali");
console.log("find:", aliUser);

let aliIndex = users.findIndex(user => user.name === "Ali");
console.log("findIndex:", aliIndex);
 