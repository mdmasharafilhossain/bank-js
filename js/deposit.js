document.getElementById('btn-deposit').addEventListener('click',function(){
const depositField = document.getElementById('deposit-field');
const depositAmount = depositField.value;
const takaFinalDeposit = parseFloat(depositAmount);


// step-2..

const depositTotalAmount  = document.getElementById('deposit-total');
const depositTotal = depositTotalAmount.innerText;
const TakaDepo = parseFloat(depositTotal);

const totalTakaInDepsitField = takaFinalDeposit +TakaDepo;


depositTotalAmount.innerText = totalTakaInDepsitField;

const balanceTotalElement = document.getElementById('balance-total');
const balanceString = balanceTotalElement.innerText;
const convertBalanace = parseFloat(balanceString);

const currentTotalBalance = convertBalanace + takaFinalDeposit;
 balanceTotalElement.innerText = currentTotalBalance;

depositField.value ='';
 })

