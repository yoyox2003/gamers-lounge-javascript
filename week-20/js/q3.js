let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let map3 = new Map(Object.entries(myInfo));

console.log(map3);
console.log(map3.size);
console.log(map3.has("role"));
