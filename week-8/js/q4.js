console.log("");

function checkStatus(a, b, c) {
    let name;
    let age;
    let av = true;
    switch (typeof a) {
        case typeof 1:
            age = a;
            break;
        case typeof true:
            av = a;
            break;
        case typeof "s":
            name = a;
    }
    switch (typeof b) {
        case typeof 1:
            age = b;
            break;
        case typeof true:
            av = b;
            break;
        case typeof "s":
            name = b;
    }
    switch (typeof c) {
        case typeof 1:
            age = c;
            break;
        case typeof true:
            av = c;
            break;
        case typeof "s":
            name = c;
    }
    console.log(
        `Hello ${name}, Your Age Is ${age}, You Are ${
            av ? "" : "Not"
        } Available For Hire`
    );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
