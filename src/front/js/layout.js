import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Landing } from "./pages/landing";
import { Recipes } from "./pages/recipes";
import { Home } from "./pages/home";
import { SignUp } from "./pages/signup";
import { Single } from "./pages/single";
import { SignIn } from "./pages/signin";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/signup">
							<SignUp />
						</Route>
						<Route exact path="/single/">
							<Single />
						</Route>
						<Route exact path="/signin">
							<SignIn />
						</Route>
						<Route exact path="/landing">
							<Landing />
						</Route>
						<Route exact path="/recipes">
							<Recipes />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
