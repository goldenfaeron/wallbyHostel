<template>
	<div>
		<v-container grid-list-xs>
			<v-layout column fill-height align-center justify-center>
				<v-flex xs12>
					<v-responsive class="mx-auto" width="56">
						<v-icon x-large>mdi-map-legend</v-icon>
					</v-responsive>
					<h1
						class="text-xs-center text-lg-center text-md-center text-sm-center"
					>What to do in {{$store.state.city}}</h1>
				</v-flex>
				<v-flex xs12>
					<v-icon x-large>mdi-info</v-icon>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm4 md4 lg6 v-for="(thing, index) in things" :key="index">
					<CardThing :props="thing"></CardThing>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "tripadvisor_thingstodo_borsh";

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
		// 		collection +
		// 		"?token=" +
		// 		store.state.collectionsToken,
		// 	{ limit: 5, sort: { _created: -1 } }
		// );
		return {
			things: request1.data.entries
		};
	},

	components: {
		CardThing: () => import("@/components/CardThing"),
		CardInstagram: () => import("@/components/CardInstagram")
	},

	data() {
		return {
			title: "Activities in " + this.$store.state.city
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
	}
};
</script>
<style>
</style>