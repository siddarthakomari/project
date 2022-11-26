import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
const MiniProject = () => {
	return (
		<div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
			<div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
				<div className="flex flex-[0.95]">
					<Sidebar />
					<Card className="my-3 p-3 rounded">
						<Card.Text as="h1" className="text-center bold height2">
							Mini Projects
						</Card.Text>
						<Card.Body>
							<Card.Text as="h1" className="text-center bold height">
								<a href="https://cvr.ac.in/it/IT-B_MINIP16-17.jpg">
									<h3>2016 - 17 IV YEAR IT-B MINIPROJECTS</h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-A_MINIP16-17.jpg">
									<h3>2016 - 17 IV YEAR IT-A MINIPROJECTS</h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-B_MINIP15-16.jpg">
									<h3>2015 - 16 IV YEAR IT-B MINIPROJECTS</h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-A_MINIP15-16.jpg">
									<h3>2015 - 16 IV YEAR IT-A MINIPROJECTS </h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-B_MINIP14-15.jpg">
									<h3>2014 - 15 IV YEAR IT-B MINIPROJECTS</h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-A_MINIP14-15.jpg">
									<h3>2014 - 15 IV YEAR IT-B MINIPROJECTS</h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-B_MINIP13-14.jpg">
									<h3>2013 - 14 IV YEAR IT-B MINIPROJECTS</h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-A_minip13-14.jpg">
									<h3>2013 - 14 IV YEAR IT-A MINIPROJECTS</h3>
								</a>
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default MiniProject;
