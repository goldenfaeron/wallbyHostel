<template>
	<div>
		<v-btn
			v-bind:class="{active: active, inactive: inactive} "
			color="primary lighten-2"
			@click="quickNav('right')"
			small
			:large="active"
			fixed
			bottom
			left
		>
			<v-icon>mdi-chevron-left</v-icon>
		</v-btn>
		<!-- {{navPos}} -->
		<!-- {{$route.path}} -->
		<v-btn
			v-bind:class="{active: active, inactive: inactive} "
			color="primary lighten-2"
			@click="quickNav('right')"
			:large="active"
			small
			fixed
			bottom
			right
		>
			<v-icon>mdi-chevron-right</v-icon>
		</v-btn>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: false,
			inactive: true
		};
	},
	computed: {
		nav() {
			return this.$store.getters.getNavigation;
		},

		navPos() {
			return this.nav
				.map(e => {
					return e.to;
				})
				.indexOf(this.$route.path);
		}
	},

	methods: {
		handleScroll(event) {
			console.log("hello");
			// Any code to be executed when the window is scrolled
		},

		quickNav(direction) {
			this.activate();
			// console.log("clicked");
			let length = this.nav.length - 1;
			//reset position
			if (direction == "right") {
				if (this.navPos == length) {
					return this.$router.push(this.nav[0].to);
				} else {
					return this.$router.push(this.nav[this.navPos + 1].to);
				}
			}
			if (direction == "left") {
				if (this.navPos == 0) {
					return this.$router.push(this.nav[length].to);
				} else {
					return this.$router.push(this.nav[this.navPos - 1].to);
				}
			}
		},
		activate() {
			this.active = true;
			this.inactive = false;

			setTimeout(() => {
				this.active = false;
				this.inactive = true;
			}, 3000);
		}
	}
};
</script>

<style lang="css">
.active {
	opacity: 1;
}
.inactive {
	opacity: 0.3;
}
</style>
