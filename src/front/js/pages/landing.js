import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/landing.scss";

export const Landing = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="cont_card">
				<image className="main-img">{store.chosenRecipe.image}</image>
				<h2>{store.chosenRecipe.label}</h2>
				<div className="description">{store.chosenRecipe.ingredients}</div>
			</div>
		</div>
	);
};
