import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container main_card">
			{store.foodType.map((item, index) => {
				return (
					<div className="container_head" key={index}>
						<h1 className="views_content">hello world</h1>
						<div className="services__card">
							<h2>{item.name}</h2>
							<img src={item.image} />
							<div className="services__btn">
								<button className="style_button">something else</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
