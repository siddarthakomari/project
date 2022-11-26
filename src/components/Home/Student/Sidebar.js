import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const isNotActiveStyle =
	"flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1";
const isActiveStyle =
	"flex items-center px-5 gap-3 text-blue-600 transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1";

const Sidebar = () => {
	return (
		<div className="flex-[0.2]">
			<div className="space-y-8 overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300 h-[33rem]">
				<div className="">
					<NavLink
						to="/student"
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						<h1 className="font-normal">IngenuiTY</h1>
					</NavLink>
				</div>
				<div className="">
					<NavLink
						to="/student/tech"
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						<h1 className="font-normal">Techastra</h1>
					</NavLink>
				</div>
				<div className="">
					<NavLink
						to="/student/nit"
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						<h1 className="font-normal">NITty GRItty</h1>
					</NavLink>
				</div>
				<div className="">
					<NavLink
						to="/student/dig"
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						<h1 className="font-normal">Digital Literati</h1>
					</NavLink>
				</div>

				<div className="">
					<NavLink
						to="/student/intern"
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						<h1 className="font-normal">Internships</h1>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
