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

			<div className="social-links">
				<a
					href="https://github.com/MustafaAH10"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/github-logo.png" alt="GitHub" />
				</a>
				<a
					href="https://linkedin.com/in/mustafa-ah"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/linkedin-logo.png" alt="LinkedIn" />
				</a>
				<a
					href="/MustafaAnisHussain_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="resume-button"
				>
					Resume
				</a>
			</div>

			<h2>Experience</h2>
			<div className="timeline">
				<div className="timeline-item">
					<h3>Software Engineer Intern at Curium</h3>
					<div className="timeline-date">May 2023 - October 2023</div>
					<br />
					<p>
						• Built an online interactive software to help clients visualise
						calibrated sensor data in a 3D space by leveraging the company’s
						proprietary static and dynamic sensor calibration technologies
						<br /> - Front-end development using React and Three.js, Back-end
						development using Django and GraphQL, Cloud deployment using AWS S3,
						EC2, EB
						<br />
						- Implemented multiple user-controlled features like frame-by-frame
						animation, rotation and translation control, 3D controls
						<br />
						<br />
						• Assisted in a machine learning project aimed at performing live
						motion tracking of humans using multiple LiDAR sensors
						<br />
						- Built the pipeline in ROS environment (nodes, packages, launch
						files) to facilitate live fusion and tracking
						<br />- Performed set-up, calibration and transformation of LiDAR
						sensors to be used for the tracking
					</p>
				</div>
				<br />
				<div className="timeline-item">
					<h3>
						Technology Intern at Technology Centre Offshore and Marine Singapore
						(TCOMS)
					</h3>
					<div className="timeline-date">March 2021 - June 2021</div>
					<br />
					<p>
						• Experienced research setting comparing and testing various
						networks and communication protocols (e.g. LoRaWAN, Zigbee,
						Bluetooth etc.) for wireless real-time data acquisition in model
						basin
						<br />
						<br />
						• Conducted an experimental study on multiple resistive wave probes
						to determine relation between water level and current reading for
						use in commercial ocean basin
						<br />- Determined best conditions and parameters to achieve
						linearity between output voltage/current of the wave probes and
						water height
						<br />
						<br />• Assisted in ad-hoc workshop duties
						<br />- Cutting and assembling of prototypes used in ocean basin
						<br />- Wrote Operation Documentation and Risk Assessment for some
						tools in the workshop
					</p>
				</div>
			</div>

			<h2>Education</h2>
			<div className="education-timeline">
				<div className="education-item">
					<img src="/nus-logo.png" alt="NUS Logo" className="school-logo" />
					<div className="school-details">
						<h3>National University of Singapore</h3>
						<p>2021 - 2025</p>
					</div>
					<p>
						• Pursuing a B. Eng. in Computer Engineering (jointly offered by
						School of Computing & College of Design and Engineering) intending
						to specialise in IoT (Internet of Things) <br />• Member of NUS IEEE
						Student Branch, Cricket Team <br />• Relevant Coursework:
						Programming Methodology, Computer Engineering Principles and
						Practices, Discrete Structures, Data Structures and Algorithms,
						Software Engineering, Linear Algebra, Machine Learning, Database
						Systems, Computer Networks, Operating Systems
					</p>
				</div>
				<br />
				<div className="education-item">
					<img src="/ri-logo.png" alt="RI Logo" className="school-logo" />
					<div className="school-details">
						<h3>Raffles Institution</h3>
						<p>2013 - 2018</p>
					</div>
					<p>
						• Recipient of Gifted Education scholarship awarded to ~1% of all
						students <br />• Graduated with Raffles Diploma with Merit in the
						Sports & Health and Character & Leadership domains <br />• Captain
						of Cricket Team (2017-18) and Deputy Head of Moor House (2015-16)
					</p>
				</div>
			</div>

			<h2>Projects</h2>
			<p> Click on each to find out more!</p>
			<div className="card-grid">
				{/* Sample Card Grid Items */}
				<a
					href="https://github.com/MustafaAH10/MLInsurance"
					className="card-link"
				>
					<div className="card">
						<div className="card-title">ML-Insurance</div>
						<div className="card-description">
							Built a recommendation Machine Learning model for insurance
							policies using decision tree classifiers as a Finalist in NUS
							Fintech Month Hackathon 2023
						</div>
					</div>
				</a>
				<a
					href="https://github.com/MustafaAH10/hackforgood"
					className="card-link"
				>
					<div className="card">
						<div className="card-title">SGEnable Health Portal</div>
						<div className="card-description">
							Built a prototype patient-doctor matching portal (NUS Hack4Good
							2023) to match doctors and patients based on patient needs and
							doctor expertise
						</div>
					</div>
				</a>
				<a href="https://github.com/MustafaAH10/EE2026" className="card-link">
					<div className="card">
						<div className="card-title">FPGA Design Project</div>
						<div className="card-description">
							Built a mini entertainment system using Basys 3 board and
							accompanying components as part of a school project
						</div>
					</div>
				</a>
				<a href="https://github.com/MustafaAH10/tp" className="card-link">
					<div className="card">
						<div className="card-title">LifeTracker</div>
						<div className="card-description">
							LifeTracker is a desktop application used for encouraging users to
							lead a healthier life by tracking their net calorie intake
						</div>
					</div>
				</a>
				{/* ... Add more cards as needed ... */}
			</div>
		</div>
	);
}

export default Home;
