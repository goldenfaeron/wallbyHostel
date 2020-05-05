<template>
	<div>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<!-- Image + Information -->
				<v-flex xs12 md6>
					<v-layout column wrap>
						<v-flex xs12 v-if="airport.imageUrls">
							<v-carousel height="600" v-if="airport.imageUrls && airport.imageUrls.length > 0">
								<v-carousel-item :src="item" v-for="(item, index) in airport.imageUrls" :key="index"></v-carousel-item>
							</v-carousel>
							<v-img v-else height="600" src="/img/placeholder.svg"></v-img>
						</v-flex>
						<v-flex>
							<h1>{{airport.title}}</h1>
							<h2>{{airport.categoryName}}</h2>
							<googleMap :props="airport.address"></googleMap>
							<v-card>
								<v-card-title primary-title>Contact</v-card-title>
								<v-card-text>
									<span v-if="airport.address">
										<v-icon>mdi-map-marker</v-icon>
										{{airport.address}}
									</span>
									<br />
									<span v-if="airport.phone">
										<v-icon>mdi-phone</v-icon>
										<a :href="'tel:'+ airport.phone">{{airport.phone}}</a>
									</span>
									<br />
									<span v-if="airport.website">
										<v-icon>mdi-sign-direction</v-icon>
										<a target="_blank" :href="airport.web_url">View Website</a>
									</span>
								</v-card-text>
							</v-card>
							<v-list>
								<v-list-item v-for="(item, i) in airport.openingHours" :key="i" :to="item.to" router exact>
									<v-list-item-action>
										<v-list-item-title>
											<v-icon>mdi-calendar-clock</v-icon>
											<b>{{item.day}}</b>
										</v-list-item-title>
									</v-list-item-action>
									<div></div>
									<v-list-item-content>
										<v-list-item-title v-text="item.hours" />
									</v-list-item-content>
								</v-list-item>
							</v-list>
						</v-flex>
					</v-layout>
				</v-flex>
				<!-- comment -->
				<v-flex xs12 md6 v-if="sortReviews">
					<v-layout>
						<v-flex xs12>
							<h2>Reviews</h2>
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
	asyncData({ params, store, $axios, route }) {
		let collection = "googleplaces_airports_borsh";
		return $axios
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
					airport: res.data.entries[0],
					reviews: JSON.parse(JSON.stringify(res.data.entries[0].reviews))
				};
			});
	},

	components: {
		googleMap: () => import("@/components/googleMap")
	},
	data() {
		return {
			// reviews: JSON.parse(JSON.stringify(airport.reviews))
			// airport: this.airports[this.$route.params.id]
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
			title: this.airport.title,
			meta: [
				{
					hid: this.airport + " near " + this.$store.state.city,
					name: this.airport.title,
					content: this.airport + " near " + this.$store.state.city
				}
			]
		};
	}
};
</script>