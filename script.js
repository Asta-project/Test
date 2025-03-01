// Import required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZrqT9MRVkjMOkBu8dLJWmpx4OLHky2SQ",
  authDomain: "asta-ichiyukimori.firebaseapp.com",
  projectId: "asta-ichiyukimori",
  storageBucket: "asta-ichiyukimori.firebasestorage.app",
  messagingSenderId: "413139248938",
  appId: "1:413139248938:web:372dde7f2217700a456053",
  measurementId: "G-08QVDJJ1KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
window.signup = function () {
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Signup Successful!");
    })
    .catch(error => {
      alert(error.message);
    });
};

// Login Function
window.login = function () {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Login Successful!");
    })
    .catch(error => {
      alert(error.message);
    });
};

// Logout Function
window.logout = function () {
  signOut(auth)
    .then(() => {
      alert("Logged out!");
    })
    .catch(error => {
      alert(error.message);
    });
};
