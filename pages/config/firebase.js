import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAPRF1Zsnt5krkBl4C7f0eYP2AJXrFgcHE",
  authDomain: "japanesedelivery-f850b.firebaseapp.com",
  projectId: "japanesedelivery-f850b",
  storageBucket: "japanesedelivery-f850b.appspot.com",
  messagingSenderId: "871949043089",
  appId: "1:871949043089:web:b9f86ba45ffaf69ea10630"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res)
    });
  } catch (err) {

    console.error(err);
    alert(err.message);
    return false
  }
};
const registerWithEmailAndPassword = async ( email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // await addDoc(collection(db, "users"), {
    //   uid: user.uid,
    //   authProvider: "local",
    //   email,
    // });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  return signOut(auth);
};
export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  storage,
};