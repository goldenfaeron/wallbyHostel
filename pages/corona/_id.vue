<template>
	<div>
		<template>
			<v-container grid-list-lg>
				<v-layout row wrap>
					<v-flex xs12 id="title">
						<h1>{{content.title}}</h1>
					</v-flex>
					<v-flex xs12 id="image_1">
						<v-img :src="$store.state.assetRoot + content.image_1.path"></v-img>
					</v-flex>
					<v-flex xs12 id="text_1">
						<div v-html="content.text_1"></div>
					</v-flex>
					<v-flex xs12 id="image_2">
						<v-img :src="$store.state.assetRoot + content.image_2.path"></v-img>
					</v-flex>

					<v-flex xs12 id="text_2">
						<div v-html="content.text_2"></div>
					</v-flex>
				</v-layout>
			</v-container>
		</template>
	</div>
</template>

<script>
export default {
	asyncData({ params, store, $axios, route }) {
		let collection = "corona";
		return $axios
			.post(
				store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					store.state.collectionsToken,
				{ filter: { slug: route.params.id } },
				{
					fields: {
						title: 1,
						text_1: 1,
						image_1: 1,
						text_2: 1,
						image_2: 1,
						slug: 1
					}
				}
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
					content: this.content.text_1
				}
			]
		};
	}
};
</script>