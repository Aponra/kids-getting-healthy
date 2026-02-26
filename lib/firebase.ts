import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8Rpili_vYbwOH1KMPW_f-yEkzOq_V4lc",
  authDomain: "kids-6c283.firebaseapp.com",
  projectId: "kids-6c283",
  storageBucket: "kids-6c283.firebasestorage.app",
  messagingSenderId: "583396028108",
  appId: "1:583396028108:web:059c0573b73c864ec79c69",
  measurementId: "G-78ZBF8X6R8",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
