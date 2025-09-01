let theName = "Elzero";

//1
console.log(theName.split(""));

//2
console.log(Array.from(theName));

//3
console.log(...theName);

//4
console.log([...theName].map((char) => char));

//5
console.log(...[new Set(theName)]);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
