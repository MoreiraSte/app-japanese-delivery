import firebase from 'firebase'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyAPRF1Zsnt5krkBl4C7f0eYP2AJXrFgcHE",
  authDomain: "japanesedelivery-f850b.firebaseapp.com",
  projectId: "japanesedelivery-f850b",
  storageBucket: "japanesedelivery-f850b.appspot.com",
  messagingSenderId: "871949043089",
  appId: "1:871949043089:web:b9f86ba45ffaf69ea10630"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase