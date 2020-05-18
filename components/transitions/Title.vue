<template>
	<div>
		<v-slide-y-transition>
			<!-- <v-container grid-list-xs > -->
			<div v-show="show">
				<slot></slot>
			</div>
			<!-- </v-container> -->
		</v-slide-y-transition>
	</div>

	<!-- We're accepting dentist referrals -->
	<!--  -->
</template>

<script>
export default {
	data() {
		return {
			show: false
		};
	},
	mounted() {
		// manually trigger transition
		this.show = true;
	}
};
</script>

<style lang="css" scoped>
.assurance {
	text-align: center;
}

/* .fade-transition-enter-active,
.fade-transition-leave-active {
	transition: 3s;
} */
.slide-y-transition-enter-active,
.slide-y-transition-leave-active {
	transition: 2s;
}
</style>

