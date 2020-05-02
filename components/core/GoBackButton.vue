<template>
	<v-flex>
		<v-btn @click="back()" color="red lighten-3" small fixed bottom right fab v-show="scrollButton">
			<v-icon color="white" x-large>mdi-chevron-left</v-icon>
		</v-btn>
	</v-flex>
</template>

<script>
export default {
	data() {
		return {
			scrollButton: true
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