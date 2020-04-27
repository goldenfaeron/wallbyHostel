<template>
	<div>
<<<<<<< HEAD
		<h1 class="primary--text main-title" style="text-align: center;">Hotels in Borsh</h1>
		<!-- {{featured}} -->
=======
		<h1 class="primary--text main-title" style="text-align: center;">Hotels in {{$store.state.city}}</h1>
		<!-- <h1>{{$store.state.borshHotels[0][0].order}}</h1> -->
		<!-- {{$store.state.borshHotels}} -->
>>>>>>> 624b40fe8ea20024b0063c17461fb7613336477b
		<v-container grid-list-lg>
			<!-- From cockpit -->
			<h2>Featured Hotels</h2>
			<v-layout row wrap>
				<v-flex xs12 v-for="(item, index) in featured" :key="index">
					<v-card>
						<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->

						<v-card-title primary-title>
							<v-layout align-content-space-between justify-space-between>
								<v-flex>
									<p class="headline d-flex">{{item.name }}</p>
								</v-flex>
							</v-layout>
						</v-card-title>

						<v-img :src="$store.state.assetRoot + item.header_image.path" max-height="10cm"></v-img>

						<v-card-text v-html="item.description">
							<br />
							<!-- {{item.price}} -->
						</v-card-text>

						<div class="text-xs-center">
							<v-rating color="red" :value="item.rating" half-increments readonly></v-rating>
						</div>

						<!-- v-if="!item.inCart" -->
						<v-card-actions>
							<v-btn color="secondary">
								<nuxt-link :to="'/featured_hotels/'+item.slug" class="accent--text">Read more</nuxt-link>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>

			<!-- From Booking.com  -->
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in $store.state.borshHotels[0]" :key="index">
					<v-card height="100%">
						<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->

						<v-card-title primary-title>
							<v-layout align-content-space-between justify-space-between>
								<v-flex>
									<p class="headline d-flex">{{item.name }}</p>
								</v-flex>
							</v-layout>
						</v-card-title>

						<v-img :src="item.image" height="300px"></v-img>

						<v-card-text>

							<p class="truncate-overflow">{{item.description}}</p>
							<br />
							<br />
							From {{item.price}} Euro per night
						</v-card-text>

						<div class="text-xs-center">
							<v-rating color="red" :value="item.rating/2" half-increments readonly></v-rating>
						</div>

						<!-- v-if="!item.inCart" -->
						<v-card-actions>
							<v-btn color="secondary">
								<nuxt-link :to="'/booking/'+index" class="accent--text">Read more</nuxt-link>
							</v-btn>
							<v-btn color="success">Read Reviews</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
<<<<<<< HEAD
export default {
	asyncData({ params, store, $axios, route }) {
		let collection = "hotels";
		return $axios
			.post(
				store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					store.state.collectionsToken
			)
			.then(res => {
				return { featured: res.data.entries.reverse() };
			});
	}
};
</script>
=======
export default {};
</script>
<style lang="css">
	.truncate-overflow {
	--lh: 1.4rem;
	line-height: var(--lh);
	--max-lines: 10;
	position: relative;
	height: calc(var(--lh) * var(--max-lines));
	overflow: hidden;
	padding-right: 1rem; /* space for ellipsis */
}
.truncate-overflow::before {
	position: absolute;
	content: "";
	inset-block-end: 0; /* "bottom" */
	inset-inline-end: 0; /* "right" */
}
.truncate-overflow::after {
	content: "";
	position: absolute;
	inset-inline-end: 0; /* "right" */
	width: 1rem;
	height: 1rem;
	background: white;
}
</style>
>>>>>>> 624b40fe8ea20024b0063c17461fb7613336477b
