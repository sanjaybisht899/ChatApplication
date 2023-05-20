import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHh9XyHaXPva_vJvhEbrCm7OtFq0s1_DI",
  authDomain: "chat-a49f9.firebaseapp.com",
  projectId: "chat-a49f9",
  storageBucket: "chat-a49f9.appspot.com",
  messagingSenderId: "107489815362",
  appId: "1:107489815362:web:520dc7f1f75d8658eab6db"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
