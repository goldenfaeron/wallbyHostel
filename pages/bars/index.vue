<template>
	<div>
		<h1
			class="primary--text main-title"
			style="text-align: center;"
		>The best bars in {{$store.state.city}}</h1>

		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in bars_google" :key="index">
					<CardBar :props="item" :index="index"></CardBar>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in bars_tripadvisor" :key="index">
					<CardBarTripadvisor :props="item" :index="index"></CardBarTripadvisor>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "googleplaces_" + store.state.city.toLowerCase();
		let collection2 =
			"tripadvisor_restuarants_" + store.state.city.toLowerCase();

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 15 }
		);

		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection2 +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 15 }
		);
		return {
			bars_google: request1.data.entries,
			bars_tripadvisor: request2.data.entries
		};
	},
	components: {
		CardBar: () => import("@/components/CardBar"),
		CardBarTripadvisor: () => import("@/components/CardBarTripadvisor")
	},
	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	data() {
		return {
			type: "Bars",
			title: "Bars in " + this.$store.state.city,
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