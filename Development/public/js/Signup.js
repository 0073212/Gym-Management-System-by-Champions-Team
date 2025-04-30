document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const errorDiv = document.createElement('div');
    errorDiv.style.color = 'red';
    errorDiv.style.marginBottom = '15px';
    form.insertBefore(errorDiv, form.firstChild);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value.trim();
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const role = document.getElementById('role').value;

        // Email strict validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        // Validation
        if (!name || !age || !gender || !email || !password || !confirmPassword || !role) {
            errorDiv.textContent = '⚠️ Please fill all the fields properly.';
            return;
        }

        if (!emailRegex.test(email)) {
            errorDiv.textContent = '⚠️ Please enter a valid Email address (example@gmail.com).';
            return;
        }

        if (password.length < 6) {
            errorDiv.textContent = '⚠️ Password must be at least 6 characters long.';
            return;
        }

        if (password !== confirmPassword) {
            errorDiv.textContent = '⚠️ Password and Confirm Password must match.';
            return;
        }

        // If everything is valid
        errorDiv.style.color = 'green';
        errorDiv.textContent = '✅ Successfully Signed Up!';
    });
});

// AJAX-based signup handling
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const role = document.getElementById("role").value;

    if (password !== confirmPassword) {
        alert("⚠️ Passwords do not match!");
        return;
    }

    try {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, age, gender, email, password, role }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        alert(data.message);
        window.location.href = data.redirect;
    } catch (err) {
        alert("Error: " + err.message);
    }
});

