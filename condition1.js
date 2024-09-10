// const person = {fname:"John", lname:"Doe", age:25};

// let text = " ";
// for (let x in person) {
//     // console.log(person);
//  text = text + " " + person[x];
// }
// console.log(text);

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x;
// }

// console.log(text);

// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }

//   do {
//     text += "The number is " + i;
//     i++;
//   }
//   while (i < 10);

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";

// for (;cars[i];) {
//   text += cars[i];
//   i++;
// }


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}