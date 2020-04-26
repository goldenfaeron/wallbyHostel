<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">Vacation in Borsh</h1>
		<!-- <h1>{{$store.state.borshHotels[0][0].order}}</h1> -->
		<!-- {{$store.state.borshHotels}} -->
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm6 md6 lg4 v-for="(item, index) in $store.state.borshAirbnb[0]" :key="index">
					<v-card style="height: 100%;">
						<v-card-title primary-title>
							<v-layout align-content-space-between justify-space-between>
								<v-flex>
									<p class="headline d-flex">{{item.name }}</p>
								</v-flex>
							</v-layout>
						</v-card-title>
						<v-img v-if="item.photos" max-height="200" :src="item.photos[0].large"></v-img>
						<v-img v-else max-height="200" :src="'/img/placeholder'+placeholder(index)+'.svg'"></v-img>
						<v-card-text>
							<p style="font-weight: bold;" class="truncate-overflow">{{item.sectionedDescription.description}}</p>
							<br />
							Room Type: {{item.roomType}}
							<br />
							<v-icon>mdi-square-edit-outline</v-icon>
							Read {{item.reviews.length}} reviews
						</v-card-text>
						<div class="text-xs-center">
							<v-rating color="red" :value="item.stars" half-increments readonly></v-rating>
						</div>

						<v-btn color="primary" ><nuxt-link :to="'/airbnb/'+index" class="accent--text">Read more</nuxt-link></v-btn>
						<v-btn color="success" :href="'https://airbnb.com/rooms/'+item.id">book on airbnb.com</v-btn>
						
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	filters: {
		truncate(string, value) {
			return (string || "").substring(0, value);
		}
	},
};
</script>
<style > 
.truncate-overflow {
	--lh: 1.4rem;
	line-height: var(--lh);
	--max-lines: 3;
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