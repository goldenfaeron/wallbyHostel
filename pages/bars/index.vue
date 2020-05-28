<template>
	<div>
		<v-img
			:src="require('@/assets/food/the-munchies.png')"
			:height="[$vuetify.breakpoint.smAndUp ? '400px' : '200px']"
		>
			<template v-slot:placeholder>
				<v-layout fill-height align-center justify-center ma-0>
					<v-progress-circular indeterminate color="primary"></v-progress-circular>
				</v-layout>
			</template>
		</v-img>
		<v-responsive class="mx-auto" width="56">
			<v-icon x-large>mdi-food</v-icon>
		</v-responsive>
		<Title>
			<h1
				class="primary--text main-title"
				style="text-align: center;"
			>The best bars in {{$store.state.city}}</h1>
			<h2
				class="secondary--text"
				style="text-align: center;"
			>{{bars_google.length}} results from Google</h2>
		</Title>

		<v-container grid-list-lg class="mt-7">
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in bars_google" :key="index">
					<CardBar :props="item" :link="'/bars/google/'" :index="index"></CardBar>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "googleplaces_borsh";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{
				fields: {
					imageUrls: 1,
					title: 1,
					totalScore: 1,
					categoryName: 1,
					url: 1,
					slug: 1,
					reviewsCount: 1,
					location: 1
				},
				sort: { imageUrls: -1 }
			}
		);

		return {
			bars_google: request1.data.entries
			// bars_tripadvisor: request2.data.entries
		};
	},
	components: {
		CardBar: () => import("@/components/cards/CardBar"),
		Title: () => import("@/components/transitions/Title")
	},
	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	data() {
		return {
			type: "bars",
			title: "bars in " + this.$store.state.city,
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
			keywords: "bars"
		};
	}
};
</script>