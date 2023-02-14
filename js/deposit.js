//set event listener on deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){

//get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;

//get the current deposit amount 
    const depositTotalAmount = document.getElementById('deposit-total');

    //this is the previous deposit amount 
    const previousDepositTotal = depositTotalAmount.innerText;

    //Updated total deposit amount and convert into float 
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    depositTotalAmount.innerText = currentDepositTotal + '.00';

//get current balance amount 
const balanceTotalAmount = document.getElementById('balance-total');
const previousBalanceTotalAmount = balanceTotalAmount.innerText;

//calculate the current total amount 
const currentTotalBalanceAmount = parseFloat(previousBalanceTotalAmount) +  parseFloat(newDepositAmount);

//get the total current balance amount
balanceTotalAmount.innerText = currentTotalBalanceAmount + '.00';

//default depositField value is empty string or cleat the deposit field
    depositField.value = '';
});