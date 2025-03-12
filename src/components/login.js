export const handleLogin = () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", async function (evt) {
        evt.preventDefault();


        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        try {
            const response = await fetch("http://localhost:3000/users");
            const users = await response.json();


            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                alert("Login Successful!");
                
     
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("user", JSON.stringify(user));

                window.location.href = "navbar.js";  
            } else {
                alert("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            alert("An error occurred. Please try again later.");
        }
    });
};
