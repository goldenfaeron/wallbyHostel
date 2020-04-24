<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">Hotels in Borsh</h1>
		<!-- {{featured}} -->
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
								<nuxt-link :to="'/booking/featured/'+item.slug" class="accent--text">Read more</nuxt-link>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>

			<!-- From Booking.com  -->
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in $store.state.borshHotels[0]" :key="index">
					<v-card>
						<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->

						<v-card-title primary-title>
							<v-layout align-content-space-between justify-space-between>
								<v-flex>
									<p class="headline d-flex">{{item.name }}</p>
								</v-flex>
							</v-layout>
						</v-card-title>

						<v-img :src="item.image"></v-img>

						<v-card-text>
							{{item.description}}
							<br />
							{{item.price}}
						</v-card-text>
						{{item.rating /2}}
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