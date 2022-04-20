// Adds a post editor based on EditorJS that creates new posts and saves them to the Firestore database
import React, { useState, useEffect } from 'react';
import database from "../../firebase";
import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import PropTypes from "prop-types"
import slugify from 'slugify';
import {v4 as uuidv4} from 'uuid';
import usePersistedState from "../../custom/PersistedState";

function PostCreator() {
	const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});

	const handleSubmit = async () => {
		const slug = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString() + "-" + slugify("New post").toLowerCase();
		const uuid = uuidv4();
		
		const userData = await getDoc(doc(database, 'users', userLoggedIn.uid));
		await setDoc(doc(collection(database, 'posts')), {
			author: userLoggedIn.uid,
			"banner-url": "",
			blocks: '{"time":1649917379711,"blocks":[],"version":"2.23.2"}',
			categories: [],
			description: "",
			slug: slug,
			title: "New post",
			uuid: uuid,
			visibility: "private",
			date: Date.now(),
		});
		window.location.href = "/editor/" + uuid;
		
	};

	return (
		<button onClick={handleSubmit} className="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none fixed bottom-10 right-10">
          <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601 C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399 C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
	);
}

export default PostCreator;