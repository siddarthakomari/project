import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
const Intern = () => {
	const img1 = require("../../../intern.png");
	return (
		<div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
			<div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
				<div className="flex flex-[0.95] ">
					<Sidebar />
					<div className="scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll h-[30rem]">
						<Card className="my-3 p-3 rounded ">
							<Card.Body>
								<Card.Text as="h1" className="text-center bold py-6">
									Internships Yearwise
								</Card.Text>

								<img src={img1} className="img width"></img>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intern;
