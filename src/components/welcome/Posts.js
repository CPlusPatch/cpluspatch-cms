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
		<div className="mt-6">
			<div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
				<div className="flex items-center justify-between"><span className="font-light text-gray-600">Jun 1, 2020</span><a href="#"
						className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
				</div>
				<div className="mt-2">
					<div className="flex flex-row items-center">
						<a href={"/posts/" + props.slug} className="text-2xl font-bold text-gray-700 hover:underline">{props.title}</a>
						{props.role == "admin" ?
						<a href={"/editor/" + props.uuid} className="ml-3">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
								<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
							</svg>
						</a>
						: null}
					</div>
					<div className="mt-2 prose text-gray-600">{props.desc}</div>
				</div>
				<div className="flex items-center justify-between mt-4"><a href="#"
						className="text-blue-500 hover:underline">Read more</a>
					<div><a href="#" className="flex items-center"><img
								src={data.avatar}
								alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"></img>
							<h1 className="font-bold text-gray-700 hover:underline">{data.name}</h1>
						</a></div>
				</div>
			</div>
		</div>
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
		<div>
			{posts.map(post => {
				return (
				<PostCard
					id={post.id}
					key={post.id}
					desc={post.data.description}
					title={post.data.title}
					author={post.data.author}
					uuid={post.data.uuid}
					slug={post.data.slug}
					role={userData.role}
				/>
				)
			})}
		</div>
	);
}

export default Posts;