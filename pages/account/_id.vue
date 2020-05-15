<template>
	<div>
		<!-- end wa -->
		<!-- 
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm6 md4 v-for="(room, index) in shop.offers" :key="index">
					<CardRoom :details="room.value" :show="false"></CardRoom>
				</v-flex>
			</v-layout>
		</v-container>-->

		<!-- Linked shops -->
		<!-- {{shop}} -->
		<!-- {{$store.state.user.user}} -->
		<!-- {{$store.state.user.id}} -->
		<v-container>
			<div class="display-2">Your businesses</div>
			<v-layout row wrap mt-5>
				<v-flex xs12 sm6 md4 v-for="(item, index) in shop" :key="index">
					<CardFeaturedBusiness :props="item"></CardFeaturedBusiness>
				</v-flex>
			</v-layout>
			<v-layout row wrap>
				<v-btn :to="'/login' " color="red">Log out</v-btn>
			</v-layout>
		</v-container>

		<!-- Linked hotels -->
		<!-- <v-container grid-list-lg v-if="shop.linked_hotels">
			<h2>{{shop.owner}}'s hotels</h2>
			{{shop.owner}} has {{shop.linked_hotels.length}} hotel
			<span v-if="shop.linked_hotels.length >1">s</span>
			in {{$store.state.city}}
			<v-layout row wrap mt-5>
				<v-flex xs12 sm6 md4 v-for="(item, index) in shop.linked_hotels" :key="index">
					<CardHotel :props="item"></CardHotel>
				</v-flex>
			</v-layout>
		</v-container>-->

		<!-- Linked featured hotels -->
		<!-- <v-container grid-list-lg v-if="shop.linked_featured_hotels">
			<h2>{{shop.name}}other hotels</h2>
			{{shop.owner}} has {{shop.linked_featured_hotels.length}} featured hotel
			<span
				v-if="shop.linked_featured_hotels.length >1"
			>s</span>
			in {{$store.state.city}}
			<v-layout row wrap mt-5>
				<v-flex xs12 sm6 md4 v-for="(item, index) in shop.linked_featured_hotels" :key="index">
					<CardFeaturedHotel :props="item"></CardFeaturedHotel>
				</v-flex>
			</v-layout>
		</v-container>-->
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},

	async asyncData({ $axios, route, store }) {
		let collection = "shops_featured";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ filter: { access: store.state.user.id } }
		);

		return {
			shop: request1.data.entries
		};
	},
	components: {
		CallToAction: () => import("@/components/CallToAction"),
		CommentsParallax: () => import("@/components/CommentsParallax"),
		JumbotronGradient: () => import("@/components/JumbotronGradient"),
		ImageGallery: () => import("@/components/ImageGallery"),
		SplashTitle: () => import("@/components/SplashTitle"),
		CardRoom: () => import("@/components/CardRoom"),
		CardBar: () => import("@/components/CardBar"),
		CardHotel: () => import("@/components/CardHotel"),
		CardFeaturedHotel: () => import("@/components/CardFeaturedHotel"),
		CardFeaturedBusiness: () => import("@/components/CardFeaturedBusiness"),
		CertificateCorona: () => import("@/components/CertificateCorona"),
		CertificateCService: () => import("@/components/CertificateCService"),
		CertificateQuarantine: () => import("@/components/CertificateQuarantine")
	},

	head() {
		// return {
		// 	title: this.shop.name,
		// 	meta: [
		// 		{
		// 			hid: "shop in " + this.$store.state.city,
		// 			name: this.shop.name,
		// 			content: this.shop.description.substr(0, 100)
		// 		}
		// 	]
		// };
	}
};
</script>

