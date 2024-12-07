console.log("");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// Solution 1
console.log(haystack.includes("JS") ? "Found" : "Not Found");

// Solution 2
if (haystack.lastIndexOf("JS") == -1) console.log("Not Found");
else console.log("Found");

// Solution 3
if (haystack.indexOf("JS") == -1) console.log("Not Found");
else console.log("Found");
