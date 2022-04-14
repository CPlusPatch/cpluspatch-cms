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

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Set default values for banner-url, categories, slug and uuid
		const bannerUrl = "https://images.unsplash.com/photo-1556740721-d7e8a6d0f7c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
		const categories = ["category1", "category2"];
		const slug = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString() + "-" + slugify(e.target.title.value).toLowerCase();
		const uuid = uuidv4();
		
		const userData = await getDoc(doc(database, 'users', userLoggedIn.uid));
		await setDoc(doc(collection(database, 'posts')), {
			author: userLoggedIn.uid,
			"banner-url": bannerUrl,
			blocks: "{}",
			categories: categories,
			description: e.target.description.value,
			slug: slug,
			title: e.target.title.value,
			uuid: uuid,
			visibility: "public",
		});
		
	};

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="title" name="title"></input>
			<input placeholder="description" name="description"></input>
			<input placeholder="content" name="content"></input>
			<button type="submit">Submit</button>
		</form>
	);
}

export default PostCreator;