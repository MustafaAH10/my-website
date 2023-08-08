import React from "react";

function Blog() {
	// You can replace this with data fetched from an API or your database
	const blogPosts = [
		{ title: "First Post", content: "Content of the first post." },
		{ title: "Second Post", content: "Content of the second post." },
	];

	return (
		<div>
			<h1>Blog</h1>
			{blogPosts.map((post, index) => (
				<div key={index}>
					<h2>{post.title}</h2>
					<p>{post.content}</p>
				</div>
			))}
		</div>
	);
}

export default Blog;
