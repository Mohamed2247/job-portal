import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDAM2-V50uDYvnKgL-Y8XOT_51v743nitM",
  authDomain: "job-portal-9514a.firebaseapp.com",
  databaseURL: "https://job-portal-9514a-default-rtdb.firebaseio.com",
  projectId: "job-portal-9514a",
  storageBucket: "job-portal-9514a.appspot.com",
  messagingSenderId: "277570197878",
  appId: "1:277570197878:web:f37d7fafc024c14c6d0257",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
