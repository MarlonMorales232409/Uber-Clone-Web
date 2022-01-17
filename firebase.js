// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdoyPriGzTC3YSsQW66-mSCWwYOieCM4U",
  authDomain: "uber-clone-9b467.firebaseapp.com",
  projectId: "uber-clone-9b467",
  storageBucket: "uber-clone-9b467.appspot.com",
  messagingSenderId: "672560781443",
  appId: "1:672560781443:web:28c2eca85632461d5c63b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export { app, provider, auth };
