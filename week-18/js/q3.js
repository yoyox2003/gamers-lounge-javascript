let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let arr = [...arr1, ...arr2, ...arr3];
// Write Your Destructuring Assignment Here
let [c3, , , , , , , a3, b3] = arr;

console.log(`My Best Friends: ${a3}, ${b3}, ${c3}`);

// My Best Friends: Shady, Mahmoud, Ahmed
