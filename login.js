import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js';

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

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Assuming the user's name is stored in a 'displayName' property
        // Fall back to the email if the displayName is not available
        const userName = userCredential.user.displayName || userCredential.user.email;
        alert(`Hello, ${userName}, welcome, you are logged in`);

        console.log('User logged in:', userCredential.user);
        window.location.href = 'index.html';
    })
    .catch((error) => {
        console.error(error);
        alert("Login failed: " + error.message);
    });

});

// Redirect to the signup page
document.getElementById('loginLink').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'signup.html';
});
