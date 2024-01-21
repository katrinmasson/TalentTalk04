import { initializeApp, FirebaseApp } from "firebase/app";
import { getDatabase, Database } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBEeqZq5OKjBp7kaYcgbN8QrOy9rSSpW3I",
  authDomain: "talenttalk-6886.firebaseapp.com",
  projectId: "talenttalk-6886",
  storageBucket: "talenttalk-6886.appspot.com",
  messagingSenderId: "1002623803932",
  appId: "1:1002623803932:web:ce25dea0509d5175ea35d9",
  databaseURL: "https://talenttalk-6886-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const database: Database = getDatabase(app);

export { database };
