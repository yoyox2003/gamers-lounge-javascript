console.log("");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let nums = numsAndStrings.filter((el) => {
    return typeof el == "number";
});

let newNums = nums.map((el) => {
    return -el;
});

console.log(newNums);
