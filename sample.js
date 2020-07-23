// Basic print statement

console.log("Basic program");

// Basic data types

const id = 1;
var name = "Praha";
var age = 29;
var email = "praha24@gmail.com";
var isDeveloper = true;

// Template String

console.log(
  `
    The name is : ${name}
    and his age is : ${age}
    His development status is : ${isDeveloper}
    `
);

// Function notations

function sayHelloEn() {
  console.log("Hello In English");
}

var sayHelloTn = function () {
  console.log("Hello In Tamil");
};

var sayHelloCh = () => {
  console.log("Hello In Chinese");
};

sayHelloCh();
sayHelloEn();
sayHelloTn();

// Arrays with all types
// Simple array

const numbers = new Array(1, 2, 3);
console.log(numbers);
const fruits = ["Apple", "Orange", "Banana"];
console.log(fruits[2]);
const random = [1, "Hello", true, null];
console.log(typeof random[4]);

//push, pop add-in-front, push-to-index

numbers[3] = 4;
console.log(numbers);

numbers.push(5);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

// Objects

const objs = {
  id: 1,
  name: "Sam",
  isMale: true,
};
console.log(objs);
console.log(objs.name);

// arrays in objects

const arrObj = {
  id: 1,
  name: "John",
  hobbies: ["singing", "dancing"],
};
console.log(arrObj);
console.log(arrObj.hobbies[0]);

// obj in obj

const obObjs = [
  {
    id: 1,
    name: "Hero",
  },
  {
    id: 2,
    name: "heroin",
  },
  {
    id: 3,
    name: "villain",
  },
];
console.log(obObjs);
console.log(obObjs[2].name);

const obObjsJSON = JSON.stringify(obObjs);
console.log(obObjsJSON);

// For Loop

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// ternary operators

const test = false;

test ? console.log("Test is true") : console.log("Test is false");

//Functions with this keyword

function Sample(firstname, lastname, dob) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.dob = new Date(dob);

  return `${firstname} ${lastname} ${dob}`;
}

Sample.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Sample.prototype.getFullName = function () {
  return `${this.firstname} ${this.lastname}`;
};

//Instantiation
const mini = new Sample("John", "Doe", "01-01-1991");

console.log(mini.getBirthYear());
console.log(mini.getFullName());

//Class

class Person {
  constructor(nameA, nameB, dob) {
    this.nameA = nameA;
    this.nameB = nameB;
    this.dob = new Date(dob);
  }

  getName() {
    return `The Full Name is: ${this.nameA} ${this.nameB}`;
  }

  getBirthMonth() {
    return `The Birth month is: ${this.dob.getDay()}`;
  }
}

const guy1 = new Person("Cristiano", "Ronaldo", "04-22-1976");
console.log(guy1.getName());
console.log(guy1.getBirthMonth());

//console.log(document.getElementsByClassName("container"));
//console.log(document.querySelector("div"));

//const ul = document.querySelector(".items");
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Changed Item";
// ul.children[1].innerText = "Brad";

const btn = document.querySelector("#btn");
//btn.style.background = "red";
// btn.addEventListener("mouseout", function message() {
//   alert("This is triggered by JS");
// });

console.log("Logic begins");

const formForm = document.querySelector(".my-form");
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const ul = document.querySelector(".items");

formForm.addEventListener("click", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (formName.value === "" || formEmail.value === "") {
    alert("Please Enter the details as requested");
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${formName.value} : ${formEmail.value}`)
    );
    ul.appendChild(li);

    formName.value = "";
    formEmail.value = "";
  }
}

console.log("Logic ends");
