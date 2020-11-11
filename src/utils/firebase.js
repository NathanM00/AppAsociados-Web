import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_TrzxIbK9x99zXAZh4J_a5iULKLO0OQI",
  authDomain: "apppdg-7c6bc.firebaseapp.com",
  databaseURL: "https://apppdg-7c6bc.firebaseio.com",
  projectId: "apppdg-7c6bc",
  storageBucket: "apppdg-7c6bc.appspot.com",
  messagingSenderId: "405978238616",
  appId: "1:405978238616:web:d58743c8f5a091b0a0caed",
  measurementId: "G-5MN0ZMXNLZ"
}

firebase.initializeApp(firebaseConfig);

export default firebase;