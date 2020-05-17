<template>
	<div>
		<v-img
			:src="require('@/assets/airport.jpg')"
			:height="[$vuetify.breakpoint.smAndUp ? '400px' : '200px']"
		>
			<template v-slot:placeholder>
				<v-layout fill-height align-center justify-center ma-0>
					<v-progress-circular indeterminate color="primary"></v-progress-circular>
				</v-layout>
			</template>
		</v-img>
		<v-responsive class="mx-auto" width="56">
			<v-icon x-large>mdi-airport</v-icon>
		</v-responsive>
		<h1
			class="primary--text main-title"
			style="text-align: center;"
		>Nearest Airports to {{$store.state.city}}</h1>
		<h2
			class="secondary--text"
			style="text-align: center;"
		>{{airports_google.length}} results from Google</h2>

		<v-container grid-list-lg class="mt-7">
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in airports_google" :key="index">
					<CardAirport :props="item"></CardAirport>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "googleplaces_airports_borsh";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{ fields: { reviews: 0, popularTimesHistogram: 0 }, limit: 15 }
		);

		return {
			airports_google: request1.data.entries
			// airports_tripadvisor: request2.data.entries
		};
	},
	components: {
		CardAirport: () => import("@/components/CardAirport")
	},
	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	data() {
		return {
			type: "airports",
			title: "airports in " + this.$store.state.city,
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
			keywords: "airports"
		};
	}
};
</script>