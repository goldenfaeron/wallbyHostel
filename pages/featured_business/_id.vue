<template>
	<div>
		<SplashTitle :props="shop"></SplashTitle>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12 md6>
					<h1>{{shop.name}}</h1>
					<!-- {{shop.linked_object}} -->
					<p v-html="shop.description"></p>
					<v-divider></v-divider>
				</v-flex>
				<v-flex xs12 md6>
					<ImageGallery :props="shop.gallery"></ImageGallery>
				</v-flex>

				<v-flex xs12 my-5>
					<v-container grid-list-lg>
						<v-layout row wrap>
							<v-flex xs12 sm6 md4 v-for="(room, index) in shop.offers" :key="index">
								<CardRoom :details="room.value" :show="false"></CardRoom>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
			</v-layout>
		</v-container>

		<v-container grid-list-lg>
			<h2>{{shop.name}} Offers</h2>
			<v-layout row wrap mt-5>
				<v-flex xs12 sm6 md4 v-for="(item, index) in shop.linked_shops" :key="index">
					<CardBar :props="item"></CardBar>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
			<h2>{{shop.owner}}'sother businesses</h2>
			<v-layout row wrap mt-5>
				<v-flex xs12 sm6 md4 v-for="(item, index) in shop.linked_shops" :key="index">
					<CardBar :props="item"></CardBar>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
			<h2>{{shop.owner}}'s hotels</h2>
			{{shop.owner}} has {{shop.linked_hotels.length}} hotel
			<span v-if="shop.linked_hotels.length >1">s</span>
			in {{$store.state.city}}
			<v-layout row wrap mt-5>
				<v-flex xs12 sm6 md4 v-for="(item, index) in shop.linked_hotels" :key="index">
					<CardHotel :props="item"></CardHotel>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
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
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "shops_featured";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ filter: { slug: route.params.id }, populate: 1 }
		);

		// let request2 = await $axios.post(
		// 	store.state.webRoot +
		// 		"/api/collections/get/" +
		// 		collection +
		// 		"?token=" +
		// 		store.state.collectionsToken,
		// 	{ limit: 5, sort: { _created: -1 } }
		// );
		return {
			// shop: request1.data.entries[0],
			shop: request1.data.entries[0]
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

		CertificateCorona: () => import("@/components/CertificateCorona"),
		CertificateCService: () => import("@/components/CertificateCService"),
		CertificateQuarantine: () => import("@/components/CertificateQuarantine")
	},
	data() {
		return {};
	},

	head() {
		return {
			title: this.shop.name,
			meta: [
				{
					hid: "shop in " + this.$store.state.city,
					name: this.shop.name,
					content: this.shop.description.substr(0, 100)
				}
			]
		};
	}
};
</script>

