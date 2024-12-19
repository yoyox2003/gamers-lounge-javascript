let fontBox = document.getElementById("fonts");
let colorBox = document.getElementById("color");
let sizeBox = document.getElementById("font-size");

// Adding font sizes to select box
for (let i = 16; i <= 30; i++) {
    let sizeOpt = document.createElement("option");
    sizeOpt.value = i + "px";
    sizeOpt.textContent = i;
    sizeBox.append(sizeOpt);
}

let test = document.getElementById("Test");
test.style.fontFamily = window.localStorage.getItem("font");
test.style.color = window.localStorage.getItem("color");
test.style.fontSize = window.localStorage.getItem("size");

fontBox.value = window.localStorage.getItem("font");
colorBox.value = window.localStorage.getItem("color");
sizeBox.value = window.localStorage.getItem("size");

fontBox.onchange = () => {
    window.localStorage.setItem("font", fontBox.value);
    test.style.fontFamily = window.localStorage.getItem("font");
};

colorBox.onchange = () => {
    window.localStorage.setItem("color", colorBox.value);
    test.style.color = window.localStorage.getItem("color");
};

sizeBox.onchange = () => {
    window.localStorage.setItem("size", sizeBox.value);
    test.style.fontSize = window.localStorage.getItem("size");
};
