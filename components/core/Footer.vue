<template>
	<footer class="v-footer v-sheet v-sheet--tile theme--dark v-footer--padless" data-booted="true">
		<div class="row ma-0">
			<div class="primary lighten-1 pa-5 col-md-3 col-12">
				<h3 class="headline mb-3">What are you looking for?</h3>

				<v-layout column>
					<v-flex my-2 xs12 v-for="(item, index) in nav" :key="index">
						<nuxt-link :to="item.to">
							<v-icon v-if="item.to == $route.path" color="success">mdi-chevron-right</v-icon>
							<v-icon>{{item.icon}}</v-icon>
							{{item.title}}
						</nuxt-link>
					</v-flex>
				</v-layout>
			</div>
			<div class="primary lighten-2 pa-5 col-md-9 col-12">
				<div class="row"></div>
			</div>
			<div
				class="text-center primary darken-2 pa-3 col col-12"
			>© 2020 {{$store.state.name}} — All Rights reserved.</div>
		</div>
	</footer>
</template>

<script>
export default {
	computed: {
		nav() {
			return this.$store.getters.getNavigation;
		}
	},

	components: {
		SocialMedia: () => import("@/components/SocialMedia")
	}
};
</script>
