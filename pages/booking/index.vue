<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">Hotels in {{$store.state.city}}</h1>
		<p
			class="secondary--text"
			style="text-align: center;"
		>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
		<Mission></Mission>

		<v-container grid-list-lg>
			<!-- Featured -->
			<v-layout row wrap>
				<v-flex xs12 sm6 md4 v-for="(item, index) in featured" :key="index">
					<CardFeaturedHotel :props="item"></CardFeaturedHotel>
				</v-flex>
			</v-layout>

			<!-- From Booking.com  -->
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in $store.state.borshHotels[0]" :key="index">
					<CardHotel :props="item" :index="index"></CardHotel>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	components: {
		CardFeaturedHotel: () => import("@/components/CardFeaturedHotel"),
		CardHotel: () => import("@/components/CardHotel"),
		Assurance: () => import("@/components/Assurance"),
		Mission: () => import("@/components/Mission")
	},

	asyncData({ params, store, $axios, route }) {
		let collection = "hotels";
		return $axios
			.post(
				store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					store.state.collectionsToken
			)
			.then(res => {
				return { featured: res.data.entries.reverse() };
			});
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
