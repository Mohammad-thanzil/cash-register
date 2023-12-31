const billAmount =  document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-messege");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    const billAmountValue = parseFloat(billAmount.value);
    const cashGivenValue = parseFloat(cashGiven.value);

    if (billAmountValue <= 0 || isNaN(billAmountValue)) {
        showMessage("Invalid Bill Amount");
    } else if (cashGivenValue <= 0 || isNaN(cashGivenValue)) {
        showMessage("Invalid Cash Given");
    } else if (cashGivenValue < billAmountValue) {
        showMessage("Give the balance amount BSDK.");
    } else {
        const amountToBeReturned = cashGivenValue - billAmountValue;
        calculateChange(amountToBeReturned);
    }
});


function calculateChange(amountToBeReturned){
    // go over all the available
    for (let i = 0; i < availableNotes.length; i++ ){
        // no of notes need for the denomination
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        // amount left after calculating the number of notes needed
        amountToBeReturned = amountToBeReturned % availableNotes[i];
    
    
        //Updating the no of notes in the lable for the current amount   
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";

}
function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}



