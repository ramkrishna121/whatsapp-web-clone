import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAP3cSUPsfQJb41AQRpVZ9T9zo0AN9Bj8",
  authDomain: "whatsapp-web-clone-f27fe.firebaseapp.com",
  databaseURL: "https://whatsapp-web-clone-f27fe.firebaseio.com",
  projectId: "whatsapp-web-clone-f27fe",
  storageBucket: "whatsapp-web-clone-f27fe.appspot.com",
  messagingSenderId: "752436582513",
  appId: "1:752436582513:web:0f5a8ddf49eded1100a3d0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
