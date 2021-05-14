import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/landing.scss";

export const Landing = () => {
	return (
		<div className="container">
			<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="http://placehold.jp/150x150.png" className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src="http://placehold.jp/150x150.png" className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src="http://placehold.jp/150x150.png" className="d-block w-100" alt="..." />
					</div>
				</div>
			</div>
		</div>
	);
};
