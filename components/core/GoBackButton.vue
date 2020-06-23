<template>

	<v-flex>
		<v-btn @click="menu= !menu" small fixed top text right fab v-show="scrollButton">
			<v-icon color="grey" x-large>mdi-menu</v-icon>
		</v-btn>
		<v-container grid-list-lg v-show="menu" fluid :style="'height:' +windowSize.y+'px;'">
			<v-layout column align-center justify-center wrap>

					<v-flex v-for="(item, index) in nav" :key="index" v-if="index < 9" xs12> <nuxt-link :to="item.to"><div class="display-3 secondary--text" >{{item.title}}</div></nuxt-link></v-flex>


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
	},
	
};
</script>
<style lang="">

</style>
