import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Welcome from "./pages/Welcome";
import LoginPage from "./pages/auth/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Welcome />} />
					<Route path="login" element={<LoginPage/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
