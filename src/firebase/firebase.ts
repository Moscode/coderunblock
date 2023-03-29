import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBTPqOOACRpi6astU66OwLkyJDdyoc7RuY",
  authDomain: "coderunblock-dev.firebaseapp.com",
  projectId: "coderunblock-dev",
  storageBucket: "coderunblock-dev.appspot.com",
  messagingSenderId: "1513682182",
  appId: "1:1513682182:web:afb6ec7aef411914a41a87",
  measurementId: "G-B2QRX8C0GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)