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
					<h1 className="hero__heading">guns , guns , guns</h1>
					<p className="hero__description">something to say</p>
					<button className="main__btn">
						<a href="demo">rifles</a>
					</button>
				</div>
			</div>

			<div className="services" id="services">
				<h1>guns</h1>
				<div className="services__wrapper">
					<div className="services__card">
						<h2>assualt rifles</h2>
						<p>something else</p>
						<div className="services__btn">
							<button className="style_button">something else</button>
						</div>
					</div>
					<div className="services__card">
						<h2>hand guns</h2>
						<p>something else</p>
						<div className="services__btn">
							<button className="style_button">something else</button>
						</div>
					</div>
					<div className="services__card">
						<h2>snipers</h2>
						<p>something else</p>
						<div className="services__btn">
							<button className="style_button">something else</button>
						</div>
					</div>
					<div className="services__card">
						<h2>how to get gun permits</h2>
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
