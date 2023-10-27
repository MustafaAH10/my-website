import React from "react";
import "../styles/Home.css";

function Home() {
	return (
		<div>
			<h1>About Me</h1>
			<img
				src="/displayPicture.jpg"
				style={{ width: "200px", height: "auto" }}
			/>
			<p>
				Hi! I'm Mustafa - a Year 3 Computer Engineering undergraduate at the
				National University of Singapore! Welcome to my personal website. Here
				you'll find more information about me and my interests, along with a
				blog I started to document my learnings about Machine Learning and more
				specifically, NLP which I have a keen interest in.
			</p>

			{/* You can add more information about yourself here */}
		</div>
	);
}

export default Home;
