const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let {
  age: a4,
  working: w4,
  country: c4,
  hobbies: [h14, , h34],
} = member;
console.log(`My Age Is ${a4} And Iam ${w4 ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c4}`);
// I Live in Egypt

console.log(`My Hobbies: ${h14} And ${h34}`);
// My Hobbies: Reading And Programming
