import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.scss";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__container">
				<h1 href="#home" id="navbar__logo">
					Logo
				</h1>

				<ul className="navbar__menu">
					<Link to={"demo/"}>
						<li className="navbar__item">
							<span href="#home" className="navbar__links" id="home-page">
								home
							</span>
						</li>
					</Link>
					<Link to={"/"}>
						<li className="navbar__item">
							<span href="#about" className="navbar__links" id="about-page">
								about
							</span>
						</li>
					</Link>
					<li className="navbar__item">
						<span href="#services" className="navbar__links" id="services-page">
							services
						</span>
					</li>
					<li className="navbar__btn">
						<span href="#sign-up" className="button" id="signup">
							Sign in
						</span>
					</li>
				</ul>
			</div>
		</nav>
	);
};
