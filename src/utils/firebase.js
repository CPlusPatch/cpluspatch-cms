/*
Methods defined here:

LOGIN
 - isUserLoggedIn
 - getUser
 - setUserField
 - deleteUser
 - getUserField
 - createUser

POSTS
 - getPosts
 - getPost
 - createPost
 - updatePost
 - deletePost
*/
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, query, collection, setDoc, orderBy, getFirestore, getDocs, ref } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import persistedState from "./PersistedState";

const firebaseConfig = {
	apiKey: "AIzaSyAevlqkJ7t1R3LqKils11xANovT6WYNPpw",
	authDomain: "cpluspatch-cms.firebaseapp.com",
	projectId: "cpluspatch-cms",
	storageBucket: "cpluspatch-cms.appspot.com",
	messagingSenderId: "903884581245",
	appId: "1:903884581245:web:7aed3fd441ee66348c4414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export default {
	app: app,
	storage: storage,
	isUserLoggedIn: () => {
		let userLoggedIn = persistedState.getState("user", {});
		return JSON.stringify(userLoggedIn) !== "{}";
	},
	getUser: async () => {
		let userLoggedIn = persistedState.getState("user", {});
		return JSON.stringify(userLoggedIn) !== "{}" ? userLoggedIn : false;
	},
	getUserData: async (user) => {
		// Takes a user ID and returns the user's data
		return (await getDoc(doc(db, 'users', user))).data();
	},
	setUserField: async (field, value) => {
		let userLoggedIn = persistedState.getState("user", {});
		await setDoc(doc(db, 'users', userLoggedIn.uid), {[field]: value});
	},
	signOut: async () => {
		await auth.signOut();
		return persistedState.setState("user", {});
	},
	logIn: async (email, password) => {
		try {
			var user = await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			return false
		}
		
		persistedState.setState("user", user.user);
		return user.user;
	},
	getPosts: async (whereData = false) => {
		const q = whereData ? query(collection(db, 'posts'), whereData, orderBy("date", "desc")) : query(collection(db, 'posts'), orderBy("date", "desc"));
		let posts = [];

		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			posts.push({
				id: doc.id,
				data: doc.data()
			});
		});
		return posts;
	},
	getPostByFields: async (...fields) => {
		let posts = [];
		const querySnapshot = await getDocs(query(collection(db, 'posts'), ...fields));
		querySnapshot.forEach((doc) => {
			posts.push({
				id: doc.id,
				data: doc.data()
			});
		});
		return posts;
	},
	setPostField: async (postId, field, value) => {
		console.log(postId, field, value);
		return await setDoc(doc(collection(db, 'posts'), postId), {
			[field]: value
		}, { merge: true });
	},
	addPost: async (postData) => {
		await setDoc(doc(collection(db, 'posts')), postData);
	},
};