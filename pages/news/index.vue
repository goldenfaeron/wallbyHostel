<template>
	<div>
		<v-container grid-list-lg>
			<v-layout row wrap my-5>
				<v-flex xs12 sm6 md4 v-for="(item, index) in data1" :key="index">
					<v-hover>
						<v-card v-card height="100%" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
							<nuxt-link style="text-decoration:none;" class="" :to="'/corona/'+item.slug">
							<v-card-title style="line-height: 20px; height: 20px; word-break:normal;" primary-title>{{item.title}}</v-card-title>
							<br>
							<v-card-subtitle>News in {{$store.state.city}}</v-card-subtitle>

							<v-img :src="item.image" height="200"></v-img>

							<v-card-text>
								<div v-html="item.description.substr(0,150)"></div>
							</v-card-text>
							<!--
						<v-card-actions>
							<nuxt-link :to="'/news/'+ item.slug" append>
								<v-btn color="primary ">Read some more</v-btn>
							</nuxt-link>
							</v-card-actions>-->
							</nuxt-link>
						</v-card>
					</v-hover>
				</v-flex>
			</v-layout>
		</v-container>
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
			+"&rspc=1",

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