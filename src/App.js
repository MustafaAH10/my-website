import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</Router>
	);
}

export default App;
