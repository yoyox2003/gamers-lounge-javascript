console.log("");

// I renamed the variables so that they don't conflict with the other files
let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (let i = start2; i > end2; i--) {
    if (i == start2) console.log(i);
    else console.log(`0${i}`);
    if (i == stop2) break;
}
