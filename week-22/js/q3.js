let dateNow3 = new Date();

dateNow3.setMonth(dateNow3.getMonth(), -1);
console.log(dateNow3);

let month3;
switch (dateNow3.getMonth()) {
  case 0:
    month3 = "January";
    break;
  case 1:
    month3 = "Feb";
    break;
  case 2:
    month3 = "march";
    break;
  case 3:
    month3 = "April";
    break;
  case 4:
    month3 = "May";
    break;
  case 5:
    month3 = "June";
    break;
  case 6:
    month3 = "July";
    break;
  case 7:
    month3 = "August";
    break;
  case 8:
    month3 = "Sept";
    break;
  case 9:
    month3 = "Oct";
    break;
  case 10:
    month3 = "Nov";
    break;
  case 11:
    month3 = "December";
    break;
}

console.log(`Previous Month Is ${month3} And Last day is ${dateNow3.getDate()}`);
