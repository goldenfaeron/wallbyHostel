<template>
	<div>
		<v-img
			:src="require('@/assets/airbnb.jpg')"
			:height="[$vuetify.breakpoint.smAndUp ? '400px' : '200px']"
		>
			<template v-slot:placeholder>
				<v-layout fill-height align-center justify-center ma-0>
					<v-progress-circular indeterminate color="primary"></v-progress-circular>
				</v-layout>
			</template>
		</v-img>
		<AirbnbList :props="data"></AirbnbList>
	</div>
</template>

<script>
export default {
	components: {
		CardAirbnb: () => import("@/components/CardAirbnb"),
		AirbnbList: () => import("@/components/views/AirbnbList")
	},
	async asyncData({ params, store, $axios, route }) {
		let collection = "airbnb";
		return await $axios
			.post(
				store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					store.state.collectionsToken +
					"&rspc=1",
				{
					fields: { name: 1, photos: 1, roomType: 1, stars: 1, slug: 1 }
				}
			)
			.then(res => {
				return { data: res.data.entries };
			});
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
	head() {
		return {
			title: "AirBnB in " + this.$store.state.city,
			meta: [
				{
					hid: "AirBnB in " + this.$store.state.city,
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