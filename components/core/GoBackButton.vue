<template>
	<v-flex>
		<v-btn @click="menu= !menu" small fixed top text right fab v-show="scrollButton">
			<v-icon color="grey" x-large>mdi-menu</v-icon>
		</v-btn>
		<v-container grid-list-lg v-show="menu" fluid :style="'height:' +windowSize.y+'px;'">
			<v-layout column align-center justify-center wrap>
				<v-flex v-for="(item, index) in nav" :key="index" v-if="index < 9" xs12>
					<nuxt-link :to="item.to">
						<v-hover>
							<div
								slot-scope="{ hover }"
								@click="menu= false"
								:class="`${hover ? 'white' : 'secondary'}--text text--lighten-3 font-weight-bold display-3`"
							>{{item.to}}</div>
						</v-hover>
					</nuxt-link>
				</v-flex>
			</v-layout>
		</v-container>
	</v-flex>
</template>

<script>
import { Mixin } from "~/mixins/navigation.js";
export default {
	mixins: [Mixin],
	data() {
		return {
			scrollButton: true,
			menu: false,
			windowSize: {
				x: 0,
				y: 0
			}
		};
	},

	mounted() {
		this.onResize();
	},

	methods: {
		back() {
			return this.$router.back();
		},
		onResize() {
			this.windowSize = { x: window.innerWidth, y: window.innerHeight };
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
<style lang="css">
.hover {
	text-decoration: none;
}
.hover.ex1 {
	color: black;
}
.hover.ex1:hover,
.hover.ex1:active {
	color: white;
}
</style>
