import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.scss";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__container">
				<h1 href="#home" id="navbar__logo">
					<img src="logomakr.com/2asBy1" />
				</h1>
				<ul className="navbar__menu">
					<Link to={"signup/"}>
						<li className="navbar__item">
							<span href="#home" className="navbar__links" id="home-page">
								signup
							</span>
						</li>
					</Link>
					<Link to={"/"}>
						<li className="navbar__item">
							<span href="#about" className="navbar__links" id="about-page">
								home
							</span>
						</li>
					</Link>
					<Link to={"recipes"}>
						<li className="navbar__item">
							<span href="#services" className="navbar__links" id="services-page">
								member recipe
							</span>
						</li>
					</Link>
					<Link to={"signin"}>
						<li className="navbar__btn">
							<span href="signup" className="button" id="signup">
								Sign in
							</span>
						</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};
