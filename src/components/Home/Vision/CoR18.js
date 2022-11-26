import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { Link } from "react-scroll";
const Coeighteen = () => {
	return (
		<div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
			<div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
				<div className="flex flex-[0.95] ">
					<Sidebar />
					<div className="scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll h-[30rem]">
						<Card className="my-3 p-3 rounded ">
							<Card.Body>
								<Card.Text as="h1" className=" bold">
									<ul
										style={{
											display: "flex",
											listStyle: "none",
											justifyContent: "space-around",
											padding: "3rem",
										}}
										className="flex1"
									>
										<li className="p-2">IV YEAR</li>
										<li className="p-2">III YEAR</li>
										<li className="p-2">II YEAR</li>
										<li className="p-2">I YEAR</li>
									</ul>
								</Card.Text>
								<div>
									<Card.Text as="h1" className="text-center bold">
										IV YEAR I SEMESTER
										
									</Card.Text>
									<Card.Text as="h1" className="text-center bold">
										IV YEAR II SEMESTER
									</Card.Text>
									<Card.Text as="h1" className="text-center bold">
										III YEAR I SEMESTER
									</Card.Text>
									<Card.Text as="h1" className="text-center bold">
										III YEAR II SEMESTER
									</Card.Text>
									<Card.Text as="h1" className="text-center bold">
										II YEAR I SEMESTER
									</Card.Text>
									<Card.Text as="h1" className="text-center bold">
										II YEAR II SEMESTER
									</Card.Text>
									<Card.Text as="h1" className="text-center bold">
										I YEAR I SEMESTER
									</Card.Text>
									<Card.Text as="h1" className="text-center bold">
										I YEAR II SEMESTER
									</Card.Text>
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coeighteen;
