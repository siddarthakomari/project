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
						to="/vision"
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						<h1 className="font-normal">Vision & Mission</h1>
					</NavLink>
				</div>
				<div className="">
					<NavLink
						to="/vision/peo"
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						<h1 className="font-normal">PEO's,PO's and PSO's</h1>
					</NavLink>
				</div>
				{/* <div className="">
					<NavLink
						to="/vision/co18"
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						<h1 className="font-normal">CO's- R18 REG</h1>
					</NavLink>
				</div>
				<div className="">
					<NavLink
						to="/vision/co15"
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						<h1 className="font-normal">CO's- R15 REG</h1>
					</NavLink>
				</div> */}
			</div>
		</div>
	);
};

export default Sidebar;
