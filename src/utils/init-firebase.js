import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwn9Uqn57SNLwUv7mzz6gn2ongPm_e6Kk",
  authDomain: "food-delivery-96570.firebaseapp.com",
  projectId: "food-delivery-96570",
  storageBucket: "food-delivery-96570.appspot.com",
  messagingSenderId: "432017649732",
  appId: "1:432017649732:web:f427064fab2c04cc8acc11",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
