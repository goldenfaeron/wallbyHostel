<template>
	<div>
		hello
		<!-- {{$store.state.pageData}} -->
		<div class="test">{{$store.state.pageData.name}}</div>
	</div>
</template>


<script>
export default {
	middleware: "api",
	data() {
		return {
			response: ""
		};
	},

	components: {
		Title: () => import("@/components/transitions/Title"),
		CardAirbnb: () => import("@/components/cards/CardAirbnb"),
		AirbnbList: () => import("@/components/views/AirbnbList")
	},

	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	filters: {
		truncate(string, value) {
			return (string || "").substring(0, value);
		}
	},

	computed: {},
	head() {
		return {
			title: this.$t("airbnbs_in") + this.$store.state.city,
			meta: [
				{
					hid: this.$t("airbnbs_in") + this.$store.state.city,
					name: "AirBnB in " + this.$store.state.city,
					content: "AirBnB in " + this.$store.state.city
				}
			]
		};
	}
};
</script>
<style >
.truncate-overflow {
	--lh: 1.4rem;
	line-height: var(--lh);
	--max-lines: 3;
	position: relative;
	height: calc(var(--lh) * var(--max-lines));
	overflow: hidden;
	padding-right: 1rem; /* space for ellipsis */
}
.truncate-overflow::before {
	position: absolute;
	content: "";
	inset-block-end: 0; /* "bottom" */
	inset-inline-end: 0; /* "right" */
}
.truncate-overflow::after {
	content: "";
	position: absolute;
	inset-inline-end: 0; /* "right" */
	width: 1rem;
	height: 1rem;
	background: white;
}
</style>