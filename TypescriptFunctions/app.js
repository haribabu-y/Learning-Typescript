var fun;
fun = function (a, b) {
    return a + b;
};
var firstpara = document.getElementById("ffr");
firstpara.textContent = (fun(10, 20)).toString();
console.log(fun(10, 20));
fun = function (a, b, c) {
    return a + b + c;
};
var secondpara = document.getElementById("sfr");
secondpara.textContent = (fun(10, 20, 30)).toString();
console.log(fun(10, 20, 30));
fun = function (x, y) {
    return x.concat(y);
};
var sym = Symbol("hi");
console.log(fun('h', 'i'));
