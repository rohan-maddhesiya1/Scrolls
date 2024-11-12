document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (name && email && password && confirmPassword) {
        if (password === confirmPassword) {
            alert("Sign Up Successful!");
        
        

        } else {
            alert("Passwords do not match. Please try again.");
        }


    } else {
        alert("Please fill out all fields.");
    }
});
