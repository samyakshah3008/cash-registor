// linking from html world to javascript world
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#nextBtn");
const cashGivenSection = document.querySelector('.cash-given-section')
const notesSection = document.querySelector('.notes-section')

// Total available notes stored in array
const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

// adding event listener to button

checkButton.addEventListener("click", function validateBillAndCashAmount() {

    hideMessage();
    
      if (Number(billAmount.value) > 0) { 
        
             if (Number(cashGiven.value) >= Number(billAmount.value)) { 
                  const amountToBeReturned = cashGiven.value - billAmount.value; 
                  notesSection.style.display = 'block' 
                  // calling calculateChange function  which is core processing part
                  calculateChange(amountToBeReturned); 
           } else {
                    // calling showMessage function to show output to client
                  showMessage("Cash amount given should be greater than or equal to bill amount")
            }

    } else {
                // calling showMessage function to show output to client
            showMessage("Invalid bill amount");
    }
});

// adding event listener to next button

 nextButton.addEventListener("click",  ()=> {

      if (billAmount.value > 0){
              cashGivenSection.style.display = 'block'
              message.innerText = ""   
    } else {
              showMessage("Invalid value") // calling a showMessage function
              cashGivenSection.style.display = 'none'   
              notesSection.style.display = 'none'     
            }
       
 });

// core processing behind this project

function calculateChange(amountToBeReturned) {
    
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]); 
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

// function for showing or hiding output to client
function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}