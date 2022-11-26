import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
const Timetable = () => {
	return (
		<div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
			<div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
				<div className="flex flex-[0.95]">
					<Sidebar />
					<Card className="my-3 p-3 rounded">
						<Card.Text as="h1" className="text-center bold height2">
							Time Tables
						</Card.Text>
						<Card.Body>
							<Card.Text as="h1" className="text-center bold height">
								<a href="https://cvr.ac.in/it/t2-1_16-17.jpg">
									<h3>2016 - 17 II YEAR I SEM TIMETABLE</h3>
								</a>
								<a href="https://cvr.ac.in/it/t2-2_16-17.jpg">
									<h3>2016 - 17 II YEAR II SEM TIMETABLE</h3>
								</a>
								<a href="https://cvr.ac.in/it/t3-1_16-17.jpg">
									<h3>2016 - 17 III YEAR I SEM TIMETABLE</h3>
								</a>
								<a href="https://cvr.ac.in/it/t3-2_16-17.jpg">
									<h3>2016 - 17 III YEAR II SEM TIMETABLE </h3>
								</a>
								<a href="https://cvr.ac.in/it/t4-1_16-17.jpg">
									<h3>2016 - 17 IV YEAR I SEM TIMETABLE</h3>
								</a>
								<a href="https://cvr.ac.in/it/t4-2_16-17.jpg">
									<h3>2016 - 17 IV YEAR II SEM TIMETABLE</h3>
								</a>
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Timetable;
