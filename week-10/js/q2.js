console.log("");

let myString = "EElllzzzzzzzeroo";

// Elzero
let letters = myString.split("").filter((el, ind, arr) => {
    return el != arr[ind - 1];
});

console.log(letters.join(""));
