import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnzh1QpiTXIiGh8yCV8s4ANs--WMcJteg",
  authDomain: "marxio-43.firebaseapp.com",
  projectId: "marxio-43",
  storageBucket: "marxio-43.firebasestorage.app",
  messagingSenderId: "286225156632",
  appId: "1:286225156632:web:33df79d70c318f5d03d16d",
  measurementId: "G-M4TG8K22HF"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const analytics = isSupported().then((yes) =>
  yes ? getAnalytics(app) : null
);
export const db = getFirestore(app, "marxio");
export const auth = getAuth(app);
export const storage = getStorage(app);