// Blog.js
import React from "react";
import blogPosts from "../blogData";
import CodeBlock from "../CodeBlock";
import { useParams } from "react-router-dom";
import "../styles/Blog.css"; // Import the Blog.css styles

function NewlineText({ text }) {
	const newText = text.split("\n").map((str, index, array) => (
		<React.Fragment key={index}>
			<p className="text-content">{str}</p>
		</React.Fragment>
	));

	return <>{newText}</>;
}

function Blog() {
	const { postId } = useParams();
	const post = blogPosts.find((p) => p.id === postId);

	if (!post) return <p>Post not found!</p>;

	return (
		<div className="blog-post-container">
			<h1>{post.title}</h1>
			{post.content.map((item, i) => {
				if (item.type === "text") {
					return <NewlineText key={i} text={item.value} />;
				} else if (item.type === "code") {
					return <CodeBlock key={i} code={item.value} />;
				} else {
					return null;
				}
			})}
		</div>
	);
}

export default Blog;
