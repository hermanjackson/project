import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.scss";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<div className="row">
				<div className="col-4 mx-auto">
					<input type="text" />
				</div>
			</div>

			<div className="landing-container">
				{store.search.hits.map((item, index) => {
					return (
						<div className="container_head" key={index}>
							<div className="services__card">
								<h5>{item.recipe.label}</h5>
								<img src={item.recipe.image} />
								<div className="services__btn">
									<button className="style_button">something else</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
