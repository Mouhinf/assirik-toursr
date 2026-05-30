import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1jPha-CH4ivSodFWpknohK86rjTyBB-E",
  authDomain: "assirik-tours-60545.firebaseapp.com",
  projectId: "assirik-tours-60545",
  storageBucket: "assirik-tours-60545.firebasestorage.app",
  messagingSenderId: "1041609895784",
  appId: "1:1041609895784:web:80fe701957fad6f735b0dd",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
