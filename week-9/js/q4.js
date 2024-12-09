console.log("");

function specialMix(...data) {
    // Your Code Here
    let allStr = true;
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] == typeof 1) {
            allStr = false;
            sum += data[i];
        } else if (!isNaN(parseInt(data[i]))) {
            allStr = false;
            sum += parseInt(data[i]);
        }
    }
    return allStr ? "All Is Strings" : sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
