import React, { useState } from "react";
import Sidebar from '../components/welcome/Sidebar';
import Footer from '../components/Footer';
import Posts from "../components/welcome/Posts.js";
import usePersistedState from "../custom/PersistedState";
import database, { auth } from "../firebase";
import { signOut } from "@firebase/auth";
import PostEditor from "./editor/PostEditor";

function Welcome() {
	const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});

	return (
		<div className="h-full bg-gray-100 app font-roboto">
			<nav className="px-6 py-4 bg-white shadow">
				<div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
					<div className="flex items-center justify-between">
						<div>
							<a href="#" className="text-xl font-bold text-gray-800 md:text-2xl">CPlusPatch <span className="text-blue-500">CMS</span></a>
						</div>
						<div>
							<button type="button" className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
								<svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
									<path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
								</svg>
							</button>
						</div>
					</div>
					<div className="flex-col hidden md:flex-row md:-mx-4 md:block">
						<a href="#" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Home</a>
						{JSON.stringify(userLoggedIn) == "{}" ? <SignInButton/> : <SignOutButton/>}
					</div>
				</div>
			</nav>
			<div className="px-6 py-8">
				<div className="container flex justify-between mx-auto">
					<div className="w-full lg:w-8/12">
						<div className="flex items-center justify-between">
							<h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
							<div>
								<select className="block px-2 py-2 text-gray-700 bg-gray-300 rounded-lg focus:outline-none md:py-3">
									<option>Latest</option>
									<option>Last Week</option>
								</select>
							</div>
						</div>
						<Posts />
					</div>
					<Sidebar />
				</div>
			</div>
			<Footer/>
			<PostEditor />
			<CreatePostButton />
		</div>
	);
}

function CreatePostButton() {
	return (
		<button className="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none fixed bottom-10 right-10">
          <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601 C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399 C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
	);
}

function SignOutButton() {
	const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				alert("You are now signed out");
				setUserLoggedIn({});
				window.location.pathname = "/";
			})
			.catch((error) => {
				alert("An error ocurred");
				console.log(error);
			});
	};
	return userLoggedIn && (
		<button onClick={handleSignOut} type="button" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Sign out</button>
	)
}

function SignInButton() {
	const redirectToSignInPage = () => {
		window.location.pathname = "/login";
	};
	return (
		<button onClick={redirectToSignInPage} type="button" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Sign in</button>
	);
}

export default Welcome;
