let pMsg = prompt("Print number from - to");

pMsg = pMsg.split("-");
for (let i = 0; i < pMsg.length; i++) {
    pMsg[i] = +pMsg[i].trim();
}

let start = pMsg[0] < pMsg[1] ? pMsg[0] : pMsg[1];
let end = pMsg[0] > pMsg[1] ? pMsg[0] : pMsg[1];

for (let i = start; i <= end; i++) {
    console.log(i);
}
