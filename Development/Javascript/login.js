document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const loginForm = document.querySelector("form");

    // When the form is submitted
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the input values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        // Basic Validation
        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return;
        }

        if (role === "" || role === "Choose role") {
            alert("Please select a role.");
            return;
        }

        // If validation passes, show success message
        alert("Login successful! Redirecting...");

        // Simulating form submission (you can replace this with actual server-side login logic)
        setTimeout(() => {
            // After successful login, you can redirect or do other actions
            window.location.href = "file:///C:/Users/Asus/OneDrive/Desktop/gym-management/Development/home.html"; // Replace with actual dashboard or home page URL
        }, 1000);
    });
});
