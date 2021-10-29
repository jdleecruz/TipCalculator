const range = document.getElementById("myRange");
const number = document.querySelector(".value");
const cost = document.getElementById("totalCost");

const resultDiv = document.querySelector(".results");
const evenDiv = document.querySelector(".even");

const submit = document.getElementById("submitBtn");
const reset = document.getElementById("resetBtn");
const even = document.getElementById("evenBtn");

number.innerHTML = range.value + "%";

range.oninput = function() {
    number.innerHTML = this.value + "%";
}

submit.addEventListener("click", function() {
    let resultCost = document.getElementById("costTotal");
    let tipAmt = document.getElementById("tipAmount");
    let tipNum = document.getElementById("tipNumber");
    let endTotal = document.getElementById("newTotal");

    even.disabled = false;

    if (isNaN(cost.value)) {
        alert("Error: must input numbers only.");
        return false;
    }
    else if (cost.value === "") {
        alert("Error: please input a total cost.")
        return false;
    }

    if (!cost.value.includes(".")) {
        resultCost.innerHTML = cost.value + ".00$";
    }
    else {
        resultCost.innerHTML = cost.value + "$";
    }

    tipAmt.innerHTML = "(" + range.value + "%)";

    let total = parseFloat(cost.value);
    let tip = parseInt(range.value) / 100;
    let tipTotal = total * tip;
    let newTotal = total + tipTotal;

    tipNum.innerHTML = tipTotal.toFixed(2) + "$";
    endTotal.innerHTML = newTotal.toFixed(2) + "$";

    even.addEventListener("click", function() {
        let evenTotal = Math.round(newTotal);
        let remainder = evenTotal - newTotal;
        tipTotal = tipTotal + remainder;

        tipAmt.innerHTML = "(~" + range.value + "%)";

        tipNum.innerHTML = tipTotal.toFixed(2) + "$";
        endTotal.innerHTML = evenTotal.toFixed(2) + "$";

        even.disabled = true;
    })

    resultDiv.style.display = "block";
    evenDiv.style.display = "block";
})

reset.addEventListener("click", function() {
    cost.value = "";
    range.value = 50;
    number.innerHTML = range.value + "%";

    resultDiv.style.display = "none";
    evenDiv.style.display = "none";

    even.disabled = false;
})
