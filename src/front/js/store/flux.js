const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			foodType: [
				{
					id: "1",
					image: "http://placehold.jp/150x150.png",
					name: "bannana",
					calories: "100",
					fat: "200",
					sugar: "400",
					description: "bannas are good gorrilas love them"
				},
				{
					id: "2",
					image: "http://placehold.jp/150x150.png",
					name: "apple",
					calories: "100",
					fat: "200",
					sugar: "400",
					description: "bannas are good horses love them"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
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
