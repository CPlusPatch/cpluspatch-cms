import React, { useState, useEffect } from 'react';
import database from "../../firebase";
import { doc, getDoc, query, onSnapshot, collection, where, orderBy } from "firebase/firestore";
import PropTypes from "prop-types"
import usePersistedState from '../../custom/PersistedState';

function PostCard(props) {
	const [data, setData] = useState({});

	useEffect(() => {
		async function fetchUserData() {
			const author = props.author;
			const userData = (await getDoc(doc(database, 'users', author))).data();
			setData(userData);
		}
		fetchUserData();
	}, []);

	return (
		<article>
		<div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
			<dl>
				<dt className="sr-only">Published on</dt>
				<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
					<time dateTime="2021-08-07T15:32:14.000Z">August 7, 2021</time>
				</dd>
			</dl>
			<div className="space-y-5 xl:col-span-3">
				<div className="space-y-6">
					<div>
						<h2 className="text-2xl font-bold leading-8 tracking-tight">
							{props.role == "admin" ?
							<a className="text-gray-900 dark:text-gray-100" href={"/blog/editor/" + props.uuid}>{props.title}</a>
							:
							<a className="text-gray-900 dark:text-gray-100" href={"/blog/posts/" + props.slug}>{props.title}</a>
							}
						</h2>
								
						<div className="flex flex-wrap"><a
								className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
								href="/tags/next-js">category1</a><a
								className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
								href="/tags/tailwind">css</a><a
								className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
								href="/tags/guide">amogos</a></div>
					</div>
					<div className="prose text-gray-500 max-w-none dark:text-gray-400">{props.desc}</div>
				</div>
				<div className="text-base font-medium leading-6"><a
						className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
						href={"/blog/posts/" + props.slug}>Read more →</a></div>
			</div>
		</div>
	</article>
	);
}
PostCard.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	uuid: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
}

function Posts() {
	const [posts, setPosts] = useState([]);
	const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});
	const [userData, setUserData] = useState({role: "default"});

	useEffect(() => {
		async function fetchUserDataAndPosts() {
			var tmpUserRole = "default;" // For some reason useState doesn't work here
			if (typeof userLoggedIn.uid != "undefined") {
				const data = (await getDoc(doc(database, 'users', userLoggedIn.uid))).data();
				tmpUserRole = data.role;
				setUserData({role: data.role});
			}
			var whereData = where('visibility', '==', "public"); // Default value if signed out
			if (tmpUserRole == "user") whereData = where('visibility', "in", ["public", "restricted"]);
			if (tmpUserRole == "admin") whereData = where('visibility', "in", ["public", "restricted", "private"]);
			const q = query(collection(database, 'posts'), whereData, orderBy("date", "desc"));
			onSnapshot(q, (querySnapshot) => {
				setPosts(querySnapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data()
				})))
			})
		}
		fetchUserDataAndPosts();
    }, []);

	return (
		<ul className="divide-y divide-gray-200 dark:divide-gray-700">	
			{posts.map(post => {
					return (
					<li className="py-12" key={post.id}>
						<PostCard
							id={post.id}
							desc={post.data.description}
							title={post.data.title}
							author={post.data.author}
							uuid={post.data.uuid}
							slug={post.data.slug}
							role={userData.role}
						/>
					</li>
					);
				})}
		</ul>
	);
}

export default Posts;