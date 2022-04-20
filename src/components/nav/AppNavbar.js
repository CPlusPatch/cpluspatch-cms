import React from "react";
import usePersistedState from "../../custom/PersistedState";
import database, { auth } from "../../firebase";
import { signOut } from "@firebase/auth";

function AppNavbar() {
	const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});

	return (
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
					<a href="/" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Home</a>
					{JSON.stringify(userLoggedIn) == "{}" ? <SignInButton/> : <SignOutButton/>}
				</div>
			</div>
		</nav>
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

export default AppNavbar;