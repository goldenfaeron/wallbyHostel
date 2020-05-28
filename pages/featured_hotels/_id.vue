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
				<v-flex xs12 md5>
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
					<v-layout column align-center>
						<v-flex>
							<v-btn :href="hotel.booking_link" target="_blank" color="primary" x-large>Book now</v-btn>
							<p>Go to booking.com</p>
						</v-flex>
					</v-layout>

					<h1 class="primary--text text-center">Choice of {{hotel.rooms.length}} Room types</h1>

					<v-layout row wrap>
						<v-flex xs12 sm6 v-for="(room, index) in hotel.rooms" :key="index">
							<CardRoom :details="room.value" :show="false"></CardRoom>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>

		<!-- Amenities -->
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 md6>
					<!-- Ammenities -->
					<p class="font-weight-medium">Ammenities</p>
					<v-layout row wrap>
						<v-flex x v-for="(item, index) in hotel.ammenities" :key="index">
							<v-icon color="green">mdi-check</v-icon>
							{{item}}
						</v-flex>

						<v-flex xs12 md6>
							<v-card>
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

					<!-- <v-layout row wrap>
						<v-flex xs12 v-if="hotel.corona_safe.length > 0 && hotel.corona_safe">
							<CertificateCorona :props="hotel.name"></CertificateCorona>
						</v-flex>
						<v-flex
							xs12
							v-if="hotel.corona_quarantine_friendly.length > 0 && hotel.corona_quarantine_friendly"
						>
							<CertificateQuarantine :props="hotel.name"></CertificateQuarantine>
						</v-flex>
						<v-flex xs12 v-if="hotel.excellent_customer_service">
							<CertificateCService :props="hotel.name"></CertificateCService>
						</v-flex>
					</v-layout>-->
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
		Title: () => import("@/components/transitions/Title"),
		googleMap: () => import("@/components/maps/googleMap"),
		CardInstagram: () => import("@/components/cards/CardInstagram"),

		CommentsParallax: () => import("@/components/CommentsParallax"),

		ImageGallery: () => import("@/components/gallery/ImageGallery"),
		SplashTitle: () => import("@/components/SplashTitle"),
		CardRoom: () => import("@/components/cards/CardRoom"),
		CertificateCorona: () =>
			import("@/components/certificates/CertificateCorona"),
		CertificateCService: () =>
			import("@/components/certificates/CertificateCService"),
		CertificateQuarantine: () =>
			import("@/components/certificates/CertificateQuarantine")
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

