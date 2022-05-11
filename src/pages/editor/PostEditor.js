import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import database, { storage } from "../../firebase";
import EditorJS from '@editorjs/editorjs';
import List from '@editorjs/list';
import Image from '@editorjs/image'
import Header from '@editorjs/header'
import Delimiter from '@editorjs/delimiter'
import CodeTool from "@editorjs/code";
import EditorNavbar from "./EditorNavbar";
import usePersistedState from "../../custom/PersistedState";
import EditorSettingsModal from "../../components/editor/modals/EditorSettingsModal";
import Undo from 'editorjs-undo';
import DragDrop from "editorjs-drag-drop";
import slugify from 'slugify';


function PostEditor() {
	const { uuid } = useParams();
	const [userData, setUserData] = useState({
		name: "Loading...",
		role: "Loading...",
		avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y",
	});
	const [settingsModal, setSettingsModal] = useState(<></>);
	const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});
	var editorId = "";
	const [postData, setPostData] = useState({
		id: "",
		data: {
			title: "",
			visibility: "public",
			description: "",
		}
	});
	
	const handleChange = async (editor) => {
		console.log("Updating")
		const savedData = await editor.saver.save();
		await setDoc(doc(collection(database, 'posts'), editorId), {
			blocks: JSON.stringify(savedData)
		}, { merge: true });
	}

	const handleTitleChange = async (e) => {
		const slug = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString() + "-" + slugify(e.target.value).toLowerCase();
		await setDoc(doc(collection(database, 'posts'), postData.id), {
			title: e.target.value,
			slug: slug,
		}, { merge: true });
	}

	const handleVisibilityChange = async (obj) => {
		await setDoc(doc(collection(database, 'posts'), postData.id), {
			visibility: obj.type,
		}, { merge: true });
		setPostData({ ...postData, data: { ...postData.data, visibility: obj.type } });
	}

	const handleDescriptionChange = async (e) => {
		await setDoc(doc(collection(database, 'posts'), postData.id), {
			description: e.target.value,
		}, { merge: true });
		setPostData({ ...postData, data: { ...postData.data, description: e.target.value } });
	}

	const handleOpenSettingsModal = () => {
		const [v, d] = [postData.data.visibility, postData.data.description];
		setSettingsModal(
			<EditorSettingsModal key={Math.round(Math.random() * 1000000)} onVisibilityChange={handleVisibilityChange} onDescriptionChange={handleDescriptionChange} visibility={v} description={d}/>
		);
	}
	
	useEffect(() => {
		async function fetchPostData() {
			const q = query(collection(database, "posts"), where("uuid", "==", uuid));
			const querySnapshot = await getDocs(q);
			await querySnapshot.forEach((doc) => {
				editorId = doc.id;
				setPostData({id: doc.id, data: doc.data()});
				let editor = new EditorJS({
					holder: 'editor',
					tools: {
						list: {
							class: List,
							inlineToolbar: true
						},
						image: {
							class: Image,
							config: {
								uploader: {
									uploadByFile(file){
										const storageRef = ref(storage, "uploads/" + file.name + "-" + Date.now());
										// 'file' comes from the Blob or File API
										return uploadBytes(storageRef, file).then(async (snapshot) => {
											return {
												success: 1,
												file: {
													url: await getDownloadURL(snapshot.ref),
												}
											};
										});
									},
							
									uploadByUrl(url){
										// no
									}
								}
							}
						},
						header: Header,
						delimiter: Delimiter,
						code: CodeTool
					},
					data: JSON.parse(doc.data().blocks),
					onChange: handleChange,
					onReady: () => {
						new Undo({ editor });
						new DragDrop(editor);
					},
				});
			});
		}
		fetchPostData();
		async function fetchUserData() {
			const data = (await getDoc(doc(database, 'users', userLoggedIn.uid))).data();
			setUserData({
				role: "Admin", // Will always be Admin, since only admins can make posts
				name: data.name,
				avatar: data.avatar
			});
		}
		fetchUserData();
	}, []);

	return (
		<>
			<EditorNavbar
				name={userData.name}
				role={userData.role}
				avatar={userData.avatar}
				title={postData.data.title}
				onTitleChange={handleTitleChange}
				openSettingsModal={handleOpenSettingsModal}/>
			<div className="flex justify-center w-full h-full mt-16">
				<style>{"\
					.prose :where(img):not(:where([class~=\"not-prose\"] *)) {\
						margin-top: 0;\
						margin-bottom: 0;\
					}\
				"}</style>
				<script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
				<div className="w-full h-full px-4 pt-8 prose shadow-lg md:px-0 md:w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 max-w-none">
					<div id="editor"></div>
				</div>
			</div>
			{settingsModal}
		</>
	);
}

export default PostEditor