const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#nextBtn");
const cashGivenSection = document.querySelector('.cash-given-section')
const notesSection = document.querySelector('.notes-section')


const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

//checkButton.addEventListener("click", () => console.log("Clicked!"))
console.log(message)
checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    console.log(billAmount.value)
    if (billAmount.value > 0) { // eg bill amt = 12
        if (cashGiven.value >= billAmount.value) { // 2022>12 => true
            const amountToBeReturned = cashGiven.value - billAmount.value; //2010
            calculateChange(amountToBeReturned);
        }
        
        
        else {
            showMessage(
                "Get ready to wash plates"
            )
        }

    } else {
        showMessage("Invalid bill amount");
    }
});

nextButton.addEventListener("click", function showCashAmountAmount() {
    cashGivenSection.style.display = 'block'   
});

checkButton.addEventListener("click", function showTable() {
    notesSection.style.display = 'block'
});





function calculateChange(amountToBeReturned) {
    //go over all the available
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]); //2010 / 2000 = 1 ||  10/500 = 0
         //amount left after claculating the number of notes needed
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        // amountToBeReturned %= availableNotes[i];
        //updating the no of notes in the table
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}