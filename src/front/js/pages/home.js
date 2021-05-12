import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container_page">
			<div className="jumbotron" />
			<div className="col">
				<div className="row">
					<div className="card">
						<img className="card_img" src="http://placehold.jp/200x200.png" />
						<div className="card_body">
							<p className="words">just something to say about the card</p>
							<button className="btn_button" type="button" />
						</div>
					</div>
					<div className="card">
						<img className="card_img" src="http://placehold.jp/200x200.png" />
						<div className="card_body">
							<p className="words">just something to say about the card</p>
							<button className="btn_button" type="button" />
						</div>
					</div>
					<div className="card">
						<img className="card_img" src="http://placehold.jp/200x200.png" />
						<div className="card_body">
							<p className="words">just something to say about the card</p>
							<button className="btn_button" type="button" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
