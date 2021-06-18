import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const APP_ID = "2e6884b1";
	const APP_KEY = "2d762ce801bd6a5d8fb1b97bf55c0f91";
	const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
	const [firstCard, setFirstCard] = useState("");

	return (
		<div className="hero">
			<div className="hero_outer" id="home">
				<div className="hero__container">
					<h1 className="hero__heading">search for nutrition</h1>
					<p className="hero__description">many to choice from</p>
					<button className="main__btn">
						<a href="single">Recipes</a>
					</button>
				</div>
			</div>

			<div className="services" id="services">
				<h1 className="services_first">recipes</h1>
				<div className="services__wrapper">
					<div className="services__card">
						<h2>Turkey</h2>
						<img className="card_images" src={store.homeImage1} />
					</div>

					<div className="services__card">
						<h2>Strawberry Passion</h2>
						<img className="card_images" src={store.homeImage2} />
					</div>
					<div className="services__card">
						<h2>yogurt</h2>
						<img className="card_images" src={store.homeImage3} />
					</div>
					<div className="services__card">
						<h2>Cheese Burger</h2>
						<img className="card_images" src={store.homeImage4} />
					</div>
				</div>
			</div>
		</div>
	);
};
