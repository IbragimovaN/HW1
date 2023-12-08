// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDqPjFMZCIBk7M2TQuYF3ISFW2k_xy01cw",
	authDomain: "productsproject-2d282.firebaseapp.com",
	projectId: "productsproject-2d282",
	storageBucket: "productsproject-2d282.appspot.com",
	messagingSenderId: "927967544329",
	appId: "1:927967544329:web:ea6e6c686de7ee7b40a4d8",
	databaseURL:
		"https://productsproject-2d282-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
