
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAYEJPL8IOWm3zQgvMqM2EWAQz5XU6FfY0",
  authDomain: "blog-app-3f82d.firebaseapp.com",
  projectId: "blog-app-3f82d",
  storageBucket: "blog-app-3f82d.firebasestorage.app",
  messagingSenderId: "139848470761",
  appId: "1:139848470761:web:2d0110109be0045759e078",
  measurementId: "G-HCW5VPPH9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);




