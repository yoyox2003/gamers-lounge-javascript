console.log("");

function multiply(...nums) {
    let ans = 1;
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] == typeof "") continue;
        ans *= Math.trunc(nums[i]);
    }
    console.log(ans);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
