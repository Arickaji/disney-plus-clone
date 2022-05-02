import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC7SLSEobjuulMoml_TK6246LHAhs7iEjk",
    authDomain: "disneyplus-clone-8da9f.firebaseapp.com",
    projectId: "disneyplus-clone-8da9f",
    storageBucket: "disneyplus-clone-8da9f.appspot.com",
    messagingSenderId: "277597282881",
    appId: "1:277597282881:web:a3ea68bce750495c741cc0",
    measurementId: "G-2GGF675ZY4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage().ref();
const storage = getStorage(firebaseApp);

export { auth, provider, storage};
export default db;