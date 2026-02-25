document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        // Simulate account creation (In reality, send data to the server)
        alert('Account created successfully! Redirecting to login page...');

        // Redirect to the login page after 2 seconds to simulate a successful signup
        setTimeout(function() {
            window.location.href = 'index.html'; // Redirect to login page
        }, 500);
    }
});
