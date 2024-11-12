// Get references to the form and input elements
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("given-mail"); // Email input element
const passwordInput = document.getElementById("given-pass"); // Password input element

// Event listener to handle form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  const email = emailInput.value; // Get the value of the email input
  const pass = passwordInput.value; // Get the value of the password input

  const rmail = sessionStorage.getItem("email"); // Retrieve stored email
  const rpass = sessionStorage.getItem("pass"); // Retrieve stored password

  if (email === rmail && pass === rpass) {
    window.location.href = "../home.html"; // Redirect if credentials match
  } else {
    alert("Invalid Username and Password"); // Show error if credentials don't match
  }
});
