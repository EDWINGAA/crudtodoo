// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbHo2ifNnz4L-1Puq8oMygNju2ww3OLqE",
  authDomain: "todo-app-yt-b4111.firebaseapp.com",
  projectId: "todo-app-yt-b4111",
  storageBucket: "todo-app-yt-b4111.appspot.com",
  messagingSenderId: "728513071551",
  appId: "1:728513071551:web:d8bedf93004365647bb90a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)