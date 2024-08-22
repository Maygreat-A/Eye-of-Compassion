// Function to validate the login credentials
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Create a data object to send to the server
    var userData = {
        username: username,
        password: password
    };

    // Send a POST request to the server to validate the credentials
    fetch('https://your-api-endpoint.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.authenticated) {
            alert('Login successful!');
            // Redirect to dashboard or home page
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while processing your request.');
    });
}
