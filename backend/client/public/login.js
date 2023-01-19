// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBQGBpTHbvgWSuYzXBN5b1VM_arTvIfuVA',
  authDomain: 'chat-app-6f81b.firebaseapp.com',
  projectId: 'chat-app-6f81b',
  storageBucket: 'chat-app-6f81b.appspot.com',
  messagingSenderId: '964980161968',
  appId: '1:964980161968:web:aa724e1f615a5ab6b92a75',
  measurementId: 'G-FF2ZEM0E5G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const analytics = getAnalytics(app);

const [$signInGoogle, $signInFacebook, $signInGithub] =
  document.querySelectorAll('.btn-oauth');

document.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
  });
});

$signInGoogle.addEventListener('click', () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert(
          "You're' already signed with a diferent provider [Google, Facebook, Github]",
        );
      }
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
