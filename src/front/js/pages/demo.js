import React, { useState, useEffect, useContext } from "react";
import { Link, Value } from "react-router-dom";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";
const useform = () => {
	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		password2: ""
	});
	const [errors, setErrors] = useState({});
};

export const Demo = () => {
	return (
		<div className="form-content-right">
			<form className="form">
				<h1>Get Started</h1>

				<div className="form-input">
					<label htmlFor="username" className="form-label">
						username
					</label>
					<input
						id="username"
						type="text"
						name="username"
						className="username"
						placeholder="Enter your username"
					/>
				</div>

				<div className="form-input">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input id="email" type="email" name="email" className="email" placeholder="Enter your email" />
				</div>

				<div className="form-input">
					<label htmlFor="password" className="form-label">
						password
					</label>
					<input
						id="password"
						type="password"
						name="password"
						className="password"
						placeholder="Enter your password"
					/>
				</div>

				<div className="form-input">
					<label htmlFor="password2" className="form-label-confirm">
						confirm password
					</label>
					<input
						id="password2"
						type="password"
						name="password2"
						className="password2"
						placeholder="confirm your password"
					/>
				</div>
				<div className="container">
					<button className="form-input-btn" type="submit">
						Sign up
					</button>
					<span className="form-input-login">
						already have an account? login <a href="#">here</a>
					</span>
				</div>
			</form>
		</div>
	);
};
