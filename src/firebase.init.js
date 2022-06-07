// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
//   appId: process.env.REACT_APP_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyAOQ-P7fPaUQKZ5oOqAHeB_K_QJOF7nSkw",
  authDomain: "doctor-uncle-fe161.firebaseapp.com",
  projectId: "doctor-uncle-fe161",
  storageBucket: "doctor-uncle-fe161.appspot.com",
  messagingSenderId: "99699731573",
  appId: "1:99699731573:web:5f67410346e602db7f5c3c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const auth=getAuth(app) 
export default auth