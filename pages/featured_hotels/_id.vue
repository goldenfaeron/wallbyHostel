<template>
	<div>
		<!-- <SplashTitle :props="hotel"></SplashTitle> -->

		<v-container fluid grid-list-xs>
			<v-layout>
				<ImageGallery :props="hotel.gallery"></ImageGallery>
			</v-layout>
		</v-container>

		<!-- New container -->
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 md6>
					<div class="display-2">
						{{hotel.name}}
						<v-container>
							<v-layout row wrap>
								<v-flex xs1 v-for="(item, index) in hotel.header_image.colors" :key="index">
									<v-icon :color="item">mdi-star</v-icon>
								</v-flex>
							</v-layout>
						</v-container>
					</div>
					<p v-html="hotel.description"></p>
				</v-flex>
				<v-flex xs12 md6>
					<!-- Rooms -->

					<h1 class="primary--text">Choice of {{hotel.rooms.length}} Room types</h1>

					<v-layout row wrap>
						<v-flex xs12 sm6 v-for="(room, index) in hotel.rooms" :key="index">
							<v-icon x-large>mdi-bed</v-icon>
							<CardRoom :details="room.value" :show="false"></CardRoom>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>

		<!-- Title and deacription -->
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 md6>
					<!-- Ammenities -->
					<p class="font-weight-medium">Ammenities</p>
					<v-layout row wrap>
						<v-flex lg6 xs12 v-for="(item, index) in hotel.ammenities" :key="index">
							<v-icon color="green">mdi-check</v-icon>
							{{item}}
						</v-flex>

						<v-flex xs12>
							<v-card flat>
								<v-card-text>
									<v-icon>mdi-food-croissant</v-icon>
									Breakfast: {{hotel.breakfast}}
									<br />
									<v-icon>mdi-key-variant</v-icon>Check in from:
									<b>{{hotel.checkInFrom}}</b>
									until
									<b>{{hotel.checkInTo}}</b>
									<br />
									<v-icon>mdi-map-marker</v-icon>
									Address: {{hotel.address}}
									<br />
									<br />
									<v-icon>mdi-clipboard-list</v-icon>
									<b>Conditions</b>

									<ol v-if="hotel.conditions">
										<!--  -->
										<li v-for="(item, index) in hotel.conditions" :key="index">{{item.value.name}}</li>
									</ol>
									<br />
									<v-divider></v-divider>
									<br />
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>

					<!-- Certificates -->

					<v-layout row wrap>
						<v-flex xs12 v-if="hotel.corona_safe.length > 0">
							<CertificateCorona :props="hotel.name"></CertificateCorona>
						</v-flex>
						<v-flex xs12 v-if="hotel.corona_quarantine_friendly.length > 0">
							<CertificateQuarantine :props="hotel.name"></CertificateQuarantine>
						</v-flex>
						<v-flex xs12 v-if="hotel.excellent_customer_service">
							<CertificateCService :props="hotel.name"></CertificateCService>
						</v-flex>
					</v-layout>
				</v-flex>

				<v-flex xs12 md6>
					<v-container grid-list-lg>
						<v-layout row wrap>
							<v-flex xs12 mt-5>
								<div class="headline">
									<v-icon large>mdi-map-marker-outline</v-icon>Location
								</div>
							</v-flex>
							<v-flex xs12>
								<googleMap props="borsh"></googleMap>
							</v-flex>
						</v-layout>
					</v-container>

					<!-- booking button -->
					<v-layout column align-center>
						<v-flex>
							<v-btn :href="hotel.booking_link" target="_blank" color="primary" x-large>Book now</v-btn>
							<p>Go to booking.com</p>
						</v-flex>
					</v-layout>

					<!-- Google map and location -->
				</v-flex>
			</v-layout>

			<!-- Certificates -->
		</v-container>
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
				store.state.collectionsToken +
				"&rspc=1",
			{ filter: { slug: route.params.id } }
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
			// hotel: request1.data.entries[0],
			hotel: request1.data.entries[0]
		};
	},
	components: {
		googleMap: () => import("@/components/googleMap"),
		CardInstagram: () => import("@/components/CardInstagram"),
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
	},

	head() {
		return {
			title: this.hotel.name,
			meta: [
				{
					hid: "Hotel in " + this.$store.state.city,
					name: this.hotel.name,
					content: this.hotel.description.substr(0, 100)
				}
			]
		};
	}
};
</script>

