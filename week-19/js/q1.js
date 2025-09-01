let ip1 = "2001:db8:3333:4444:5555:6666:7777:8888";

let re1 = /(\w{0,4}:?){8}/i;

console.log(ip1.match(re1));
