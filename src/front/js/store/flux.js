const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			search: {
				q: null,
				from: null,
				to: null,
				more: null,
				count: null,
				hits: []
			},
			homeImage1: "https://www.edamam.com/web-img/e8f/e8f2a473de1cb430c576582f014e4f4d.jpg",
			homeImage2: "https://www.edamam.com/web-img/ff4/ff418ed290f659e7709f19f8a95c715f.jpg",
			homeImage3: "https://www.edamam.com/web-img/a1d/a1dbf50fb4b0be95c90b7daa1091badb.jpg",
			homeImage4: "https://www.edamam.com/web-img/73e/73e36d94d460df70f9ed5eeb62fa5b52.jpg",
			homeImage5: "https://www.edamam.com/web-img/f21/f21e3c4abcaae493c5b766b2781692ca.jpg",

			chosenRecipe: {},
			recipe: [
				{
					ingredients: "yoo",
					instructions: "yoo",
					description: "yooo"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			setRecipe: (description, instructions, ingredients, title) => {
				let store = getStore();
				setStore({
					recipe: {
						ingredients: ingredients,
						instructions: instructions,
						description: description,
						title: title
					}
				});
				fetch("https://3001-maroon-sole-n9he8hrp.ws-us09.gitpod.io/api/user_recipe", {
					method: "POST",
					body: JSON.stringify(store.recipe),
					headers: { "content-type": "application/json" }
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(json => console.log(json))
					.catch(err => console.log(err));
			},
			getRecipe: search => {
				let query = search;
				console.log("its me hey whats up");
				// fetching data from the backend
				fetch(
					`https://api.edamam.com/search?q=${query}&app_id=9b544cc5&app_key=
f8b9101994ce8601d4ee8816fe8cb0c0`
				)
					.then(resp => resp.json())
					.then(data => setStore({ search: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
