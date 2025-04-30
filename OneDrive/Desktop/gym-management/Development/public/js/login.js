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

        // Simulating form submission
        setTimeout(() => {
            // After successful login, we can redirect to the home page
            window.location.href = "home.html";
        }, 1000);
    });
});

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, role }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        localStorage.setItem("token", data.token); 
        alert(data.message);
        window.location.href = data.redirect;
    } catch (err) {
        alert("Login Error: " + err.message);
    }
});
