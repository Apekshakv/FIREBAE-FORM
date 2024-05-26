import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBzhNuHBQ1lywN_mxIoyr3iYG3PAe7iozU",
  authDomain: "moody-c07fd.firebaseapp.com",
  projectId: "moody-c07fd",
  storageBucket: "moody-c07fd.appspot.com",
  messagingSenderId: "900869736498",
  appId: "1:900869736498:web:ff80a4c81f4cf6e042942b"
};
const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(app)
console.log(app.options.projectId)
console.log(auth)

const logout = document.getElementsByClassName("logout")[0]; 
const login = document.getElementsByClassName("login")[0]; 
const signin = document.getElementsByClassName("sign-in")[0];
const email = document.getElementsByClassName("email")[0].value; 
const password = document.getElementsByClassName("password")[0].value; 
const create = document.getElementsByClassName("create")[0]; 
const signto = document.getElementsByClassName("signto")[0]; 

signin.addEventListener("click", (event) => {
    event.preventDefault();
    google();
});

signto.addEventListener("click", (event) => {
    event.preventDefault();
    Email();
});

create.addEventListener("click", (event) => {
    event.preventDefault();
    Create();
});

showLoggedOutView();

function google() {
    console.log("hello");
    signInWithPopup(auth, provider)
    .then((userCredential) => {
        showLoggedInView()
      })
      .catch((error) => {
        console.error(error.message)
      });
    
}

function Email() {
    console.log("Sign in with email and password");
    const email = document.getElementsByClassName("email")[0].value; 
    const password = document.getElementsByClassName("password")[0].value; 
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    showLoggedInView()
  })
  .catch((error) => {
    alert(error.message);
    console.error(error.message)
  });

}

function Create() {
    const email = document.getElementsByClassName("email")[0].value; 
    const password = document.getElementsByClassName("password")[0].value; 
    console.log("Sign up with email and password");
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        showLoggedInView()
    })
    .catch((error) => {
      alert(error.message);
        console.error(error.message)
    })
}

function showLoggedOutView() {
    hideElement(login);
    showElement(logout);
}

function showLoggedInView() {
    hideElement(logout);
    showElement(login);
}

function showElement(element) {
    element.style.display = "flex";
}

function hideElement(element) {
    element.style.display = "none";
}
const out = document.getElementsByClassName("out")[0];
out.addEventListener("click", (event) => {
    event.preventDefault();
  showLoggedOutView();
});

