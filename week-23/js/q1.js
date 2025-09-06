let req = new XMLHttpRequest();
req.open("GET", "articles.json");
req.send();
console.log(req);

req.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log("Date Loaded");

    // Parse the json file
    let articles = JSON.parse(this.responseText);
    console.log(articles);

    // Loop over the content
    for (let i = 0; i < articles.length; i++) {
      console.log(`Article ${i + 1}`);
      console.log(`ID: ${articles[i].id}`);
      console.log(`Title: ${articles[i].title}`);
      console.log(`Body: ${articles[i].body}`);
      console.log(`Category: ${articles[i].Category}`);
      console.log(`Author: ${articles[i].author}`);
      console.log("-------------------------------------------");
    }
  }
};
