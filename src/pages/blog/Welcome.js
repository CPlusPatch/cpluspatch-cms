import React, { useState } from "react";
import Footer from '../../components/Footer';
import Posts from "../../components/welcome/Posts.js";
import usePersistedState from "../../custom/PersistedState";
import PostCreator from "./editor/PostCreator";
import AppNavbar from "../../components/nav/AppNavbar";

function Welcome() {
	const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});

	return (
		<div className="px-4 mx-5 sm:px-6 xl:px-0 md:mx-48">
			<div className="flex flex-col justify-between h-screen">
				<AppNavbar/>
				<main className="mb-auto">
					<div className="divide-y divide-gray-200 dark:divide-gray-700">
						<div className="pt-6 pb-8 space-y-2 md:space-y-5">
							<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
								Latest</h1>
							<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">The latest (and worst) of my shitposts</p>
						</div>
						<Posts />
						{JSON.stringify(userLoggedIn) == "{}" ? null : <PostCreator />}
					</div>
				<Footer/>
				</main>
			</div>
		</div>
	);
}

export default Welcome;
