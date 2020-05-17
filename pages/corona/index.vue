<template>
	<div>
		<v-container grid-list-lg>
			<v-layout row wrap my-5>
				<v-flex xs12 sm6 md4 v-for="(item, index) in content" :key="index">
					<v-card>
						<v-card-title primary-title>{{item.title}}</v-card-title>
						<v-card-subtitle>News in {{$store.state.city}}</v-card-subtitle>

						<v-img :src="$store.state.assetRoot + item.image_1.path" height="200"></v-img>

						<v-card-text>
							<p v-html="item.text_1.substr(0,150)"></p>
						</v-card-text>
						<br />
						<v-card-actions>
							<nuxt-link :to="'/corona/'+ item.slug" append>
								<v-btn color="primary ">Read some more</v-btn>
							</nuxt-link>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ params, store, $axios, route }) {
		let collection = "corona";
		return await $axios
			.post(
				store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					store.state.collectionsToken,
				+"&rspc=1",

				{
					fields: {
						title: 1,
						text_1: 1,
						image_1: 1,

						slug: 1
					}
				}
			)
			.then(res => {
				return { content: res.data.entries };
			});
	},

	head() {
		return {
			title: "COVID-19 in " + this.$store.state.city,
			meta: [
				{
					hid: "COVID-19 in " + this.$store.state.city,
					name: "COVID-19 in " + this.$store.state.city,
					content: "COVID-19 in " + this.$store.state.city
				}
			]
		};
	}
};
</script>