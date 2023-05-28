import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoQ0KaRBTHiYMTo2c5LJhkaeETlnkdxJg",
  authDomain: "chat-app-react-8917e.firebaseapp.com",
  projectId: "chat-app-react-8917e",
  storageBucket: "chat-app-react-8917e.appspot.com",
  messagingSenderId: "214104635818",
  appId: "1:214104635818:web:e729da651b1301bea113d3",
  measurementId: "G-Y60078TMWJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore()
export const rf = ref(storage,'logo')
