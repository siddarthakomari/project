import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
const Digital = () => {
	return (
		<div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
			<div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
				<div className="flex flex-[0.95] ">
					<Sidebar />
					<div className="scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll h-[30rem]">
						<Card className="my-3 p-3 rounded ">
							<Card.Body>
								<Card.Text as="h1" className="text-center bold py-6">
									DigITalLITerati
								</Card.Text>

								<Card.Text as="div">
									A technical magzine prepared by students of IT under the
									guidance of senior faculty and is published half yearly. Dr.BB
									Jayasingh is the Chief Editor. This magazine helps to bring
									out the technical talent inside the students. Students can
									show their technical talent to the world through this
									platform.
								</Card.Text>
								<Card.Text as="div">
									<a
										href="https://cvr.ac.in/it/digitalliterati2.pdf"
										className="link"
									>
										IT Department - DigITalLITerati_2018
									</a>
								</Card.Text>
								<a
									href="https://cvr.ac.in/it/digitalliterati1.pdf"
									className="link"
								>
									IT Department - DigITalLITerati_2017
								</a>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Digital;
