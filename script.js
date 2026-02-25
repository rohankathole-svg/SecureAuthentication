
var arr =[]
function signup(){
    var getemail =document.getElementById("username")
    var getpass =document.getElementById("password")
    var obj ={
        email:getemail.value,
        pass:getpass.value
    }
    arr.push(obj)
    if(getemail.value == '' || getpass.value == ''){
        alert("Please fill the required fields")
    }
    else{
        localStorage.setItem("Data",JSON.stringify(arr))
        getemail.value =""
        getpass.value =""
    
        location.href = "login.html"
    }
  
}




// Function to generate random CAPTCHA text
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for (let i = 0; i < 4; i++) {  // 4-character long CAPTCHA
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

// Function to display the CAPTCHA text
function displayCaptcha() {
    const captchaText = generateCaptcha();  // Generate a new CAPTCHA
    document.getElementById('captcha-text').textContent = captchaText;  // Display it on the page
    return captchaText;
}

// Store the generated CAPTCHA
let currentCaptcha = displayCaptcha();  // Generate and display CAPTCHA on page load

// Select elements
const form = document.getElementById('auth-form');
const errorMessage = document.getElementById('error-message');
const captchaField = document.getElementById('captcha');

// Form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const captcha = captchaField.value.trim().toUpperCase(); // Convert user input to uppercase

    // Validate username, password, and CAPTCHA
    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (captcha !== currentCaptcha) {
        errorMessage.textContent = "Incorrect CAPTCHA. Please try again.";
        return;
    }

    // If all fields are valid, simulate login success
    errorMessage.textContent = "";
    alert("Login Successful!");

    // Redirect or handle further logic here
    // Redirect to the login page after 2 seconds to simulate a successful signup
    setTimeout(function() {
        window.location.href = 'Quiz.html'; // Redirect to login page
    }, 500);
});

// CAPTCHA refresh button
document.getElementById('refresh-captcha').addEventListener('click', function() {
    currentCaptcha = displayCaptcha();  // Generate a new CAPTCHA
    captchaField.value = '';  // Clear the CAPTCHA input field
    errorMessage.textContent = '';  // Clear error messages
});
