document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var messageBox = document.getElementById("messageBoxContainer");
    var message = document.getElementById("message");
    

    var usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var errorMessage = "";

    if (!usernameRegex.test(username)) {
        errorMessage += "Invalid Input for Username \n";
    }

    if (!passwordRegex.test(password)) {
        errorMessage += "Invalid Input for Password \n";
    }

    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match \n";
    }

    if (!emailRegex.test(email)) {
        errorMessage += "Invalid email format. ";
    }

    if (errorMessage !== "") {
        message.innerText = errorMessage;
        messageBox.style.display = "block";
    } else {
        message.innerText = "Signup successful!";
        messageBox.style.display = "block";
    }
});

