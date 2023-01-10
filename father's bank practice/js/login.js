document.getElementById('login-button').addEventListener('click', function() {
    // console.log('Login button clicked');
    const emailInputField = document.getElementById('input-email');
    const emailInput = emailInputField.value;
    const passwordInputField = document.getElementById('input-password');
    const passwordInput = passwordInputField.value;
    if (emailInput == 'jfmemon1999@gmail.com' && passwordInput == 'secret') {
        // console.log('Valid user.');
        window.location.href = 'http://127.0.0.1:5500/banking.html';
    }else{
        alert('Wrong email or password.')
    }
    emailInputField.value = '';
    passwordInputField.value = '';
})