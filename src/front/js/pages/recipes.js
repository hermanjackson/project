import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, Value } from "react-router-dom";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/recipes.scss";

export const Recipes = () => {
	const [photo, setPhoto] = useState("");
	const [recipeUrl, setRecipeUrl] = useState("http://placehold.jp/600x300.png");
	const [userRecipeIngredients, setUserRecipeIngredients] = useState("");
	const [userInstructions, setUserInstructions] = useState("");
	const [userDescription, setUserDescription] = useState("");
	const [recipeButton, setRecipeButton] = useState("");
	const { store, actions } = useContext(Context);
	const fileInput = useRef(null);
	useEffect(
		() => {
			if (photo !== "") {
				const reader = new FileReader();
				reader.onloadend = () => {
					// log to console
					// logs data:<type>;base64,wL2dvYWwgbW9yZ...
					setRecipeUrl(reader.result);
				};
				reader.readAsDataURL(photo);
			}
		},
		[photo]
	);
	return (
		<div className="form__container">
			<div className="user__container">
				<i onClick={() => fileInput.current.click()} className="fas fa-camera" />
				<img className="main_img" src={recipeUrl} />
				<input ref={fileInput} onChange={e => setPhoto(e.target.files[0])} type="file" className="invisible" />
				<form className="form_content">
					<div className="text__area">
						<textarea
							className="user_recipe_ingredients"
							value={userRecipeIngredients}
							placeholder="type your Ingredients"
							name="user_recipe_ingredients"
							rows="4"
							cols="50"
							onChange={e => setUserRecipeIngredients(e.target.value)}
						/>
						<textarea
							className="user_recipe"
							value={userInstructions}
							name="user_recipe"
							placeholder="type your instructions"
							rows="4"
							cols="50"
							onChange={e => setUserInstructions(e.target.value)}
						/>
						<textarea
							className="user_recipe_description"
							value={userDescription}
							name="user_recipe_description"
							placeholder="type your description"
							rows="4"
							cols="50"
							onChange={e => setUserDescription(e.target.value)}
						/>
						<button
							onClick={() => actions.setRecipe(userDescription, userInstructions, userRecipeIngredients)}
							className="ingredients_button"
							type="button"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};
