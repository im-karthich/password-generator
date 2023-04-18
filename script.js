var password = document.getElementById("passwordValue");

function generatePassword() {    
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!%^&*-_+=';
      
    for (let i = 1; i<=10; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
        pass += str.charAt(char)
    }
    
    return /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass) && /[@#$!%^&*-_+=]/.test(pass)?pass:generatePassword();
}
function passwordFunction() {
    password.innerHTML = generatePassword();
}