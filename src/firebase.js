import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
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

<>
<pre>{process.env.REACT_PUBLIC_API_KEY}</pre>
<pre>{process.env.REACT_PUCIC_AUTH_DOMAIN}</pre>
<pre>{process.env.REACT_PUBLIC_PROJCT_ID}</pre>
<pre>{process.env.REACT_PUBLIC_STORAGE_BUCKET}</pre>
<pre>{process.env.REACT_PUBLIC_MESSAGE_SENDER_ID}</pre>
<pre>{process.env.REACT_PUBLIC_APP_ID}</pre>
<pre>{process.env.REACT_PUBLIC_MEASUREMENT}</pre>
</>


const firebaseConfig = {
  apiKey: fetch('https://awesome.api.io?api-key=${process.env.REACT_PUBLIC_API_KEY '),
  authDomain: fetch('https://awesome.api.io?api-key=${process.env.REACT_PUCIC_AUTH_DOMAIN'),
  projectId: fetch('https://awesome.api.io?api-key=${process.env..REACT_PUBLIC_PROJCT_ID'),
  storageBucket: fetch('https://awesome.api.io?api-key=${process.env.REACT_PUBLIC_STORAGE_BUCKET'),
  messagingSenderId: fetch('https://awesome.api.io?api-key=${process.env.REACT_PUBLIC_MESSAGE_SENDER_ID'),
  appId: fetch('https://awesome.api.io?api-key=${process.env.REACT_PUBLIC_APP_ID'),
  measurementId: fetch('https://awesome.api.io?api-key=${process.env.RREACT_PUBLIC_MEASUREMENT')
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
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
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};