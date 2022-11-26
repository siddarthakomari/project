import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
const Techastra = () => {
	return (
		<div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
			<div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
				<div className="flex flex-[0.95] ">
					<Sidebar />
					<div className="scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll h-[30rem]">
						<Card className="my-3 p-3 rounded ">
							<Card.Body>
								<Card.Text as="h1" className="text-center bold py-6">
									Techshastra - 2K17
								</Card.Text>
								<Card.Text as="h3" className="text-center bold bottom1">
									A Student Technical Event
								</Card.Text>
								<Card.Text as="div">
									There are 6 technical events, 5 non-technical events, 3 guest
									lectures along with technical paper presentations- 13 arranged
									for the students. The souvenir of the technical fest is
									published on the prize distribution ceremony
								</Card.Text>
								<Card.Text as="div">
									<a
										href="https://cvr.ac.in/it/Souvenir_Techshastra2k17.pdf"
										className="link"
									>
										Techshastra2k17_Souvenir_IT DEPARTMENT
									</a>
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Techastra;
