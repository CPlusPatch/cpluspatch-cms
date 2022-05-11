import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import database from "../../firebase";
import usePersistedState from "../../custom/PersistedState";
import Blocks from 'editorjs-blocks-react-renderer';
import AppNavbar from "../../components/nav/AppNavbar";


function PostView() {
	const { slug } = useParams();
	const [userData, setUserData] = useState({
		name: "Loading...",
		role: "Loading...",
		avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y",
	});
	const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});
	const [postData, setPostData] = useState({
		id: "",
		data: {
			title: "",
			visibility: "public",
			description: "",
			blocks: '{"time":1649917379711,"blocks":[],"version":"2.23.2"}',
		}
	});

	
	useEffect(() => {
		async function fetchPostData() {
			const q = query(collection(database, "posts"), where("slug", "==", slug));
			const querySnapshot = await getDocs(q);
			await querySnapshot.forEach((doc) => {
				setPostData({id: doc.id, data: doc.data()});
			});
		}
		fetchPostData();
		async function fetchUserData() {
			const data = (await getDoc(doc(database, 'users', userLoggedIn.uid))).data();
			setUserData({
				role: data.role,
				name: data.name,
				avatar: data.avatar
			});
		}
		fetchUserData();
	}, []);

	return (
		<div className="px-4 mx-5 sm:px-6 xl:px-0 md:mx-48">
			<div className="flex flex-col justify-between h-screen">
				<AppNavbar/>
				<div className="flex justify-center w-full h-full">
					<style>{"\
						.prose :where(img):not(:where([class~=\"not-prose\"] *)) {\
							margin-top: 0;\
							margin-bottom: 0;\
						}\
					"}</style>
					<div className="w-full h-full prose md:px-0 md:w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 max-w-none">
						<div className="w-full h-full px-4">
							<Blocks data={JSON.parse(postData.data.blocks)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PostView