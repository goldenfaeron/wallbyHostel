<template>
	<div>
		<v-responsive class="mx-auto" width="56">
			<v-icon x-large>mdi-home</v-icon>
		</v-responsive>

		<Title>
			<h1
				class="primary--text main-title"
				style="text-align: center;"
			>The best hotels in {{$store.state.country}}</h1>
		</Title>
		<BookingList :props="booking" :paginate="schema" route="region/" collection="booking_region"></BookingList>
	</div>
</template>

<script>
export default {
	data() {
		return {
			skip: 20
		};
	},
	methods: {
		paginate() {}
	},
	components: {
		BookingList: () => import("@/components/views/BookingList"),
		Title: () => import("@/components/transitions/Title"),
		CardFeaturedHotel: () => import("@/components/CardFeaturedHotel")

		// Assurance: () => import("@/components/Assurance"),
		// Mission: () => import("@/components/Mission")
	},

	async asyncData({ $axios, route, store }) {
		let collection = "hotels";
		let collection2 = "booking_region";

		// let collection2 = "booking_borsh";

		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection2 +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{ fields: { features: 0, rooms: 0 }, limit: 20 }
		);
		let request3 = await $axios.get(
			store.state.webRoot +
				"/api/collections/collection/" +
				collection2 +
				"?token=" +
				store.state.collectionSchema
		);
		return {
			schema: request3.data.itemsCount,
			booking: request2.data.entries.reverse()
		};
	},

	head() {
		return {
			title: "Hotels in " + this.$store.state.city,
			meta: [
				{
					hid: "Hotels in " + this.$store.state.city,
					name: "Hotels in " + this.$store.state.city,
					content: "Hotels in " + this.$store.state.city
				}
			]
		};
	}
};
</script>
<style lang="css">
.truncate-overflow {
	--lh: 1.4rem;
	line-height: var(--lh);
	--max-lines: 10;
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
