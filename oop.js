// Function to validate the sign-up form
function validateSignUp() {
    // Get form input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate username (e.g., must be unique)
    if (!isUsernameUnique(username)) {
        document.getElementById("usernameError").textContent = "Username already exists";
        return; // Exit function if username is not unique
    } else {
        document.getElementById("usernameError").textContent = ""; // Clear error message
    }

    // Validate password (e.g., must be at least 8 characters with special characters)
    if (password.length < 8 || !containsSpecialCharacters(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters with special characters";
        return; // Exit function if password criteria are not met
    } else {
        document.getElementById("passwordError").textContent = ""; // Clear error message
    }

    // If validation passes, show success message and reset form
    alert("Sign-up successful!");
    resetForm();
}

// Function to check if the username is unique (example function)
function isUsernameUnique(username) {
    // Simulate checking if the username is unique (replace with actual logic)
    var existingUsernames = ["john_doe", "jane_smith", "user123"];
    return !existingUsernames.includes(username);
}

// Function to check if the password contains special characters (example function)
function containsSpecialCharacters(password) {
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return specialCharacters.test(password);
}

// Function to reset the form
function resetForm() {
    document.getElementById("signupForm").reset(); // Reset the form
    document.getElementById("usernameError").textContent = ""; // Clear username error message
    document.getElementById("passwordError").textContent = ""; // Clear password error message
}



