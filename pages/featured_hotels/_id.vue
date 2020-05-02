<template>
	<div>
		<SplashTitle :props="hotel"></SplashTitle>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12 md6>
					<h1>{{hotel.name}}</h1>
					<!-- {{hotel.linked_object}} -->
					<p v-html="hotel.description"></p>
					<v-divider></v-divider>
				</v-flex>
				<v-flex xs12 md6>
					<ImageGallery :props="hotel.gallery"></ImageGallery>
				</v-flex>

				<v-flex xs12 my-5>
					<v-container grid-list-lg>
						<v-layout row wrap>
							<v-flex xs12 sm6 md4 v-for="(room, index) in hotel.rooms" :key="index">
								<CardRoom :details="room.value" :show="false"></CardRoom>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs12 sm6 md4>
					<CertificateCorona :props="hotel.name"></CertificateCorona>
				</v-flex>
				<v-flex xs12 sm6 md4>
					<CertificateQuarantine :props="hotel.name"></CertificateQuarantine>
				</v-flex>
				<v-flex xs12 sm6 md4>
					<CertificateCService :props="hotel.name"></CertificateCService>
				</v-flex>
			</v-layout>
		</v-container>

		<!-- <CommentsParallax
			:props="{comment: hotel.comment, title: hotel.name, subtitle: hotel.location.address}"
		></CommentsParallax>-->
		<CallToAction
			:props="{
             booking: hotel.booking_link, 
             website: hotel.website_link,
             airbnb: hotel.airbnb_link }"
		></CallToAction>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "hotels";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ filter: { slug: route.params.id } }
		);

		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 5, sort: { _created: -1 } }
		);
		return {
			// hotel: request1.data.entries[0],
			hotel: request1.data.entries[0]
		};
	},
	components: {
		CallToAction: () => import("@/components/CallToAction"),
		CommentsParallax: () => import("@/components/CommentsParallax"),
		JumbotronGradient: () => import("@/components/JumbotronGradient"),
		ImageGallery: () => import("@/components/ImageGallery"),
		SplashTitle: () => import("@/components/SplashTitle"),
		CardRoom: () => import("@/components/CardRoom"),
		CertificateCorona: () => import("@/components/CertificateCorona"),
		CertificateCService: () => import("@/components/CertificateCService"),
		CertificateQuarantine: () => import("@/components/CertificateQuarantine")
	},
	data() {
		return {};
	}
};
</script>

