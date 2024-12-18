let curr = document.querySelector('[title="Current"]');
let C_list = curr.classList;

let inp = document.getElementsByTagName("input");

// Add function
let add = inp[0];
add.onblur = function () {
    if (add.value != "") {
        let newClasses = add.value.toLowerCase().split(" ");
        newClasses.forEach((el) => {
            C_list.add(el);
        });
        add.value = "";
        show(C_list);
    }
};

// Remove function
let rem = inp[1];
rem.onblur = function () {
    if (rem.value != "") {
        let newClasses = rem.value.toLowerCase().split(" ");
        newClasses.forEach((el) => {
            C_list.remove(el);
        });
        rem.value = "";
        show(C_list);
    }
};

function show(list) {
    let div = document.querySelector(".assign .classes-list div");
    div.innerHTML = "";
    let classes = list;

    classes.forEach((el) => {
        let span = document.createElement("span");
        span.textContent = el;
        div.appendChild(span);
    });
}
show(C_list);
