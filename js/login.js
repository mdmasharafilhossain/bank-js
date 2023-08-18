document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
   
    const PasswordFiled = document.getElementById('user-password');
    const pass = PasswordFiled.value;
   if(email === 'mahiTonni@gmail.com' && pass === 'mahiTonni'){
   window.location.href = 'bank.html';
   }
   else{
    alert ('invalid password or gmail');
   }
})