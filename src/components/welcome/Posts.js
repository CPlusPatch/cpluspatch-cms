import React, { useState, useEffect } from 'react';
import database from "../../firebase";
import { doc, getDoc, query, onSnapshot, collection, where } from "firebase/firestore";
import PropTypes from "prop-types"

function PostCard(props) {
	const [data, setData] = useState({});

	useEffect(() => {
		async function fetchUserData() {
			const author = props.author;
			const userData = (await getDoc(doc(database, 'users', author))).data();
			data.name = userData.name;
			data.avatar = userData.avatar;
		}
		fetchUserData();
	}, [data, setData]);

	return (
		<div className="mt-6">
			<div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
				<div className="flex items-center justify-between"><span className="font-light text-gray-600">Jun 1, 2020</span><a href="#"
						className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
				</div>
				<div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">{props.title}</a>
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
	name: PropTypes.string,
}

function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const q = query(collection(database, 'posts'), where('visibility', '==', "public"));
        onSnapshot(q, (querySnapshot) => {
			setPosts(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})))
		})
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
				/>
				)
			})}
		</div>
	);
}

export default Posts;