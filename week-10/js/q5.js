console.log("");

let nums5 = [2, 12, 11, 5, 10, 1, 99];

// 500
let ans = nums5.reduce((acc, el) => {
    return el % 2 == 0 ? acc * el : acc + el;
}, 1);

console.log(ans);
