<template>
	<div>
		<template>
			<v-container grid-list-lg>
				<v-layout row wrap>
					<v-flex xs12 id="title">
						<h1>{{content.title}}</h1>
					</v-flex>
					<v-flex xs12 id="image_1">
						<v-img :height="[$vuetify.breakpoint.smAndUp ? '600px' : '200px']" :src="content.image"></v-img>
					</v-flex>
					<v-flex xs12 id="text_1">
						<div v-html="content.text"></div>
					</v-flex>

					<!-- <v-flex xs12 id="text_2">
						<div v-html="content.text_2"></div>
					</v-flex>-->
				</v-layout>
			</v-container>
		</template>
	</div>
</template>

<script>
export default {
	async asyncData({ params, store, $axios, route }) {
		let collection = "exital";
		return await $axios
			.post(
				store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					store.state.collectionsToken,
				{ filter: { slug: route.params.id } }
			)
			.then(res => {
				return { content: res.data.entries[0] };
			});
	},

	head() {
		return {
			title: this.content.title,
			meta: [
				{
					hid: this.content.title,
					name: this.content.title,
					content: this.content.title
				}
			]
		};
	}
};
</script>