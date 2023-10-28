// Blog.js
import React from "react";
import blogPosts from "../blogData";
import { useParams } from "react-router-dom";
import "../styles/Blog.css"; // Import the Blog.css styles

function Blog() {
	const { postId } = useParams();
	const post = blogPosts.find((p) => p.id === postId);

	if (!post) return <p>Post not found!</p>;

	return (
		<div className="blog-post-container">
			<h1>{post.title}</h1>
			{post.content}
		</div>
	);
}

export default Blog;
