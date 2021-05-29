import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/details.scss";

export const UserRecipe = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			{store.recipe.map((item, index) => {
				return (
					<div className="recipe_container" key={index}>
						<h1>{item.description}</h1>
						<h1>hi</h1>
					</div>
				);
			})}
		</div>
	);
};
