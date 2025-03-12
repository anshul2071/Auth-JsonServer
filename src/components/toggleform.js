export const toggleForm = () => {
    document.addEventListener("DOMContentLoaded", function () {
      const signupForm = document.getElementById("signup-form");
      const loginForm = document.getElementById("login-form");
      const showLogin = document.getElementById("show-login");
      const showRegister = document.getElementById("show-register");
  
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
      if (isLoggedIn) {
        signupForm.style.display = "none";
        loginForm.style.display = "none";
        return;
      }
  
      signupForm.style.display = "block";
      loginForm.style.display = "none";
  
      showLogin.addEventListener("click", function (event) {
        event.preventDefault();
        
        signupForm.classList.add("fade-out");
        setTimeout(() => {
          signupForm.style.display = "none";
          loginForm.style.display = "block";
          loginForm.classList.add("fade-in");
          signupForm.classList.remove("fade-out");
        }, 300); 
      });
  
      showRegister.addEventListener("click", function (event) {
        event.preventDefault();
    
        loginForm.classList.add("fade-out");
        setTimeout(() => {
          loginForm.style.display = "none";
          signupForm.style.display = "block";
          signupForm.classList.add("fade-in");
          loginForm.classList.remove("fade-out");
        }, 300); 
      });
    });
  };
  