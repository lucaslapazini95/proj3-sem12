import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeEP0jkrfkMfvzpcs85_ILr4y1jHDTzMM",
  authDomain: "auth-proj3.firebaseapp.com",
  projectId: "auth-proj3",
  storageBucket: "auth-proj3.appspot.com",
  messagingSenderId: "383571524191",
  appId: "1:383571524191:web:23eddf8b486c09dc01b9ea",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
