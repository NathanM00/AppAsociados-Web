import firebase from 'firebase';
import "firebase/storage";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const deb = firebaseApp.database();

export default firebase;