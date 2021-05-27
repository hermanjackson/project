import React, { useState, useEffect, useContext } from "react";
import { Link, Value } from "react-router-dom";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/recipes.scss";

export const Recipes = () => {
	return (
		<div className="form__container">
			<div className="form_header">
				<img className="profile_image" src="http://placehold.jp/150x150.png" />
				<i className="fas fa-camera" />
			</div>
			<form className="form_content">
				<div className="text__area">
					<textarea
						className="user_recipe_ingredients"
						value="type your ingredients here"
						name="user_recipe_ingredients"
						rows="4"
						cols="50"
					/>
					<textarea className="user_recipe" value="list your steps" name="user_recipe" rows="4" cols="50" />
					<textarea
						className="user_recipe_description"
						value="user_recipe_description"
						name="user_recipe_description"
						rows="4"
						cols="50"
					/>
					<div className="image">
						<img src="http://placehold.jp/300x300.png" />
					</div>
				</div>
			</form>
		</div>
	);
};
