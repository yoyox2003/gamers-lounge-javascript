let inputs = document.getElementsByTagName("input");
let selectBox = document.getElementById("jobs");

inputs[0].value = window.localStorage.getItem("name");
inputs[1].value = window.localStorage.getItem("age");
inputs[2].value = window.localStorage.getItem("phone");
selectBox.value = window.localStorage.getItem("job");

inputs[0].oninput = () => {
    window.localStorage.setItem("name", inputs[0].value);
};
inputs[1].oninput = () => {
    window.localStorage.setItem("age", inputs[1].value);
};
inputs[2].oninput = () => {
    window.localStorage.setItem("phone", inputs[2].value);
};
selectBox.onchange = () => {
    window.localStorage.setItem("job", selectBox.value);
};
