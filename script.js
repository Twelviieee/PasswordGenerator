function generatePassword() {
    const length = 12;
    const charset ="ABCDEGHIJKMNLOPQRSTUVWXYZabcdeghijkmnlopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|?<>,.;:";
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];

    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");

    passwordField.select();
    passwordField.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(passwordField.value).then(() => {
        alert('Password is copied');
    }).catch(err => {
        alert('Failed to copy password: ' + err);
    });
}
