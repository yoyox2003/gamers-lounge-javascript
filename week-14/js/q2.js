function popup() {
    let div = document.createElement("div");
    let header = document.createElement("h2");
    let p = document.createElement("p");
    let btn = document.createElement("button");

    header.textContent = "Welcome";
    p.textContent = "Welcome To Elzero Web School";
    btn.textContent = "X";

    btn.onclick = function () {
        btn.parentElement.remove();
    };

    div.append(header);
    div.append(p);
    div.append(btn);
    document.body.append(div);
}

setTimeout(popup, 5000);
