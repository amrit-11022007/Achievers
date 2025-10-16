// const container = document.getElementById("container");
// const registerBtn = document.getElementById("register");
// const loginBtn = document.getElementById("login");

// registerBtn.addEventListener("click", () => {
//   container.classList.add("active");
// });

// loginBtn.addEventListener("click", () => {
//   container.classList.remove("active");
// });

function login() {
      const user = document.getElementById('Email').value;
      if (!user) {
        alert('Please enter your Email!');
        return;
      }

      const pass = document.getElementById('Password').value;
      if (!user) {
        alert('Please enter your Password!');
        return;
      }

      // Save login info in localStorage
      localStorage.setItem("userLoggedIn", "true");
      localStorage.setItem("Email", user);
      localStorage.setItem("Password", pass);

      // Get redirect page (if any)
      const params = new URLSearchParams(window.location.href="../complain/inndex.html");
      const redirectPage = params.get("redirect") || "../complain/inndex.html";

      // Redirect back
      window.location.href = redirectPage;
    }