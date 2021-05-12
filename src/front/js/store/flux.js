const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			HandGuns: [
				{
					id: "1",
					Image: "http://placehold.jp/150x150.png",
					Gun: "sig-saucer 9mm"
				},
				{
					uid: "2",
					Image: "http://placehold.jp/150x150.png",
					Gun: "berreta 9mm"
				},
				{
					uid: "3",
					Image: "http://placehold.jp/150x150.png",
					Gun: "spring-field xd 9mm"
				},
				{
					uid: "4",
					Image: "http://placehold.jp/150x150.png",
					Gun: "Glock 9mm"
				},
				{
					uid: "5",
					Image: "http://placehold.jp/150x150.png",
					Gun: "sig-saucer 40cal"
				},
				{
					uid: "6",
					Image: "http://placehold.jp/150x150.png",
					Gun: "38 revolver"
				},
				{
					uid: "7",
					Image: "http://placehold.jp/150x150.png",
					Gun: "357 revolver"
				}
			],
			Rifles: [
				{
					id: "1",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "2",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "3",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "4",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "5",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "6",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "7",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				}
			],
			ShotGun: [
				{
					id: "1",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "2",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "3",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "4",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "5",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "6",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
				},
				{
					uid: "7",
					Image: "http://placehold.jp/150x150.png",
					Gun: ""
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
