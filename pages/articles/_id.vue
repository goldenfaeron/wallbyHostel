<template>
	<div>
		<v-parallax max-height="300" :src="$store.state.assetRoot + values.image.path"></v-parallax>
		<v-container>
			<v-layout row wrap>
				<v-flex my-5 xs12 md7>
					<h1>{{values.title}}</h1>
					<div v-html="values.content"></div>

					<v-container grid-list-lg fluid>
						<v-layout row wrap>
							<v-flex xs2 v-for="(keyword, index) in values.keywords" :key="index">
								<v-card color="info">
									<v-card-text>
										<v-icon :color="values.image.colors[index]">mdi-tag</v-icon>
										{{keyword}}
									</v-card-text>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
				<v-flex xs12 md5>
					<Gallery :props="values.gallery"></Gallery>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	props: ["props"]
};
</script>

<script>
export default {
	components: {
		Gallery: () => import("@/components/Gallery"),
		BlogPosts: () => import("@/components/BlogPosts")
	},

	async asyncData({ $axios, route, store }) {
		let collection = "articles";

		//Get collection
		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ filter: { slug: route.params.id } }
		);

		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 5, sort: { _created: -1 } }
		);
		return {
			values: request1.data.entries[0],
			blogItems: request2.data.entries
		};
	},
	data() {},
	head() {
		return {
			title: this.values.title,
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: this.values.preview,
					name: this.values.title,
					content: this.values.preview
				}
			]
		};
	},
	jsonld() {
		return {
			"@context": "http://schema.org",
			"@type": "Article",
			name: this.values.title,
			description: this.values.preview,
			keywords: this.values.keywords
			// keyWord
		};
	}
};
</script>

