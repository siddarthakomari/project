import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
	const logo = require("../../it_cvr_logo1.jpg");
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<header>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<img src={logo} className="logo"></img>
						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/"
								>
									<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
									<span className="ml-2">Home</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/vision"
								>
									<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
									<span className="ml-2">Vision & Mission</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/faculty"
								>
									<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
									<span className="ml-2">Faculty</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/student"
								>
									<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
									<span className="ml-2">Student</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/academics"
								>
									<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
									<span className="ml-2">Academics</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/messagefromhod"
								>
									<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
									<span className="ml-2">Message From HOD</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/login"
								>
									<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
									<span className="ml-2">Login</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
