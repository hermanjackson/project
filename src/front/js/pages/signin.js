import React, { useState, useEffect, useContext } from "react";
import { Link, Value } from "react-router-dom";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/signin.scss";

export const SignIn = () => {
	return (
		<div className="form-content">
			<div className="form-wrapper">
				<div className="form-inputs">
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

				<div className="form-inputs">
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

				<div className="container">
					<Link to={"home/"}>
						<button className="input-btn" type="submit">
							Sign In
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
