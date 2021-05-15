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
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: prop => {
				let query = prop;
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
