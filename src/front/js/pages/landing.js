import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/landing.scss";

export const Landing = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			{typeof store.chosenRecipe !== "undefined" && (
				<div className="cont_card">
					<h2>{store.chosenRecipe.label}</h2>
					<img className="main-img" src={store.chosenRecipe.image} />
					<h5>Ingredients:</h5>
					<ul className="ingredients">
						{store.chosenRecipe.ingredients.map((ingredient, index) => {
							return <li key={index}>{ingredient.text}</li>;
						})}
					</ul>
				</div>
			)}
		</div>
	);
};
