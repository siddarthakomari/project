import React from "react";
import { Card } from "react-bootstrap";

const Home = () => {
	const img = require("../../groupphoto.jpeg");
	return (
		<Card className="my-3 p-3 rounded">
			<Card.Text as="h3" className="text-center">
				Welcome to IT Department, CVRCE
			</Card.Text>
			<img src={img} className="img"></img>
			<Card.Body>
				<Card.Text as="h3" className="text-center">
					About IT Department
				</Card.Text>
				<Card.Text as="div">
					The Department of Information Technology was started in the year 2001
					with an initial intake of 60 B. Tech. students. Subsequently in the
					year 2007-08, the intake was increased to 120. The Department was
					accredited by NBA, AICTE in the year 2007 and reaccredited in the year
					2013. The Department is headed by Prof. Bipin B. Jaya Singh. All
					faculty members have qualification of M. Tech., with a minimum of
					about 4 years of teaching experience at the Assistant Professor level,
					which is an entry level requirement for recruitment to the department.
					The faculty consists of a good mix of individuals with industry and
					academic experience. The Department also has a high faculty retention
					rate.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Home;
