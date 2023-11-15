//Cost and Tip variable declarations
const cost = document.getElementById("costInput");
const tip = document.getElementById("tipInput");

//Button variable declarations
const submit = document.getElementById("submitBtn");
const reset = document.getElementById("resetBtn");
const even = document.getElementById("evenBtn");

//Section 2 variable declaration
const wrapper2Div = document.querySelector(".wrapper2");

//Submit Button EventListener Function
//When the user hits "submit" the following procedures occur.
//1. Error checking to see if user entered correct values for
//   both cost and tip textboxes.
//2. General formatting of user input.
//3. Required calculations to get the correct tip number based
//   on entered percentage, and Final Total.
submit.addEventListener("click", function() {
    //Variable declarations to be used for calculations.
    let sub = document.getElementById("subTotal");
    let tipAmt = document.getElementById("tipAmount");
    let tipNum = document.getElementById("tipNumber");
    let endTotal = document.getElementById("newTotal");

    //Sets "make even" button able to be pressed/useable.
    even.disabled = false;

    //The error checking for the user
    //If the user enters a non-number, "abcde", an alert message will be displayed
    //and we will exit the function.
    if (isNaN(cost.value) || isNaN(tip.value)) {
        alert("Error: must input numbers only.");
        return false;
    }
    //If the user enters nothing for the cost textbox an alert message will be displayed
    //and we will exit the function.
    else if (cost.value === "" || cost.value <= 0) {
        alert("Error: please input a valid total cost.")
        return false;
    }
    //If the user enters nothing for the tip textbox an alert message will be displayed
    //and we will exit the function.
    else if (tip.value === "" || tip.value < 0) {
        alert("Error: please input a valid tip percentage.")
        return false;
    }

    //General formatting for cost and tip prompts.
    if (!cost.value.includes(".")) {
        sub.innerHTML = cost.value + ".00$";
    }
    else {
        sub.innerHTML = cost.value + "$";
    }

    //Will display the entered tip percentage in results section.
    tipAmt.innerHTML = "(" + tip.value + "%)";

    //General calculations to find the amount of tip money given and the resulting total
    //subtotal + tip money = final total
    let total = parseFloat(cost.value);
    let tipDecimal = parseInt(tip.value) / 100;
    let tipTotal = total * tipDecimal;
    let newTotal = total + tipTotal;

    tipNum.innerHTML = tipTotal.toFixed(2) + "$";
    endTotal.innerHTML = newTotal.toFixed(2) + "$";

    //Make Even Button EventListener Function
    //When pressed the previous calculations made beforehand will now
    //make the final total an "even" cost
    //ex) "12.78" --> "13.00"
    //ex) "8.04" --> "8.00"
    //This will alter the amount of tip money given and is accounted for and redisplayed as such.
    even.addEventListener("click", function() {
        let evenTotal = Math.round(newTotal);
        let remainder = evenTotal - newTotal;
        tipTotal = tipTotal + remainder;

        tipAmt.innerHTML = "(~" + tip.value + "%)";

        tipNum.innerHTML = tipTotal.toFixed(2) + "$";
        endTotal.innerHTML = evenTotal.toFixed(2) + "$";

        even.disabled = true;
    })

    //Makes the second section visible with all the information.
    wrapper2Div.style.display = "block";
})

//Reset Button EventListener Function
//Sets all values back to the original state of when first loading the page.
reset.addEventListener("click", function() {
    cost.value = "";
    tip.value = "";

    wrapper2Div.style.display = "none";

    even.disabled = false;
})