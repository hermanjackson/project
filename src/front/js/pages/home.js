import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="hero">
			<div className="hero_outer" id="home">
				<div className="hero__container">
					<h1 className="hero__heading">search for nutrition</h1>
					<p className="hero__description">many to choice from</p>
					<button className="main__btn">
						<a href="single">nutrition</a>
					</button>
				</div>
			</div>

			<div className="services" id="services">
				<h1 className="services_first">recipes</h1>
				<div className="services__wrapper">
					<div className="services__card">
						<h2>recipes</h2>
						<p>something else</p>
						<div className="services__btn">
							<button className="style_button">something else</button>
						</div>
					</div>
					<div className="services__card">
						<h2>nutrition</h2>
						<p>something else</p>
						<div className="services__btn">
							<button className="style_button">something else</button>
						</div>
					</div>
					<div className="services__card">
						<h2>recipes</h2>
						<p>something else</p>
						<div className="services__btn">
							<button className="style_button">something else</button>
						</div>
					</div>
					<div className="services__card">
						<h2>more recipes</h2>
						<p>something else</p>
						<div className="services__btn">
							<button className="style_button">something else</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
