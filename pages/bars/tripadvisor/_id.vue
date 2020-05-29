<template>
	<div>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<!-- Image + Information -->
				<v-flex xs12 md6>
					<v-layout column wrap>
						<v-flex xs12 v-if="bar.imageUrls">
							<v-carousel height="600" v-if="bar.imageUrls && bar.imageUrls.length > 0">
								<v-carousel-item :src="item" v-for="(item, index) in bar.imageUrls" :key="index"></v-carousel-item>
							</v-carousel>
							<v-img v-else height="600" src="/img/placeholder.svg"></v-img>
						</v-flex>
						<!-- map and contact info -->
						<v-flex>
							<h1>{{bar.name}}</h1>
							<h2>{{bar.type}}</h2>
							<googleMapCoordinate :props="{Lat: bar.latitude, Lng: bar.longitude}"></googleMapCoordinate>
							<v-card>
								<v-card-title primary-title>Contact</v-card-title>
								<v-card-text>
									<span v-if="bar.address">
										<v-icon>mdi-map-marker</v-icon>
										{{bar.address}}
									</span>
									<br />
									<span v-if="bar.phone">
										<v-icon>mdi-phone</v-icon>
										<a :href="'tel:'+ bar.phone">{{bar.phone}}</a>
									</span>
									<br />
									<span v-if="bar.web_url">
										<v-icon>mdi-sign-direction</v-icon>
										<a target="_blank" :href="bar.web_url">View Tripadvisor Profile</a>
									</span>
								</v-card-text>
							</v-card>
							<v-list>
								<v-list-item v-for="(item, i) in bar.openingHours" :key="i" :to="item.to" router exact>
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

				<v-flex xs12 md6 v-if="sortReviews">
					<v-layout>
						<v-flex xs12>
							<h2>Reviews</h2>
							<v-divider></v-divider>
							<br />
							<div v-for="(item, index) in sortReviews" :key="index">
								<h3>{{item.title}}</h3>
								<br />
								{{item.text}}
								<br />
								{{item.publishAt}}
								<br />
								<div class="text-xs-center">
									<v-rating color="red" :value="item.rating" half-increments readonly></v-rating>
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
		let collection = "tripadvisor_restuarants_borsh";
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
					bar: res.data.entries[0],
					reviews: JSON.parse(JSON.stringify(res.data.entries[0].reviews))
				};
			});
	},

	components: {
		googleMapCoordinate: () => import("@/components/maps/googleMapCoordinate")
	},
	data() {
		return {
			// reviews: JSON.parse(JSON.stringify(bar.reviews))
			// bar: this.bars[this.$route.params.id]
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
			title: this.bar.name,
			meta: [
				{
					hid: this.bar.type + "in" + this.$store.state.city,
					name: this.name,
					content: this.bar.type + "in" + this.$store.state.city
				}
			]
		};
	}
};
</script>