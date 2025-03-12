export const handleSignup = () => {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", async function (evt) {
        evt.preventDefault();

        const firstName = signupForm.querySelector('input[placeholder="FirstName"]').value;
        const lastName = signupForm.querySelector('input[placeholder="LastName"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;
        const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;
        const gender = signupForm.querySelector("select").value;
        const age = signupForm.querySelector('input[type="number"]').value;

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$#!%*?&]{8,}$/;

        if (!emailRegex.test(email)) {
            alert("Invalid email format");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters, including one uppercase letter and one number.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
           
            const response = await fetch("http://localhost:3000/users");
            const users = await response.json();
            const existingUser = users.find(user => user.email === email);

            if (existingUser) {
                alert("Email is already registered. Please use a different email.");
                return;
            }

            const newUser = { firstName, lastName, email, password, gender, age };

            await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            alert("Registration Successful");
            window.location.href = "index.html";

        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred. Please try again later.");
        }
    });
};
