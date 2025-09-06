// Build connection using xmlhttp and promise
let getArticles = (apiLink) => {
  return new Promise((res, rej) => {
    let request = new XMLHttpRequest();
    // when loading a request check if its opened or has data
    request.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        res(JSON.parse(this.responseText));
      } else {
        rej(Error("No Data found"));
      }
    };

    request.open("GET", apiLink);
    request.send();
  });
};

getArticles("articles.json")
  .then((articles) => {
    articles.length = 5;
    return articles;
  })
  .then((articles) => {
    for (let i = 0; i < articles.length; i++) {
      let div = document.createElement("div");
      let header = document.createElement("h3");
      let p = document.createElement("p");

      header.innerHTML = articles[i].title;
      p.innerHTML = articles[i].description;
      div.append(header);
      div.append(p);

      document.body.appendChild(div);
    }
    console.log(articles);
  });
