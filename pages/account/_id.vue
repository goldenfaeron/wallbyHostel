<template>
	<div v-if="$store.state.user.loggedIn==true">
		<v-container>
			<div class="display-2">Your businesses</div>
			<v-layout row wrap mt-5>
				<v-flex xs12 sm6 md4 v-for="(item, index) in shop" :key="index">
					<CardFeaturedBusiness :props="item"></CardFeaturedBusiness>
				</v-flex>
			</v-layout>
			<v-layout row wrap>
				<v-btn :to="'/login' " color="red">Log out</v-btn>
			</v-layout>
		</v-container>

		<v-container grid-list-xs>
			<v-text-field name="name" v-model="input" label="label" id="id">Search</v-text-field>
			<v-btn color="success" @click="scrape(input)">Scrape business</v-btn>

			<v-layout fill-height align-center justify-center ma-0 v-if="loading">
				<v-progress-circular indeterminate color="primary"></v-progress-circular>
			</v-layout>

			<br />
			<br />
			<h2>Lastscrape (succeeded)</h2>
			<v-layout row wrap>
				<v-flex xs3 v-for="(item, index) in insta" :key="index">
					<CardInstagram :props="item"></CardInstagram>
				</v-flex>
			</v-layout>

			<h2>Last manual scrape attempt</h2>
			<v-layout row wrap v-if="instanewnew.length>2">
				<v-flex xs3 v-for="(item, index) in instanewnew" :key="index">
					<CardInstagram :props="item"></CardInstagram>
				</v-flex>
			</v-layout>

			<!-- {{insta}} -->
		</v-container>
	</div>
	<div v-else>You must log in to view this page</div>
</template>

<script>
export default {
	data() {
		return {
			instagramScrape: "",
			input: "",
			loading: false,
			instanewnew: ""
			// instanew: ""
		};
	},

	async asyncData({ $axios, route, store }) {
		let collection = "shops_featured";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ filter: { access: store.state.user.id } }
		);

		let request2 = await $axios.get(
			"https://api.apify.com/v2/actor-tasks/BLYLNcjjiwQveJeJb/runs/last/dataset/items?token=QTP6bbGGyx42msYNpwEykZNkf&clean=1&limit=5&status=SUCCEEDED"
		);

		return {
			shop: request1.data.entries,
			insta: request2.data
		};
	},

	methods: {
		async scrape(user) {
			this.loading = true;
			await this.$axios
				.post(
					"https://api.apify.com/v2/actor-tasks/BLYLNcjjiwQveJeJb/run-sync?token=QTP6bbGGyx42msYNpwEykZNkf&ui=1",
					{
						search: user,
						searchType: "user",
						searchLimit: 10,
						resultsType: "posts",
						resultsLimit: 5
					}
				)

				.then(
					await this.$axios
						.get(
							"https://api.apify.com/v2/actor-tasks/BLYLNcjjiwQveJeJb/runs/last/dataset/items?token=QTP6bbGGyx42msYNpwEykZNkf&clean=1&limit=5"
						)
						.then(res => {
							setTimeout(() => {
								this.instanewnew = res.data;
								this.loading = false;
								return;
							}, 10000);
						})
				);
		}
	},

	components: {
		CardInstagram: () => import("@/components/cards/CardInstagram"),

		CommentsParallax: () => import("@/components/CommentsParallax"),

		ImageGallery: () => import("@/components/gallery/ImageGallery"),
		SplashTitle: () => import("@/components/SplashTitle"),
		CardRoom: () => import("@/components/cards/CardRoom"),
		CardBar: () => import("@/components/cards/CardBar"),
		CardHotel: () => import("@/components/cards/CardHotel"),
		CardFeaturedHotel: () => import("@/components/cards/CardFeaturedHotel"),
		CardFeaturedBusiness: () =>
			import("@/components/cards/CardFeaturedBusiness")
	},

	head() {
		// return {
		// 	title: this.shop.name,
		// 	meta: [
		// 		{
		// 			hid: "shop in " + this.$store.state.city,
		// 			name: this.shop.name,
		// 			content: this.shop.description.substr(0, 100)
		// 		}
		// 	]
		// };
	}
};
</script>

