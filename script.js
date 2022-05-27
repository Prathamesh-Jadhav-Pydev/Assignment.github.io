var number = document.querySelector("input");
var vals = document.querySelector("#vals");
var values = []
function addValue() {
    if (!isNaN(number.value)) {
        values.push(Number(number.value));
        number.value = "";
        number.focus();
    }
    vals.innerHTML = "values = [" + values.toString() + "]";
    mean.innerHTML = "mean = " + getMean(values).toFixed(2).toString();
    median.innerHTML = "median = " + getMedian(values).toString();
    mode.innerHTML = "mode = " + getMode(values).toString();
}
const getMean = ((values) => values.reduce((a, i) => a + i) / values.length);

const getMedian = ((values) => values.length % 2 ? odd(values) : even(values));

const odd = ((arr) => {
    var half = Math.floor((arr.length + 1) / 2) - 1;
    var sorted = arr.sort();
    return sorted[half];
});

const even = ((arr) => {
    var half = Math.floor((arr.length) / 2);
    return (arr.sort()[half - 1] + arr.sort()[half]) / 2;
});

const getMode = (values) => (new Set(values)).size === values.length ? "No value" :
    values.reduce((acc, n, i, arr) => (arr.filter(v => v === acc).length >= arr.filter(v => v === n).length ? acc : n))

//==========================================================================   
// Logic of Fibonacci Series
var Fibonacci_Series = [];
let counter = 10;
function fibonacci_series() {
    var n1 = Number(document.getElementById("txtloop").value);
    var n2 = n1 + 1;
    document.getElementById("txtloop").value = "";
    nextTerm = 0;
    for (var i = 1; i <= counter; i++) {
        Fibonacci_Series.push(Number(n1));
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    output.innerHTML = "Fibonacci_Series = [" + Fibonacci_Series.toString() + "]";
}
function clearArray() {
    Fibonacci_Series = [];
}

