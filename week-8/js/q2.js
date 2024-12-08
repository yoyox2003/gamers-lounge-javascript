console.log("");

function calculate(firstnum, secondnum, operation = "add") {
    if (secondnum == undefined) console.log("Second Number Not Found");
    else if (operation == "add") console.log(firstnum + secondnum);
    else if (operation == "subtract") console.log(firstnum - secondnum);
    else if (operation == "multiply") console.log(firstnum * secondnum);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
