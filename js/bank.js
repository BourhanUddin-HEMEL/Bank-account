//add click event listener 
document.getElementById('btn-submit').addEventListener('click', function(){

    //get the email address inside the email input field
    /**
     * get mail and password from input field
     * set id on the html element
     * get the elelment 
     * get the value from element
     */
    const emailField = document.getElementById('user-email');
    const email = emailField.value ;
      //get the password inside the email input field
    const passwordField= document.getElementById('user-password');
    const password = passwordField.value;

    //user email and password verification 
    if(email === 'hemelbourhan@gmail.com' && password === '1532'){
        window.location.href = 'bank.html';
    }
    else{
        alert("invalid  your email or user password");
    }
});