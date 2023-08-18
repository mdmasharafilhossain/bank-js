document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFiled = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawFiled.value;
    const ConvertAmoutFLoat = parseFloat(withdrawAmount);
    withdrawFiled.value = '';
    // step-2:
    if(isNaN(ConvertAmoutFLoat)){
        alert('please provide a number');
        return;
    }

    const withDrawElement = document.getElementById('withdraw-total');
    const withdrawAmountTotal = withDrawElement.innerText;
    const convertFloat = parseFloat(withdrawAmountTotal);
   


    const BalanceAmount = document.getElementById('balance-total');
    const BAlanceTaka = BalanceAmount.innerText;
    const Converrtt = parseFloat(BAlanceTaka);
    

     if(ConvertAmoutFLoat  > Converrtt){
        alert('Ato taka naii');
        return;
     }
      //   claculate:
    const ToatalWithdrawAmount = ConvertAmoutFLoat + convertFloat;
    withDrawElement.innerText = ToatalWithdrawAmount;

    const newBalance = Converrtt - ConvertAmoutFLoat;
    BalanceAmount.innerText=newBalance;

   
})