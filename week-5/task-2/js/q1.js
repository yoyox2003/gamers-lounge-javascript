// Test Case 1
let a = 9; // "009"
if (a < 10) {
    console.log(`00${a}`);
} else if (a > 10 && a < 100) {
    console.log(`0${a}`);
} else {
    console.log(a);
}

// Test Case 2
let b = 20; // "020"
if (b < 10) {
    console.log(`00${b}`);
} else if (b > 10 && b < 100) {
    console.log(`0${b}`);
} else {
    console.log(b);
}

// Test Case 3
let c = 110; // "110"
if (c < 10) {
    console.log(`00${c}`);
} else if (c > 10 && c < 100) {
    console.log(`0${c}`);
} else {
    console.log(c);
}
