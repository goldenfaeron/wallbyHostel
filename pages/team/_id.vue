<template>
	<div>
		<!--<core-toolbar />-->
		<core-view :props="featured" />

		<core-footer />
	</div>
</template>

<script>
export default {
	asyncData({ params, store, $axios, route }) {
		let collection = "team";
		return $axios
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
	}
};
</script>

