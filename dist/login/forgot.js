
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const emailInput = document.getElementById("email").value;
        
        // Simple email validation (optional)
        if (emailInput === "") {
            alert("Please enter your email address.");
            return;
        }

        // Simulate form submission success
        alert("A link to reset your password has been sent to " + emailInput + ".");

        // Optionally, you can submit the form data directly without JSON.
        // Uncomment the line below to enable the actual form submission.
        // form.submit(); 
    });
});
