import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXoQoe1WOjmUt5WBFk0AkMSQEgPmkup94",
  authDomain: "proyectocoder-283de.firebaseapp.com",
  projectId: "proyectocoder-283de",
  storageBucket: "proyectocoder-283de.appspot.com", // corregido el dominio
  messagingSenderId: "211193441141",
  appId: "1:211193441141:web:0c3f085b79dbf18801413c",
  measurementId: "G-0842CVH86T"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
