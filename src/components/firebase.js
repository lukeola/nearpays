import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAngkLppSlFmKfmumXujikngalETvHDA7Q",
  authDomain: "nearpaysauth.firebaseapp.com",
  projectId: "nearpaysauth",
  storageBucket: "nearpaysauth.appspot.com",
  messagingSenderId: "1033412182905",
  appId: "1:1033412182905:web:32537eec987bfa3d5f25a8",
  measurementId: "G-96WGZJ6QP2"
})

export const auth = app.auth()
export default app
