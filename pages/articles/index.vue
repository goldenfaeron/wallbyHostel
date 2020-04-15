
<template>
	<v-layout column>
		<h1 class="container">Articles</h1>
		<v-flex my-5 xs12 v-for="(item, index) in values" :key="index">
			<v-container grid-list-lg>
				<v-layout row wrap>
					<v-flex xs12 md3>
						<v-img
							height="150"
							:src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+item.image._id+'&w=250&h=250&o=true'"
						></v-img>
					</v-flex>

					<v-flex xs12 md9>
						<h2>{{item.title}}</h2>
						<br />
						{{item.preview.substr(0,200)}}...
						<br />
						<br />

						<!-- <a :href="'/blog/'+item.slug">Read more</a> -->
						<v-btn color="primary">
							<nuxt-link :to="'/articles/'+item.slug" class="accent--text">Read more</nuxt-link>
						</v-btn>
					</v-flex>
				</v-layout>
			</v-container>
			<br />
			<v-divider></v-divider>
		</v-flex>
	</v-layout>
</template>






<script>
export default {
	components: {
		Gallery: () => import("@/components/Gallery")
	},

	//Get data for this page
	asyncData({ params, store, $axios, route }) {
		let collection = "articles";
		return $axios
			.post(
				store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					store.state.collectionsToken
			)
			.then(res => {
				return { values: res.data.entries.reverse() };
			});
	},
	data() {},
	head() {
		return {
			title: "Blog",
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: "description",
					name: "description",
					content: "My blog"
				}
			]
		};
	}
};

// export default {
// 	async asyncData({ $axios, route, params}) {
// 		let collection = "bupaPractises";
// 		let { data } = await $axios.post(
// 			$store.state.webRoot +
// 				"/api/collections/get/" +
// 				collection +
// 				"?token=" +
// 				$store.state.bupaPractisesToken,
// 			{
// 				filter: { permalink: route.params.id }
// 			}
// 		);
// 		return { values: data.entries[0] };
// 	},
// 	data() {}
// };
</script>

