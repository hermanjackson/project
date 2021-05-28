import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, Value } from "react-router-dom";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/recipes.scss";

export const Recipes = () => {
	const [photo, setPhoto] = useState("");
	const [profileUrl, setProfileUrl] = useState("http://placehold.jp/150x150.png");

	const fileInput = useRef(null);
	useEffect(
		() => {
			if (photo !== "") {
				const reader = new FileReader();
				reader.onloadend = () => {
					// log to console
					// logs data:<type>;base64,wL2dvYWwgbW9yZ...
					setProfileUrl(reader.result);
				};
				reader.readAsDataURL(photo);
			}
		},
		[photo]
	);
	return (
		<div className="form__container">
			<div className="jumbotron">
				<div className="user__container">
					<img className="main_img" src="http://placehold.jp/600x300.png" />
					<img className="profile_image" src={profileUrl} />
					<h4 className="user_name">user name</h4>
					<i onClick={() => fileInput.current.click()} className="fas fa-camera" />
					<input
						ref={fileInput}
						onChange={e => setPhoto(e.target.files[0])}
						type="file"
						className="invisible"
					/>
				</div>
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
