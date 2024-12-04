console.log("");

let num_1 = 10;
let num_2 = 30;
let num_3 = "30";

if (num_3 > num_1 && typeof num_3 != typeof num_2) {
    console.log(
        "30 Is Larger Than 10 And Type string Not The Same Type As number"
    );
}

if (num_3 > num_1 && num_3 == num_2 && typeof num_3 != typeof num_2) {
    console.log(
        "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    );
}

if (num_3 !== num_1 && typeof num_3 != typeof num_2) {
    console.log(
        "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
    );
}
