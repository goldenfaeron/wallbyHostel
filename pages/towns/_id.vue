<template>
	<div>
		<div class="display-2 text-center">{{town.title}}</div>
		<div class="heading text-center">
			{{$t('towns.id_title')}}
			{{$store.state.city}}
		</div>

		<ImageGalleryUrls :props="town.imageUrls"></ImageGalleryUrls>

		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12>
					<v-layout column wrap>
						<v-flex>
							<googleMapCoordinate :props="{Lat: town.location.lat, Lng: town.location.lng}"></googleMapCoordinate>
						</v-flex>
					</v-layout>
				</v-flex>
				<!-- {{town.instagram}} -->

				<v-flex xs12 v-if="town.instagram">
					<v-container grid-list-xs fluid>
						<div class="display-1 text-center">
							<v-icon x-large>mdi-instagram</v-icon>
							{{town.title}} {{$t('towns.id_instagram')}}
						</div>
						<v-layout row wrap align-center justify-center>
							<v-flex xs6 v-for="(item, index) in town.instagram" :key="index">
								<CardInstagram :props="item"></CardInstagram>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
				<!-- comment -->
				<v-flex xs12 md6 v-if="sortReviews">
					<v-layout>
						<v-flex xs12>
							<h2 class="text-capitalize">{{$t('reviews')}}</h2>
							<div v-for="(item, index) in sortReviews" :key="index">
								<h3>{{item.name}}</h3>
								<br />
								{{item.text}}
								<br />
								{{item.publishAt}}
								<br />
								<div class="text-xs-center">
									<v-rating color="red" :value="item.stars" half-increments readonly></v-rating>
									<br />
									<br />
								</div>
							</div>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ params, store, $axios, route }) {
		let collection = "googleplaces_nearby_villages";
		return await $axios
			.post(
				store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					store.state.collectionsToken,
				{ filter: { slug: route.params.id } }
			)
			.then(res => {
				return {
					town: res.data.entries[0],
					reviews: JSON.parse(JSON.stringify(res.data.entries[0].reviews))
				};
			});
	},

	components: {
		ImageGalleryUrls: () => import("@/components/ImageGalleryUrls"),
		CardInstagram: () => import("@/components/CardInstagram"),
		googleMapCoordinate: () => import("@/components/googleMapCoordinate")
	},
	data() {
		return {
			// reviews: JSON.parse(JSON.stringify(town.reviews))
			// town: this.towns[this.$route.params.id]
		};
	},

	computed: {
		sortReviews() {
			if (this.reviews) {
				let reviewsClone = this.reviews;
				let arr = [];

				//Check if has text and push to new array
				reviewsClone.forEach(element => {
					if (element.text) {
						element.text = element.text.replace("(Translated by Google)", "");
						arr.push(element);
					}
				});
				//Sort arr
				function sortByLength(array) {
					return array.sort((x, y) => x.text.length - y.text.length);
				}
				return sortByLength(arr).reverse();
			}
		}
	},

	head() {
		return {
			title: this.town.title,
			meta: [
				{
					hid: this.town + " near " + this.$store.state.city,
					name: this.town.title,
					content: this.town + " near " + this.$store.state.city
				}
			]
		};
	}
};
</script>