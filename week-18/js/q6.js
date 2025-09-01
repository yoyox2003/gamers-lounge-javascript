let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

//// If chosen === 1
if (chosen == 1) {
  let [{ title, age, available, skills }, ,] = myFriends;
  console.log(`${title}, ${age}, ${available}, ${skills}`);
} else if (chosen == 2) {
  let [, { title, age, available, skills }] = myFriends;
  console.log(`${title}, ${age}, ${available}, ${skills}`);
} else if (chosen == 3) {
  let [, , { title, age, available, skills }] = myFriends;
  console.log(`${title}, ${age}, ${available}, ${skills}`);
}
// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"
