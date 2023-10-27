import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../blogData";
import "../styles/Navbar.css";

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<button
				className="navbar-toggle"
				onClick={() => setIsNavOpen(!isNavOpen)}
			>
				☰
			</button>
			<nav className={`navbar ${isNavOpen ? "open" : ""}`}>
				<Link to="/">Home</Link>
				<div>
					{blogPosts.map((post) => (
						<Link
							key={post.id}
							to={`/blog/${post.id}`}
							onClick={() => setIsNavOpen(false)}
						>
							{post.title}
						</Link>
					))}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
