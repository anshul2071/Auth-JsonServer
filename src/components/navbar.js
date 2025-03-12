export function Navbar() {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.style.display = "none"; 
  
    navbar.innerHTML = `
      <div class="nav-container">
        <h2 class="logo">Anshul's Website</h2>
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" id="logout">Logout</a></li>
        </ul>
      </div>
    `;
  
    document.body.prepend(navbar);
  
    document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");  // Remove login state
        navbar.style.display = "none";  // Hide navbar
        const loginForm = document.getElementById("login-form");
        const signupForm = document.getElementById("signup-form");
    
        if (loginForm) {
          loginForm.style.display = "block";  // Show the login form
        }
    
        if (signupForm) {
          signupForm.style.display = "none";  // Hide the signup form
        }
      });
    
      // Check if user is logged in
      if (localStorage.getItem("isLoggedIn") === "true") {
        navbar.style.display = "block";  // Show the navbar
        const signupForm = document.getElementById("signup-form");
        const loginForm = document.getElementById("login-form");
        
        if (signupForm) {
          signupForm.style.display = "none";  // Hide signup form if logged in
        }
        
        if (loginForm) {
          loginForm.style.display = "none";  // Hide login form if logged in
        }
      }
    }