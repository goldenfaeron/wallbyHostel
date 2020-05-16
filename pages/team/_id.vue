<template>
	<div>
		<!--<core-toolbar />-->
		<core-view :props="featured" />
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
				{ filter: { slug: route.params.id } }
			)
			.then(res => {
				return { featured: res.data.entries[0] };
			});
	},

	components: {
		CoreFooter: () => import("@/components/core/Footer"),
		CoreToolbar: () => import("@/components/core/Toolbar"),
		CoreView: () => import("@/components/core/View")
	},

	head() {
		return {
			title: this.featured.name,
			meta: [
				{
					hid: this.$store.state.name + " Developer Team",
					name: this.featured.name,
					content: " Developer Team"
				}
			]
		};
	}
};
</script>

