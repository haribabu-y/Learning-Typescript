function addValue() {
    var resultElement = document.getElementById("result");
    var value1 = document.getElementById("value1");
    var value2 = document.getElementById("value2");
    // Ensure we correctly convert values to numbers before addition
    var res = addTheValues(Number(value1.value), Number(value2.value));
    console.log(res);
    resultElement.textContent = res.toString(); // Convert number to string for display
    return false;
}
function addTheValues(value1, value2) {
    return value1 + value2;
}
