const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#nextBtn");
const cashGivenSection = document.querySelector('.cash-given-section')
const notesSection = document.querySelector('.notes-section')


const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

checkButton.addEventListener("click", () => console.log("Clicked!"))

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    
    if (billAmount.value > 0) { 
        
        console.log(billAmount.value) 
        if (cashGiven.value >= billAmount.value) { 
            const amountToBeReturned = cashGiven.value - billAmount.value; 
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

 nextButton.addEventListener("click",  ()=> {
    if (billAmount.value > 0){
        cashGivenSection.style.display = 'block'
        message.innerText = ""   

    } else{
        showMessage("Invalid value")
        cashGivenSection.style.display = 'none'   
        notesSection.style.display = 'none' 
        

        
    }
       
 });

checkButton.addEventListener("click", ()=> {
    
    if (cashGiven.value > 0){
         
        message.innerText = "" 
        
        if(cashGiven.value >= billAmount.value) {
            notesSection.style.display = 'block'
            const amountToBeReturned = cashGiven.value - billAmount.value; 
            calculateChange(amountToBeReturned);
            
        } else {
            showMessage("")
        }

    } 
    
    else{
        notesSection.style.display = 'none';
    
  

        
    }
});

function calculateChange(amountToBeReturned) {
    
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]); 
        
        amountToBeReturned = amountToBeReturned % availableNotes[i];
       
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