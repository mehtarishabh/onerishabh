import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDXs3HnXv8IdR-_SHTNL48ZxsFzFqxQ0Yw",

  authDomain: "onerishabh-4cf13.firebaseapp.com",

  projectId: "onerishabh-4cf13",

  storageBucket: "onerishabh-4cf13.appspot.com",

  messagingSenderId: "52209513434",

  appId: "1:52209513434:web:14545c271a04d413a746e3",

  measurementId: "G-59VT98TBZL"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

