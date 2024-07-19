// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDXIxVVWihaWlh7yfnrqCzz5mgLtJo1W3o",
	authDomain: "insta-clone-dbe1d.firebaseapp.com",
	projectId: "insta-clone-dbe1d",
	storageBucket: "insta-clone-dbe1d.appspot.com",
	messagingSenderId: "343424238139",
	appId: "1:343424238139:web:d4ec367a837c954326121e",
	measurementId: "G-ZP0TXGMYVH",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }
