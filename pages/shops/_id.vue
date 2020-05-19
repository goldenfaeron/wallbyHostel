<template>
	<div>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 md6>
					<v-layout column wrap>
						<Title>
							<h1>
								{{bar.title}}
								<v-btn v-if="bar.phone" text target="_blank" color="primary" x-large>
									<v-icon>mdi-phone</v-icon>
									{{bar.phone}}
								</v-btn>
							</h1>
							<h2>{{bar.categoryName}}</h2>
						</Title>
						<v-flex xs12 v-if="bar.imageUrls">
							<v-carousel
								:height="[$vuetify.breakpoint.smAndUp ? '600px' : '200px']"
								v-if="bar.imageUrls && bar.imageUrls.length > 0"
							>
								<v-carousel-item :src="item" v-for="(item, index) in bar.imageUrls" :key="index"></v-carousel-item>
							</v-carousel>
							<v-img v-else height="600" src="/img/placeholder.svg"></v-img>
						</v-flex>
						<v-flex>
							<googleMap :props="bar.address"></googleMap>
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
									<span v-if="bar.website">
										<v-icon>mdi-sign-direction</v-icon>
										<a target="_blank" :href="bar.web_url">View Website</a>
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

				<v-flex xs12 md6>
					<v-layout v-if="sortReviews">
						<v-flex xs12>
							<h2>Reviews</h2>
							<div v-for="(item, index) in sortReviews" :key="index">
								<CardReview
									class="mt-3"
									:props="{title:item.name, text:item.text, rating:item.stars, user :{username: 'User'}}"
								></CardReview>
							</div>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
		<ShopsList :props="bars"></ShopsList>
	</div>
</template>

<script>
import { Mixin } from "~/mixins/sortReviews.js";
export default {
	async asyncData({ params, store, $axios, route }) {
		let collection = "googleplaces_shops_borsh";
		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{ filter: { slug: route.params.id } }
		);
		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{ sort: { imageUrls: -1 }, fields: { reviews: 0 }, limit: 20 }
		);

		return {
			bar: request1.data.entries[0],
			bars: request2.data.entries,

			reviews: JSON.parse(JSON.stringify(request1.data.entries[0].reviews))
		};
	},

	components: {
		Title: () => import("@/components/transitions/Title"),
		googleMap: () => import("@/components/googleMap"),
		CardReview: () => import("@/components/CardReview"),
		ShopsList: () => import("@/components/views/ShopsList")
	},
	data() {
		return {
			// reviews: JSON.parse(JSON.stringify(bar.reviews))
			// bar: this.bars[this.$route.params.id]
		};
	},

	head() {
		return {
			title: this.bar.title,
			meta: [
				{
					hid: this.bar.categoryName + "in" + this.$store.state.city,
					name: this.title,
					content: this.bar.categoryName + "in" + this.$store.state.city
				}
			]
		};
	},
	mixins: [Mixin]
};
</script>