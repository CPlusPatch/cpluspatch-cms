import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "cpluspatch-cms.firebaseapp.com",
	projectId: "cpluspatch-cms",
	storageBucket: "cpluspatch-cms.appspot.com",
	messagingSenderId: "903884581245",
	appId: "1:903884581245:web:7aed3fd441ee66348c4414"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

export { auth };
export default getFirestore(firebase);