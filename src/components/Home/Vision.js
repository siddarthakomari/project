import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "./Vision/Sidebar";
const Vision = () => {
	return (
		<div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
			<div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
				<div className="flex flex-[0.95]">
					<Sidebar />
					<Card className="my-3 p-3 rounded">
						<Card.Body>
							<Card.Text as="h1" className="text-center bold">
								Vision of IT Department
							</Card.Text>
							<Card.Text as="div">
								The Department aims to produce quality Software Engineers and
								Data Scientists, with an attitude to adapt to ever changing IT
								needs of local, national and international arena, through
								teaching, interactions with alumni and industry.
							</Card.Text>
							<Card.Text as="h1" className="text-center bold">
								Mission of IT Department
							</Card.Text>
							<Card.Text as="div">
								<ul>
									<li className="py-3">
										<b>M1:</b> To provide a holistic learning environment for
										students and to create awareness in legal and ethical
										practices.
									</li>
									<li className="py-3">
										<b>M2:</b> To provide quality infrastructure through labs,
										other resources and to continuously upgrade to the latest
										technology requirements.
									</li>
									<li className="py-3">
										<b>M3:</b> To train the students in soft skills to excel in
										placements and competitive exams at higher levels.
									</li>
									<li className="py-3">
										<b>M3:</b> To develop into a Centre of excellence for
										application development using open source technologies and
										contribute to the open source community.
									</li>
									<li className="py-3">
										<b>M5:</b> To have a healthy industry - institute
										interaction through faculty development programs, student
										internships, guest lectures and so on.
									</li>
									<li className="py-3">
										<b>M6:</b> To provide a research oriented environment for
										the faculty to meet the ever-changing societal needs.
									</li>
									<li className="py-3">
										<b>M7:</b> To train the PG students to be able to carry out
										research and development work to meet the societal needs.
									</li>
									<li className="py-3">
										<b>M8:</b> To provide effective consultancy to meet the
										industrial requirement.
									</li>
								</ul>
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Vision;
