import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../blogData";
import "../styles/Navbar.css";

function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<div>
				{blogPosts.map((post) => (
					<Link key={post.id} to={`/blog/${post.id}`}>
						{post.title}
					</Link>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
