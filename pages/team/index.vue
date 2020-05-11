<template>
	<div>
		<!--<core-toolbar />-->
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12 v-for="(item, index) in members" :key="index">
					<!-- {{item}} -->
					<Welcome :props="item"></Welcome>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ params, store, $axios, route }) {
		let collection = "team";
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
						name: 1,
						profile: 1,
						page_welcome_title: 1,
						page_welcome_text: 1,
						page_button_0: 1,
						slug: 1
					}
				}
			)
			.then(res => {
				return { members: res.data.entries };
			});
	},

	components: {
		Welcome: () => import("@/components/Welcome")
	},

	head() {
		return {
			title: this.$store.state.name + " Developer Team",
			meta: [
				{
					hid: this.$store.state.name + " Developer Team",
					name: " Developer Team",
					content: " Developer Team"
				}
			]
		};
	}
};
</script>