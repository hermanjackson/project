import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/landing.scss";

export const Landing = () => {
	return (
		<div className="container">
			<div className="cont_card">
				<image className="main-img">{Item.recipe.image}</image>
				<h2>{item.recipe.label}</h2>
				<div className="description">{item.recipe.ingredients}</div>
			</div>
		</div>
	);
};
