import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
const Nitgrty = () => {
	const img1 = require("../../../nittygrittyimage1.jpg");
	const img2 = require("../../../nittygrittyimage2.jpg");
	const img3 = require("../../../nittygrittyimage3.jpg");
	const img4 = require("../../../nittygrittyimage4.jpg");
	return (
		<div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
			<div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
				<div className="flex flex-[0.95] ">
					<Sidebar />
					<div className="scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll h-[30rem]">
						<Card className="my-3 p-3 rounded ">
							<Card.Body>
								<Card.Text as="h1" className="text-center bold py-6">
									NiITy-GrITty
								</Card.Text>

								<Card.Text as="div">
									A non-techical magzine prepared by students of IT under the
									guidance of senior faculty and is published half yearly. Dr.
									BB Jaya Singh and Prof. UV Ramana Sarma are the chief editors.
									This magazine helps to bring out the talent inside the
									students. Students can show their talent to the world through
									this platform.
								</Card.Text>
								<Card.Text as="div">
									<a
										href="https://cvr.ac.in/it/Nitty_Gritty_2018.pdf"
										className="link"
									>
										IT Department - nITty GrITty_2018
									</a>
									<a
										href="https://cvr.ac.in/it/Nittygritty.pdf"
										className="link"
									>
										IT Department - nITty GrITty_2017
									</a>
								</Card.Text>
								<img src={img1} className="img"></img>
								<img src={img2} className="img"></img>
								<img src={img3} className="img"></img>
								<img src={img4} className="img"></img>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nitgrty;
