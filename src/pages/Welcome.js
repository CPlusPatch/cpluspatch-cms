import React, { useState } from "react";
import Sidebar from '../components/welcome/Sidebar';
import Footer from '../components/Footer';
import Posts from "../components/welcome/Posts.js";
import usePersistedState from "../custom/PersistedState";
import database, { auth } from "../firebase";
import { signOut } from "@firebase/auth";
import PostCreator from "./editor/PostCreator";
import AppNavbar from "../components/nav/AppNavbar";

function Welcome() {
	const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});

	return (
		<div className="h-full bg-gray-100 app font-roboto">
			<AppNavbar/>
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
						{JSON.stringify(userLoggedIn) == "{}" ? null : <PostCreator />}
						<Posts />
					</div>
					<Sidebar />
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default Welcome;
