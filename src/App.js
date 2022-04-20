import './App.css';
import React, { useState } from "react";
import Welcome from "./pages/Welcome";
import LoginPage from "./pages/auth/LoginPage";
import PostEditor from "./pages/editor/PostEditor";
import PostView from "./pages/posts/PostView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Welcome />} />
					<Route path="login" element={<LoginPage/>} />
					<Route path="editor/:uuid" element={<PostEditor />}/>
					<Route path="posts/:slug" element={<PostView />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
