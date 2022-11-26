import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import * as ReactDOM from "react-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Table } from "react-bootstrap";
import GetFaculty from "../admin/getFaculty/GetFaculty";
import Spinner from "../../utils/Spinner";
import { SET_ERRORS } from "../../redux/actionTypes";
import { getAllFaculty } from "../../redux/actions/adminActions";
import DetailComponent from "./DetailComponent";
import * as classes from "../../utils/styles";
const FacultyAll = () => {
	const [search, setSearch] = useState(false);
	const dispatch = useDispatch();
	const faculties = useSelector((state) => state.admin.allFaculty);
	console.log(faculties);
	const [data, setData] = React.useState(faculties);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	useEffect(() => {
		dispatch(getAllFaculty());
		setLoading(false);
	}, [dispatch]);

	useEffect(() => {
		if (faculties?.length !== 0) {
			setLoading(false);
		}
	}, [faculties]);

	return (
		<>
			{!loading && Object.keys(error).length === 0 && faculties?.length !== 0 && (
				<div className={classes.adminData}>
					<div className="grid grid-cols-12">
						<h1 className={`${classes.adminDataHeading} col-span-1 `}>
							Sr no.
						</h1>
						<h1 className={`${classes.adminDataHeading} col-span-2 `}>Name</h1>
						<h1 className={`${classes.adminDataHeading} col-span-2 `}>
							Phone No
						</h1>
						<h1 className={`${classes.adminDataHeading} col-span-2 `}>Email</h1>
						<h1 className={`${classes.adminDataHeading} col-span-2 `}>
							Designation
						</h1>
						<h1 className={`${classes.adminDataHeading} col-span-2 `}>
							Department
						</h1>
					</div>
					{faculties?.map((fac, idx) => (
						<div className="bor">
							<div
								key={idx}
								className={`${classes.adminDataBody} grid-cols-12`}
							>
								<h1
									className={`${classes.adminDataBodyFields} font-bold border-0 col-span-1`}
								>
									{idx + 1}
								</h1>
								<h1 className={`col-span-2 ${classes.adminDataBodyFields}`}>
									{fac.name}
								</h1>
								<h1 className={`col-span-2 ${classes.adminDataBodyFields} `}>
									{fac.contactNumber}
								</h1>
								<h1 className={`col-span-2 ${classes.adminDataBodyFields}`}>
									{fac.email}
								</h1>
								<h1 className={`col-span-2 ${classes.adminDataBodyFields}`}>
									{fac.designation}
								</h1>
								<h1 className={`col-span-2 ${classes.adminDataBodyFields}`}>
									{fac.department}
								</h1>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};
export default FacultyAll;
