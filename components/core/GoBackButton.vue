<template>
	<v-flex>
		<v-btn @click="back()" small fixed top text right fab v-show="scrollButton">
			<v-icon color="grey" x-large>mdi-menu</v-icon>
		</v-btn>
		<v-card v-show="menu">
			test
		</v-card>
	</v-flex>
</template>

<script>
export default {
	data() {
		return {
			scrollButton: true,
			menu: false
		};
	},

	methods: {
		back() {
			return this.$router.back();
		}
		// top() {
		// 	window.scrollTo({
		// 		top: 0,
		// 		left: 0,
		// 		behavior: "smooth"
		// 	});
		// },
	}
};
</script>