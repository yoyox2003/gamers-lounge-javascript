let div = document.getElementById("d");

// This is question 3 and 4 and 5 combined
function count() {
    div.innerHTML -= 1;
    if (div.innerHTML == 0) {
        // location.href = "https://elzero.org/"; // this is for question 4
        window.open(
            "https://elzero.org/",
            "_blank",
            "width=400, height=500, left=200, top=80"
        );
        clearInterval(counter);
    }
}

let counter = setInterval(count, 1000);
