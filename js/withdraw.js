//set the withdraw eventlistener 
document.getElementById('btn-withdraw').addEventListener('click', function(){
   //set the withdraw amount from the the withdraw input field
   const withdrawField = document.getElementById('withdraw-field');
   const newWithdrawAmount = withdrawField.value;
   console.log(newWithdrawAmount);

   //get the current withdraw amount 
   const withdrawTotalAmount = document.getElementById('withdraw-total');
   //total previous withdraw amount
   const previousWithdrawTotalAmount = withdrawTotalAmount.innerText;
   console.log(previousWithdrawTotalAmount);


   //updated the current total withdraw amount 
   const currentWithdrawTotalAmount = parseFloat(previousWithdrawTotalAmount) + parseFloat(newWithdrawAmount);
    withdrawTotalAmount.innerText = currentWithdrawTotalAmount + '.00';

   //get current balance amount 
const balanceTotalAmount = document.getElementById('balance-total');
const previousBalanceTotalAmount = balanceTotalAmount.innerText;

//calculate the current balance amount 
const currentTotalBalanceAmount = parseFloat(previousBalanceTotalAmount) - parseFloat(newWithdrawAmount);

//get the updated current balance amount 
balanceTotalAmount.innerText = currentTotalBalanceAmount + '.00' ;


//clear the withdraw field
withdrawField.value = '';
});