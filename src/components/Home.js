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

			<h2>Experience Timeline</h2>
			<div className="timeline">
				{/* Sample Timeline Items */}
				<div className="timeline-item">
					<h3>Software Engineer Intern at Curium</h3>
					<div className="timeline-date">May 2023 - October 2023</div>
					<br />
					<div>
						• Built an online interactive software to help clients visualise
						calibrated sensor data in a 3D space by leveraging the company’s
						proprietary static and dynamic sensor calibration technologies -
						Front-end development using React and Three.js, Back-end development
						using Django and GraphQL, Cloud deployment using AWS S3, EC2, EB -
						Implemented multiple user-controlled features like frame-by-frame
						animation, rotation and translation control, 3D controls • Assisted
						in a machine learning project aimed at performing live motion
						tracking of humans using multiple LiDAR sensors - Built the pipeline
						in ROS environment (nodes, packages, launch files) to facilitate
						live fusion and tracking - Performed set-up, calibration and
						transformation of LiDAR sensors to be used for the tracking
					</div>
				</div>
				<div className="timeline-item">
					<h3>
						Technology Intern at Technology Centre Offshore and Marine Singapore
						(TCOMS)
					</h3>
					<div className="timeline-date">March 2021 - June 2021</div>
					<br />
					<div>
						• Experienced research setting comparing and testing various
						networks and communication protocols (e.g. LoRaWAN, Zigbee,
						Bluetooth etc.) for wireless real-time data acquisition in model
						basin • Conducted an experimental study on multiple resistive wave
						probes to determine relation between water level and current reading
						for use in commercial ocean basin - Determined best conditions and
						parameters to achieve linearity between output voltage/current of
						the wave probes and water height • Assisted in ad-hoc workshop
						duties - Cutting and assembling of prototypes used in ocean basin -
						Wrote Operation Documentation and Risk Assessment for some tools in
						the workshop
					</div>
				</div>
				{/* ... Add more timeline items as needed ... */}
			</div>

			<h2>Personal Projects</h2>
			<div className="card-grid">
				{/* Sample Card Grid Items */}
				<div className="card">
					<div className="card-title">Project 1</div>
					<div className="card-description">Description for Project 1.</div>
				</div>
				<div className="card">
					<div className="card-title">Project 2</div>
					<div className="card-description">Description for Project 2.</div>
				</div>
				{/* ... Add more cards as needed ... */}
			</div>

			<h2>Education</h2>
			<div className="education-timeline">
				{/* Sample Education Items */}
				<div className="education-item">
					<img src="/nusLogo.jpg" alt="NUS Logo" className="school-logo" />
					<div className="school-details">
						<h3>National University of Singapore</h3>
						<p>Computer Engineering, 2020-2023</p>
					</div>
				</div>
				{/* ... Add more education items as needed ... */}
			</div>

			{/* You can add more information about yourself here */}
		</div>
	);
}

export default Home;
