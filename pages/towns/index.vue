<template>
	<div>
		<v-img
			:src="require('@/assets/town.jpg')"
			:height="[$vuetify.breakpoint.smAndUp ? '400px' : '200px']"
		></v-img>
		<v-responsive class="mx-auto" width="56">
			<v-icon x-large>mdi-city</v-icon>
		</v-responsive>

		<Title>
			<h1 class="primary--text main-title" style="text-align: center;">
				{{$t('towns.title')}}
				{{$store.state.city}}
			</h1>
			<h2 class="secondary--text" style="text-align: center;">{{town.length}} {{$t('towns.subtitle')}}</h2>
		</Title>
		<v-container grid-list-lg class="mt-7">
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in town" :key="index">
					<CardTown :props="item"></CardTown>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "googleplaces_nearby_villages";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				process.env.collectionToken +
				"&rspc=1",
			{ fields: { reviews: 0, popularTimesHistogram: 0 }, limit: 15 }
		);

		return {
			town: request1.data.entries
			// airports_tripadvisor: request2.data.entries
		};
	},
	components: {
		CardTown: () => import("@/components/cards/CardTown"),
		Title: () => import("@/components/transitions/Title")
		// CardTown: () => import("@/components/cards/CardTown")
	},
	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	data() {
		return {
			preview:
				"See all the best " + this.type + " in " + this.$store.state.city,
			placeholder2: Math.floor(Math.random() * 2)
		};
	},

	head() {
		return {
			title: this.$t("towns.title") + this.$store.state.city,
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