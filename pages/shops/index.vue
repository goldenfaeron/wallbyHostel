<template>
	<div>
		<v-img
			:src="require('@/assets/shop.jpg')"
			:height="[$vuetify.breakpoint.smAndUp ? '400px' : '200px']"
		>
			<template v-slot:placeholder>
				<v-layout fill-height align-center justify-center ma-0>
					<v-progress-circular indeterminate color="primary"></v-progress-circular>
				</v-layout>
			</template>
		</v-img>

		<v-responsive class="mx-auto" width="56">
			<v-icon x-large>mdi-store</v-icon>
		</v-responsive>
		<Title>
			<h1
				class="primary--text main-title"
				style="text-align: center;"
			>The best shops in {{$store.state.city}}</h1>
			<h2
				class="secondary--text"
				style="text-align: center;"
			>{{shops_google.length}} results from Google</h2>
		</Title>
		<ShopsList :props="shops_google"></ShopsList>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "googleplaces_shops_borsh";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{ sort: { imageUrls: -1 }, fields: { reviews: 0 } }
		);

		return {
			shops_google: request1.data.entries
			// shops_tripadvisor: request2.data.entries
		};
	},
	components: {
		CardShop: () => import("@/components/CardShop"),
		ShopsList: () => import("@/components/views/ShopsList"),
		Title: () => import("@/components/transitions/Title")
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