const menuButton = document.querySelector('[aria-label="Open menu"]');
const mobileMenu1 = menuButton.parentElement.nextElementSibling;

menuButton.addEventListener("click", () => {
  mobileMenu1.classList.toggle("hidden");
});

const mobileMenuButton = document.getElementById("mobile-menu-button");

const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", function () {
  const isHidden = mobileMenu.classList.toggle("hidden");

  mobileMenuButton.setAttribute("aria-expanded", String(!isHidden));
});

/* =========================================================
         AUTH ELEMENTS
      ========================================================== */

const authModal = document.getElementById("auth-modal");

const loginSection = document.getElementById("login-section");

const signupSection = document.getElementById("signup-section");

const closeAuthModal = document.getElementById("close-auth-modal");

const showSignup = document.getElementById("show-signup");

const showLogin = document.getElementById("show-login");

const loginForm = document.getElementById("login-form");

const signupForm = document.getElementById("signup-form");

/* =========================================================
         PENDING LOCATION
      ========================================================== */

/*
         This stores the location page the user wanted
         to visit before the login popup appeared.

         Example:

         User clicks Delhi
         pendingLocationUrl = "delhi.html"
      */

let pendingLocationUrl = null;

/* =========================================================
         OPEN LOGIN
      ========================================================== */

function openLogin() {
  authModal.classList.remove("hidden");

  authModal.classList.add("flex");

  loginSection.classList.remove("hidden");

  signupSection.classList.add("hidden");
}

/* =========================================================
         OPEN SIGN UP
      ========================================================== */

function openSignup() {
  authModal.classList.remove("hidden");

  authModal.classList.add("flex");

  loginSection.classList.add("hidden");

  signupSection.classList.remove("hidden");
}

/* =========================================================
         CLOSE AUTH MODAL
      ========================================================== */

function closeAuth() {
  authModal.classList.add("hidden");

  authModal.classList.remove("flex");
}

/* =========================================================
         CLOSE BUTTON
      ========================================================== */

closeAuthModal.addEventListener("click", function () {
  closeAuth();

  /*
           If user closes the popup without logging in,
           remove the pending location.
        */

  pendingLocationUrl = null;
});

/* =========================================================
         CLICK OUTSIDE MODAL
      ========================================================== */

authModal.addEventListener("click", function (event) {
  if (event.target === authModal) {
    closeAuth();

    pendingLocationUrl = null;
  }
});

/* =========================================================
         LOGIN -> SIGN UP
      ========================================================== */

showSignup.addEventListener("click", function () {
  loginSection.classList.add("hidden");

  signupSection.classList.remove("hidden");
});

/* =========================================================
         SIGN UP -> LOGIN
      ========================================================== */

showLogin.addEventListener("click", function () {
  signupSection.classList.add("hidden");

  loginSection.classList.remove("hidden");
});

/* =========================================================
         NAVBAR LOGIN BUTTON
      ========================================================== */

const navbarLoginButton = document.getElementById("navbar-login-button");

navbarLoginButton.addEventListener("click", function () {
  const loggedIn = localStorage.getItem("awfisLoggedIn");

  if (loggedIn === "true") {
    alert("You are already logged in.");

    return;
  }

  openLogin();
});

/* =========================================================
         NAVBAR SIGN UP BUTTON
      ========================================================== */

const navbarSignupButton = document.getElementById("navbar-signup-button");

navbarSignupButton.addEventListener("click", function () {
  const loggedIn = localStorage.getItem("awfisLoggedIn");

  if (loggedIn === "true") {
    alert("You are already logged in.");

    return;
  }

  openSignup();
});

/* =========================================================
         MOBILE LOGIN
      ========================================================== */

const mobileLoginButton = document.getElementById("mobile-login-button");

mobileLoginButton.addEventListener("click", function () {
  openLogin();
});

/* =========================================================
         MOBILE SIGN UP
      ========================================================== */

const mobileSignupButton = document.getElementById("mobile-signup-button");

mobileSignupButton.addEventListener("click", function () {
  openSignup();
});

/* =========================================================
         LOCATION ITEMS
      ========================================================== */

const locationItems = document.querySelectorAll(".location-item");

locationItems.forEach(function (location) {
  location.addEventListener("click", function (event) {
    /*
             Check whether user is already logged in.
          */

    const loggedIn = localStorage.getItem("awfisLoggedIn");

    /*
             Get the actual href of the clicked location.

             Example:

             Delhi    -> delhi.html
             Gurgaon  -> gurgaon.html
             Mumbai   -> mumbai.html
          */

    const locationUrl = location.getAttribute("href");

    /* =============================================
             USER ALREADY LOGGED IN
          ============================================== */

    if (loggedIn === "true") {
      /*
               IMPORTANT:

               We do NOT call event.preventDefault().

               Therefore the browser follows the
               href normally.
            */

      return;
    }

    /* =============================================
             USER NOT LOGGED IN
          ============================================== */

    /*
             Stop the browser from navigating immediately.
          */

    event.preventDefault();

    /*
             Remember the city page.
          */

    pendingLocationUrl = locationUrl;

    /*
             Open login popup.
          */

    openLogin();
  });
});

/* =========================================================
         LOGIN FORM
      ========================================================== */

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value.trim();

  const password = document.getElementById("login-password").value;

  /* Check fields */

  if (email === "" || password === "") {
    alert("Please enter email and password.");

    return;
  }

  /*
           Frontend-only login.

           Save login state.
        */

  localStorage.setItem("awfisLoggedIn", "true");

  localStorage.setItem("awfisUserEmail", email);

  alert("Login successful!");

  closeAuth();

  /*
           If the user originally clicked
           a location, redirect to it.
        */

  if (pendingLocationUrl) {
    window.location.href = pendingLocationUrl;

    pendingLocationUrl = null;
  }
});

/* =========================================================
         SIGN UP FORM
      ========================================================== */

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("signup-name").value.trim();

  const email = document.getElementById("signup-email").value.trim();

  const password = document.getElementById("signup-password").value;

  const confirmPassword = document.getElementById(
    "signup-confirm-password",
  ).value;

  /* =============================================
             PASSWORD MATCH
        ============================================== */

  if (password !== confirmPassword) {
    alert("Passwords do not match.");

    return;
  }

  /* =============================================
             PASSWORD LENGTH
        ============================================== */

  if (password.length < 6) {
    alert("Password must contain at least 6 characters.");

    return;
  }

  /* =============================================
             SAVE USER
        ============================================== */

  localStorage.setItem("awfisUserName", name);

  localStorage.setItem("awfisUserEmail", email);

  localStorage.setItem("awfisLoggedIn", "true");

  alert("Account created successfully!");

  closeAuth();

  /*
           If the user originally clicked
           a location, redirect to it.
        */

  if (pendingLocationUrl) {
    window.location.href = pendingLocationUrl;

    pendingLocationUrl = null;
  }
});
