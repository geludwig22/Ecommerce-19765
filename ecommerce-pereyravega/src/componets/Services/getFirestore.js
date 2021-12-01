import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAVg1sQR4v5yUziu3D3pr7vddfk1VCmj4o",
    authDomain: "ecommerce-pereyravega.firebaseapp.com",
    projectId: "ecommerce-pereyravega",
    storageBucket: "ecommerce-pereyravega.appspot.com",
    messagingSenderId: "172749181487",
    appId: "1:172749181487:web:cbdde9ac59c8f76349acda"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore() {
    return firebase.firestore(app)
  }