import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
const Peo = () => {
	return (
		<div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
			<div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
				<div className="flex flex-[0.95] ">
					<Sidebar />
					<div className="scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll h-[30rem]">
						<Card className="my-3 p-3 rounded ">
							<Card.Body>
								<Card.Text as="h1" className="text-center bold">
									PROGRAM EDUCATIONAL OBJECTIVES
								</Card.Text>
								<Card.Text as="div">
									Program Educational Objectives are broad statements that
									describe the career and professional accomplishments that the
									program is preparing graduates to achieve.
									<ul>
										<li className="py-3">
											<b>PEO 1: </b> Graduates will acquire capability to apply
											their knowledge and skills to solve various kinds of
											computational engineering problems.
										</li>
										<li className="py-3">
											<b>PEO 2: </b> Graduates will be in a position to
											recognize and incorporate societal needs and practice
											their profession with high regard to legal and ethical
											practices.
										</li>
										<li className="py-3">
											<b>PEO 3: </b> Graduates will be ready to work in projects
											related to complex problems involving multi-disciplinary
											areas.
										</li>
										<li className="py-3">
											<b>PEO 4: </b> To evolve as resourceful engineers catering
											to global changes and engage in life-long learning.
										</li>
										<li className="py-3">
											<b>PEO 5: </b> To enable the students with required soft
											skills, that can be used in a pragmatic manner and excel
											in diverse environments in the competitive world.
										</li>
									</ul>
								</Card.Text>
								<Card.Text as="h1" className="text-center bold">
									PROGRAM OUTCOMES
								</Card.Text>
								<Card.Text as="div">
									<b>Engineering Graduates will be able to:</b>
									<ul>
										<li className="py-3">
											<b>PO 1. Engineering knowledge:</b> Apply the knowledge of
											mathematics, science, engineering fundamentals, and an
											engineering specialization to the solution of complex
											engineering problems.
										</li>
										<li className="py-3">
											<b>PO 2. Problem analysis:</b> Identify, formulate, review
											research literature, and analyze complex engineering
											problems reaching substantiated conclusions using first
											principles of mathematics, natural sciences, and
											engineering sciences.
										</li>
										<li className="py-3">
											<b>PO 3. Design/development of solutions: </b> Design
											solutions for complex engineering problems and design
											system components or processes that meet the specified
											needs with appropriate consideration for the public health
											and safety, and the cultural, societal, and environmental
											considerations.
										</li>
										<li className="py-3">
											<b>PO 4. Conduct investigations of complex problems: </b>{" "}
											Use research-based knowledge and research methods
											including design of experiments, analysis and
											interpretation of data, and synthesis of the information
											to provide valid conclusions.
										</li>
										<li className="py-3">
											<b>PO 5. Modern tool usage: </b> Create, select, and apply
											appropriate techniques, resources, and modern engineering
											and IT tools including prediction and modeling to complex
											engineering activities with an understanding of the
											limitations.
										</li>
										<li className="py-3">
											<b>PO 6. The engineer and society:</b> Apply reasoning
											informed by the contextual knowledge to assess societal,
											health, safety, legal and cultural issues and the
											consequent responsibilities relevant to the professional
											engineering practice.
										</li>
										<li className="py-3">
											<b>PO 7. Environment and sustainability: </b> Understand
											the impact of the professional engineering solutions in
											societal and environmental contexts, and demonstrate the
											knowledge of, and need for sustainable development.
										</li>
										<li className="py-3">
											<b>PO 8. Ethics: </b>Apply ethical principles and commit
											to professional ethics and responsibilities and norms of
											the engineering practice.
										</li>
										<li className="py-3">
											<b>PO 9. Individual and team work: </b> Function
											effectively as an individual, and as a member or leader in
											diverse teams, and in multidisciplinary settings.
										</li>
										<li className="py-3">
											<b>PO 10. Communication: </b> Communicate effectively on
											complex engineering activities with the engineering
											community and with society at large, such as, being able
											to comprehend and write effective reports and design
											documentation, make effective presentations, and give and
											receive clear instructions.
										</li>
										<li className="py-3">
											<b>PO 11. Project management and finance: </b> Demonstrate
											knowledge and understanding of the engineering and
											management principles and apply these to one's own work,
											as a member and leader in a team, to manage projects and
											in multidisciplinary environments.
										</li>
										<li className="py-3">
											<b>PO 12. Life-long learning: </b> Recognize the need for,
											and have the preparation and ability to engage in
											independent and life-long learning in the broadest context
											of technological change.
										</li>
									</ul>
								</Card.Text>
								<Card.Text as="h1" className="text-center bold">
									PROGRAM SPECIFIC OUTCOMES
								</Card.Text>
								<Card.Text as="div">
									<ul>
										<li className="py-3">
											<b>PSO 1: </b> An ability to analyze a problem, design
											algorithm, identify and define the computing requirements
											within realistic constraints and implement through
											analytical, logical and problem solving skills.
										</li>
										<li className="py-3">
											<b>PSO 2: </b> Ability to design and develop prototype
											innovatively leading to product development and
											contributions to open source community meeting ever
											changing societal needs.
										</li>
										<li className="py-3">
											<b>PSO 3: </b> Effectively integrate IT-based solutions
											into the user environment.
										</li>
										<li className="py-3">
											<b>PSO 4: </b> Ability to pursue higher studies and
											research in inter-disciplinary areas.
										</li>
									</ul>
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Peo;
