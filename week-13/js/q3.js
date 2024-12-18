let p = document.getElementsByTagName("p");
p[0].remove();

let start = document.createElement("div");
start.className = "start";
start.title = "Start Element";
start.textContent = "Start";
start.setAttribute("data-value", "Start");

let end = document.createElement("div");
end.className = "end";
end.title = "End Element";
end.textContent = "End";
end.setAttribute("data-value", "End");

let div = document.getElementsByTagName("div")[0];
div.before(start);
div.after(end);
