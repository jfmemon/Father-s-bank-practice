// get input value for deposit and withdraw
function getInputValue(inputId) {
    const currentInput = document.getElementById(inputId);
    const currentInputValueText = currentInput.value;
    const currentInputValue = parseFloat(currentInputValueText);
    currentInput.value = '';
    return currentInputValue;
}


// show input field value
function getInputFieldValue(fieldId, inputValue) {
    const currentField = document.getElementById(fieldId);
    const currentFieldText = currentField.innerText;
    const currentFieldValue = parseFloat(currentFieldText);
    currentField.innerText = currentFieldValue + inputValue;
}


// get current total balance 
function getCurrentTotalBalance() {
    const currentBalance = document.getElementById('total-field');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    return currentBalanceAmount;
}


// total balance update
function getUpdatedTotalBalance(newInputAmount, isAdd) {
    const previousTotalBalance = document.getElementById('total-field');
    const currentTotalBalance = getCurrentTotalBalance();
    if(isAdd == true) {
        previousTotalBalance.innerText = currentTotalBalance + newInputAmount;
    }else{
        previousTotalBalance.innerText = currentTotalBalance - newInputAmount;
    }
}


// handle deposit value
document.getElementById('deposit-button').addEventListener('click', function() {
    const depositValue = getInputValue('deposit-input');
    if(depositValue > 0) {
        getInputFieldValue('deposit-field', depositValue);
        getUpdatedTotalBalance(depositValue, true);
    }else{
        alert("Please deposit positive amount.");
    }
    // getTotalValue('deposit-input', true);
});


// handle withdraw value
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawValue = getInputValue('withdraw-input');
    const currentTotalBalance = getCurrentTotalBalance();
    if(withdrawValue > 0 && withdrawValue <= currentTotalBalance) {
        getInputFieldValue('withdraw-field', withdrawValue);
        getUpdatedTotalBalance(withdrawValue, false);
    }else{
        alert("You haven't sufficient balance.");
    }
    // getTotalValue('withdraw-input', false);
})


// handle deposit value in normal way-----------------
// document.getElementById('deposit-button').addEventListener('click', function() {
//     const currentDepositInput = document.getElementById('deposit-input');
//     const currentDepositInputValueText = currentDepositInput.value;
//     const currentDepositInputValue = parseFloat(currentDepositInputValueText);
//     const previousDepositField = document.getElementById('deposit-field');
//     const previousDepositFieldValueText = previousDepositField.innerText;
//     const previousDepositFieldValue = parseFloat(previousDepositFieldValueText);
//     previousDepositField.innerText = currentDepositInputValue + previousDepositFieldValue;
//     currentDepositInput.value = '';
// });