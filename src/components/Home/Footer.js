import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer>
			<div className="bg-gray-900 footer">
				<Container>
					<Row>
						<Col className="text-center py-3 text-white ">
							Copyright &copy; 2021 CVR College of Engineering
							{/* <p>Developed by: D. Bhanu Mahesh and Team (Department of IT)</p> */}
						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
