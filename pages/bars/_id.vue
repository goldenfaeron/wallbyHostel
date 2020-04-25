<template>
	<div>

		<v-container grid-list-lg>
			<v-layout row wrap>
				<!-- Image + Information -->
				<v-flex xs12 md6>
					<v-layout column wrap>
						<v-flex xs12>
							<v-carousel height="600" v-if="data.imageUrls && data.imageUrls.length > 0">
								<v-carousel-item :src="item" v-for="(item, index) in data.imageUrls" :key="index"></v-carousel-item>
							</v-carousel>
							<v-img v-else height="600" src="/img/placeholder.svg"></v-img>
						</v-flex>
						<v-flex>
							<h1>{{data.title}}</h1>
							<h2>{{data.categoryName}}</h2>
							<googleMap :props="data.address"></googleMap>
							{{data.address}}
							<v-list>
								<v-list-item v-for="(item, i) in data.openingHours" :key="i" :to="item.to" router exact>
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

				<!-- Reviews -->
				<v-flex xs12 md6>
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
	components: {
		googleMap: () => import("@/components/googleMap")
	},
	data() {
		return {
			reviews: JSON.parse(
				JSON.stringify(
					this.$store.state.borshBars[0][this.$route.params.id].reviews
				)
			),
			data: this.$store.state.borshBars[0][this.$route.params.id]
		};
	},

	computed: {
		sortReviews() {
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
};
</script>