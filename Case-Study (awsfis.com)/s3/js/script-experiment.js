const mobileMenuButton = document.getElementById("mobile-menu-button");

const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", function () {
  const isHidden = mobileMenu.classList.toggle("hidden");

  mobileMenuButton.setAttribute("aria-expanded", String(!isHidden));
});

const authModal = document.getElementById("auth-modal");

const loginSection = document.getElementById("login-section");

const signupSection = document.getElementById("signup-section");

const closeAuthModal = document.getElementById("close-auth-modal");

const showSignup = document.getElementById("show-signup");

const showLogin = document.getElementById("show-login");

const loginForm = document.getElementById("login-form");

const signupForm = document.getElementById("signup-form");

let pendingLocationUrl = null;

function openLogin() {
  authModal.classList.remove("hidden");

  authModal.classList.add("flex");

  loginSection.classList.remove("hidden");

  signupSection.classList.add("hidden");
}

function openSignup() {
  authModal.classList.remove("hidden");

  authModal.classList.add("flex");

  loginSection.classList.add("hidden");

  signupSection.classList.remove("hidden");
}

function closeAuth() {
  authModal.classList.add("hidden");

  authModal.classList.remove("flex");
}

closeAuthModal.addEventListener("click", function () {
  closeAuth();

  pendingLocationUrl = null;
});

authModal.addEventListener("click", function (event) {
  if (event.target === authModal) {
    closeAuth();

    pendingLocationUrl = null;
  }
});

showSignup.addEventListener("click", function () {
  loginSection.classList.add("hidden");

  signupSection.classList.remove("hidden");
});

showLogin.addEventListener("click", function () {
  signupSection.classList.add("hidden");

  loginSection.classList.remove("hidden");
});

const navbarLoginButton = document.getElementById("navbar-login-button");

navbarLoginButton.addEventListener("click", function () {
  openLogin();
});

const navbarSignupButton = document.getElementById("navbar-signup-button");

navbarSignupButton.addEventListener("click", function () {
  const loggedIn = localStorage.getItem("awfisLoggedIn");

  if (loggedIn === "true") {
    alert("You are already logged in.");

    return;
  }

  openSignup();
});

const mobileLoginButton = document.getElementById("mobile-login-button");

mobileLoginButton.addEventListener("click", function () {
  openLogin();
});

const mobileSignupButton = document.getElementById("mobile-signup-button");

mobileSignupButton.addEventListener("click", function () {
  openSignup();
});

const locationItems = document.querySelectorAll(".location-item");

locationItems.forEach(function (location) {
  location.addEventListener("click", function (event) {
    const loggedIn = localStorage.getItem("awfisLoggedIn");

    const locationUrl = location.getAttribute("href");

    if (loggedIn === "true") {
      return;
    }

    event.preventDefault();

    pendingLocationUrl = locationUrl;

    openLogin();
  });
});

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value.trim();

  const password = document.getElementById("login-password").value;

  if (email === "" || password === "") {
    alert("Please enter email and password.");

    return;
  }

  try {
    const response = await fetch("http://13.206.101.173:8080/api/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Login failed.");

      return;
    }

    localStorage.setItem("awfisLoggedIn", "true");

    alert("Login successful.");

    closeAuth();

    if (pendingLocationUrl) {
      window.location.href = pendingLocationUrl;

      pendingLocationUrl = null;
    }
  } catch (error) {
    alert("Unable to connect to the server.");

    console.log(error);
  }
});

signupForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("signup-name").value.trim();

  const email = document.getElementById("signup-email").value.trim();

  const password = document.getElementById("signup-password").value;

  const confirmPassword = document.getElementById(
    "signup-confirm-password",
  ).value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill in all required fields.");

    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");

    return;
  }

  if (password.length < 6) {
    alert("Password must contain at least 6 characters.");

    return;
  }

  try {
    const response = await fetch("http://13.206.101.173:8080/api/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,

        email: email,

        password: password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Failed to sign up.");

      return;
    }

    localStorage.setItem("awfisLoggedIn", "true");

    alert("Account created successfully!");

    closeAuth();

    if (pendingLocationUrl) {
      window.location.href = pendingLocationUrl;

      pendingLocationUrl = null;
    }
  } catch (error) {
    console.log(error);
    console.log(data);
    alert("Account was not able to be created.");
  }
});
