import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.scss";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [search, setSearch] = useState("");

	return (
		<div>
			<div className="row">
				<div className="col-4 mx-auto">
					<input type="text" onChange={e => setSearch(e.target.value)} value={search} />
					<i className="fas fa-search-minus" onClick={e => actions.getRecipe(search)} />
				</div>
			</div>

			<div className="landing-container">
				{store.search.hits.map((item, index) => {
					return (
						<div className="container_head" key={index}>
							<div className="card_main">
								<h5 className="header_words">{item.recipe.label}</h5>
								<img className="image_main" src={item.recipe.image} />
								<div className="likes">
									<i className="far fa-thumbs-up" />
									410
								</div>
								<div className="btn_button">
									<button
										onClick={e => {
											actions.setChosenRecipe(item.recipe);
										}}
										className="style_button">
										something else
									</button>
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
