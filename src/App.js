import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import "./styles/global.css";

function App() {
	return (
		<Router>
			<div className="app-container">
				<Navbar />
				<div className="home-container">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
				<div className="content-container">
					<Routes>
						<Route path="/blog/:postId" element={<Blog />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
