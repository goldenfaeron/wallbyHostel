<template>
	<div>
		<v-btn @click="getroutes()" color="success">get</v-btn>
		<v-btn @click="getJSON()" color="success">get</v-btn>
		{{arr}}
		{{jsonArr}}
	</div>
</template>

<script>
export default {
	data() {
		return {
			arr: [],
			jsonArr: require("@/assets/routes/all.json")
		};
	},
	methods: {
		getJSON() {
			this.$axios.get("@/assets/routes/all.json").then(res => {
				this.jsonArr = res.data;
			});
		},
		getroutes() {
			let routeList = [];

			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/team?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/team/" + entry.slug });
					});
				});
			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/hotels?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/featured_hotels/" + entry.slug });
					});
				});
			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/corona?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/corona/" + entry.slug });
					});
				});

			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/booking_borsh?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/booking/" + entry.slug });
					});
				});

			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/googleplaces_borsh?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/bars/google/" + entry.slug });
					});
				});
			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/tripadvisor_restuarants_borsh?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/bars_tripadvisor/" + entry.slug });
					});
				});
			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/tripadvisor_thingstodo_borsh?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/activities/" + entry.slug });
					});
				});
			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/googleplaces_shops_borsh?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/shops/" + entry.slug });
					});
				});
			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/googleplaces_airports_borsh?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/airports/" + entry.slug });
					});
				});

			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/shops_featured?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/featured_business/" + entry.slug });
					});
				});
			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/youtube?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/youtube/" + entry.slug });
					});
				});
			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/instagram?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/instagram/" + entry.slug });
					});
				});
			this.$axios
				.post(
					"https://cockpit.goborshi.hackmylanguage.com/api/collections/get/instagram?token=641a6e0c88f94f7d2adadd184752e1",
					{
						fields: { slug: 1, _id: 0 }
					}
				)
				.then(res => {
					return res.data.entries.map(entry => {
						routeList.push({ route: "/instagram/" + entry.slug });
					});
				});

			this.arr = routeList;

			//shops, airports,activities,
			// return Promise.all([
			// 	team
			// 	// featured_hotels,
			// 	// corona,
			// 	// hotels,
			// 	// google_places,
			// 	// tripadvisor_restuarants_borsh
			// ]).then(values => {
			// 	this.arr = [
			// 		...values[0]
			// 		// ...values[1],
			// 		// ...values[2],
			// 		// ...values[3],
			// 		// ...values[4],
			// 		// ...values[5]
			// 	];
			// });
		}
	}
};
</script>



<style>
</style>