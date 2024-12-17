let currency = document.querySelector('[name = "dollar"]');
let result = document.getElementsByClassName("result")[0];
let text = document.createTextNode("{0} USD Dollar = {0} Egyptian Pound");

let currencyValue = currency.value;
currency.onclick = function () {
    currencyValue = currency.value;
    result.textContent = `{${currencyValue}} USD Dollar = {${(
        currencyValue * 49.3
    ).toFixed(2)}} Egyptian Pound`;
};
