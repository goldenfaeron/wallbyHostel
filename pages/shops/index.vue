<template>
	<div>
		<v-responsive class="mx-auto" width="56">
			<v-icon x-large>mdi-store</v-icon>
		</v-responsive>
		<h1
			class="primary--text main-title"
			style="text-align: center;"
		>The best shops in {{$store.state.city}}</h1>
		<h2
			class="secondary--text"
			style="text-align: center;"
		>{{shops_google.length}} results from Google</h2>

		<v-container grid-list-lg class="mt-7">
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in shops_google" :key="index">
					<CardBar :props="item" :link="'/shops/'" :index="index"></CardBar>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "googleplaces_shops_" + store.state.city.toLowerCase();

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 15 }
		);

		// let request2 = await $axios.post(
		// 	store.state.webRoot +
		// 		"/api/collections/get/" +
		// 		collection2 +
		// 		"?token=" +
		// 		store.state.collectionsToken,
		// 	{ limit: 15 }
		// );
		return {
			shops_google: request1.data.entries
			// shops_tripadvisor: request2.data.entries
		};
	},
	components: {
		CardBar: () => import("@/components/CardBar")
	},
	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	data() {
		return {
			type: "shops",
			title: "shops in " + this.$store.state.city,
			preview:
				"See all the best " + this.type + " in " + this.$store.state.city,
			placeholder2: Math.floor(Math.random() * 2)
		};
	},

	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: this.preview,
					name: this.title,
					content: this.preview
				}
			]
		};
	},
	jsonld() {
		return {
			"@context": "http://schema.org",
			"@type": "Article",
			name: this.title,
			description: this.preview,
			keywords: "shops"
		};
	}
};
</script>