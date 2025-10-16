 function checkLogin() {
      const loggedIn = localStorage.getItem("userLoggedIn");
      const username = localStorage.getItem("Email");
      const Pass = localStorage.getItem("Password");

      if (!loggedIn) {
        // Not logged in, redirect to login.html with redirect back to complain
        window.location.href = "login.html?redirect=complain.html";
      } else {
        // Show username if logged in
        document.getElementById("welcome").innerText = "Welcome, " + username + "!";
      }
    }
