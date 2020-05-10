<template>
	<div>
		<SplashTitle :props="shop"></SplashTitle>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12 md6>
					<h1>{{shop.name}}</h1>
					<!-- {{shop.linked_object}} -->
					<p v-html="shop.description"></p>
					<br />

					<v-divider></v-divider>
				</v-flex>
				<v-flex xs12 md6>
					<ImageGallery :props="shop.gallery"></ImageGallery>
				</v-flex>

				<v-flex xs12 my-5></v-flex>
			</v-layout>
		</v-container>

		<!-- Pickers and Whatsapp message -->
		<v-container>
			<v-btn @click="book =!book" color="success">Book Now</v-btn>
		</v-container>

		<v-container grid-list-lg v-if="shop.telephone && book">
			<v-layout row wrap>
				<v-flex xs12 sm6 md4>
					<h2>Chose a time</h2>
					<v-time-picker v-model="time" type="month" width="300"></v-time-picker>
					<v-icon color="primary">mdi-chevron-right</v-icon>
				</v-flex>
				<v-flex xs12 sm6 md4>
					<h2>Chose a date</h2>
					<v-date-picker v-model="picker" color="green lighten-1" width="300"></v-date-picker>
					<v-icon color="primary">mdi-chevron-right</v-icon>
				</v-flex>

				<v-flex xs12 sm6 md4>
					<h2 class="primary--text">Contact {{shop.name}}</h2>
					{{shop.telephone}}
					<br />
					<br />
					<i>"{{encodeWhatsappMessage(shop.owner, 'this', picker, time, false)}}"</i>
					<br />
					<v-btn
						:href="'https://wa.me/'+shop.telephone+'?text='+encodeWhatsappMessage(shop.owner, 'Boating one hour', picker, time, true)"
						color="primary"
					>
						Book on Whatsapp
						<v-icon>mdi-whatsapp</v-icon>
					</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
		<!-- end wa -->

		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm6 md4 v-for="(room, index) in shop.offers" :key="index">
					<CardRoom :details="room.value" :show="false"></CardRoom>
				</v-flex>
			</v-layout>
		</v-container>

		<!-- Linked shops -->
		<v-container grid-list-lg v-if="shop.linked_shops">
			<h2>{{shop.owner}}'s shops</h2>
			{{shop.owner}} has {{shop.linked_shops.length}}
			shop
			<span v-if="shop.linked_shops.length >1">s</span>
			in {{$store.state.city}}
			<v-layout row wrap mt-5>
				<v-flex xs12 sm6 md4 v-for="(item, index) in shop.linked_shops" :key="index">
					<CardBar :props="item"></CardBar>
				</v-flex>
			</v-layout>
		</v-container>

		<!-- Linked hotels -->
		<v-container grid-list-lg v-if="shop.linked_hotels">
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

		<!-- Linked featured hotels -->
		<v-container grid-list-lg v-if="shop.linked_featured_hotels">
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
	data() {
		return {
			time: "",
			picker: new Date().toISOString().substr(0, 10),
			message: "",
			book: false
		};
	},

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

		return {
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

	methods: {
		encodeWhatsappMessage(name, offer, day, time, uri) {
			let msg =
				"Hey " +
				name +
				", I would like to do the " +
				offer +
				" on " +
				day +
				" at " +
				time;
			if (uri == true) {
				return encodeURI(msg);
			} else return msg;
		}
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

