import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyBsEX3z_XqMcLE1Rz2uIE0jRbfQGb8t5Mw",
    authDomain: "coffeeculture-7052c.firebaseapp.com",
    projectId: "coffeeculture-7052c",
    storageBucket: "coffeeculture-7052c.appspot.com",
    messagingSenderId: "780624510700",
    appId: "1:780624510700:web:5073b7f1353cb2015b6fc9",
    measurementId: "G-3Q8M8KB7NR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('auth-form');

    document.getElementById('loginLink').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = signUpForm['email'].value;
        const password = signUpForm['password'].value;
        const confirmPassword = signUpForm['confirm-password'].value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User created:', userCredential.user);
                window.location.href = 'index.html'; // Redirect after successful signup
            })
            .catch((error) => {
                console.error(error);
                alert("Signup failed: " + error.message);
            });
    });
});



