import './App.css';
import React, { useState } from "react";
import Welcome from "./pages/blog/Welcome";
import LoginPage from "./pages/blog/auth/LoginPage";
import PostEditor from "./pages/blog/editor/PostEditor";
import PostView from "./pages/blog/posts/PostView";
import FrontPage from './pages/welcome/FrontPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from './pages/error-404';

function App() {
	return (
		<BrowserRouter>
			<Routes>
			<Route path="*" element={<Error404 />} />
				<Route path="/">
					<Route index element={<FrontPage />} />
					<Route path="blog">
						<Route index element={<Welcome />} />
						<Route path="login" element={<LoginPage/>} />
						<Route path="editor/:uuid" element={<PostEditor />}/>
						<Route path="posts/:slug" element={<PostView />}/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
