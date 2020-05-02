<template>
	<div>
		<template>
			<v-container grid-list-lg>
				<v-layout row wrap my-5 v-for="(item, index) in content" :key="index">
					<v-flex xs8 id="title">
						<h1>{{item.title}}</h1>

						<div v-html="item.text_1.substr(0,150)"></div>
						<br />
						<nuxt-link :to="'corona/'+ item.slug">
							<v-btn color="primary ">Read more</v-btn>
						</nuxt-link>
					</v-flex>
					<v-flex xs4 id="image_1">
						<v-img :src="$store.state.assetRoot + item.image_1.path"></v-img>
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
	}
};
</script>