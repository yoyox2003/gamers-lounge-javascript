console.log("");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

words.shift();
words.shift();
console.log(words[0][0].slice(2).toUpperCase()); // ZERO
