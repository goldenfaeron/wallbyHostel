<template>
	<div>
		<v-container grid-list-lg>
			<v-layout row wrap my-5 v-for="(item, index) in data1" :key="index">
				<v-flex xs8 id="title">
					<h1>{{item.title}}</h1>

					<div v-html="item.description.substr(0,150)"></div>
					<br />
					<nuxt-link :to="'/news/'+ item.slug" append>
						<v-btn color="primary ">Read some more</v-btn>
					</nuxt-link>
				</v-flex>
				<v-flex xs4 id="image_1">
					<v-img :src="item.image"></v-img>
				</v-flex>
			</v-layout>
		</v-container>
		<!-- <v-container grid-list-lg>
			<v-layout row wrap my-5 v-for="(item, index) in data2" :key="index">
				<v-flex xs8 id="title">
					<h1>{{item.title}}</h1>

					<div v-html="item.description.substr(0,150)"></div>
					<br />
					<nuxt-link :to="'/news/'+ item.slug" append>
						<v-btn color="primary ">Read more</v-btn>
					</nuxt-link>
				</v-flex>
				<v-flex xs4 id="image_1">
					<v-img :src="item.image"></v-img>
				</v-flex>
			</v-layout>
		</v-container>-->
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "exital";
		let collection2 = "intoalbania";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,

			{
				fields: {
					title: 1,
					description: 1,
					image: 1,
					slug: 1
				}
			}
		);

		// let request2 = await $axios.post(
		// 	store.state.webRoot +
		// 		"/api/collections/get/" +
		// 		collection2 +
		// 		"?token=" +
		// 		store.state.collectionsToken,

		// 	{
		// 		fields: {
		// 			title: 1,
		// 			description: 1,
		// 			image: 1,
		// 			slug: 1
		// 		}
		// 	}
		// );
		return {
			data1: request1.data.entries
			// data2: request2.data.entries
		};
	},

	head() {
		return {
			title: "News in " + this.$store.state.city,
			meta: [
				{
					hid: "News in " + this.$store.state.city,
					name: "News in " + this.$store.state.city,
					content: "News in " + this.$store.state.city
				}
			]
		};
	}
};
</script>