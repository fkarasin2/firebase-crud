import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBt4VEf5nTHsYpqPJ2KX2IbOmgdV3uPqR4",
    authDomain: "fir-crud-7afc4.firebaseapp.com",
    projectId: "fir-crud-7afc4",
    storageBucket: "fir-crud-7afc4.appspot.com",
    messagingSenderId: "955446734430",
    appId: "1:955446734430:web:9ff4ec050b85bf665f8ecf"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth();
