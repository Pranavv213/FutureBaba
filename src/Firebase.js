import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAs9TBekiBSHMj1hLGOAL3gku_3jHkODfA",
    authDomain: "reels-2def6.firebaseapp.com",
    projectId: "reels-2def6",
    storageBucket: "reels-2def6.appspot.com",
    messagingSenderId: "299989184620",
    appId: "1:299989184620:web:db4a4564b52ce872416849"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      window.location.reload(true)
    })
    .catch((error) => {
      console.log(error);
    });
};