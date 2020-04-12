<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">Hotels in Borsh</h1>
		<!-- <h1>{{$store.state.borshHotels[0][0].order}}</h1> -->
		<!-- {{$store.state.borshHotels}} -->
		<v-container grid-list-lg>
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
export default {};
</script>