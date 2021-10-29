const range = document.getElementById("myRange");
const number = document.querySelector(".value");
const cost = document.getElementById("totalCost");
const resultDiv = document.querySelector(".results");
const submit = document.getElementById("submitBtn");
const reset = document.getElementById("resetBtn");

number.innerHTML = range.value + "%";

range.oninput = function() {
    number.innerHTML = this.value + "%";
}

submit.addEventListener("click", function() {
    let resultCost = document.getElementById("costTotal");
    let tipAmt = document.getElementById("tipAmount");
    let tipNum = document.getElementById("tipNumber");
    let endTotal = document.getElementById("newTotal");

    resultCost.innerHTML = cost.value + "$";
    tipAmt.innerHTML = range.value + "%";

    let total = parseFloat(cost.value);
    let tip = parseInt(range.value) / 100;
    let tipTotal = total * tip;
    let newTotal = total + tipTotal;

    tipNum.innerHTML = tipTotal.toFixed(2) + "$";
    endTotal.innerHTML = newTotal.toFixed(2) + "$";

    resultDiv.style.display = "block";
})

reset.addEventListener("click", function() {
    cost.value = "";
    range.value = 50;
    number.innerHTML = range.value + "%";

    resultDiv.style.display = "none";
})
