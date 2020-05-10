<template>
	<div>
		<v-container grid-list-xs>
			<span class="grey--text text--darken-3">
				<v-layout row justify-space-between>
					<v-flex xs12>
						<v-carousel :height="[$vuetify.breakpoint.smAndUp ? '600px' : '200px']" hide-delimiters>
							<v-carousel-item v-for="(item, index) in room.photos" :key="index" :src="item.large"></v-carousel-item>
						</v-carousel>
					</v-flex>
					<v-flex lg5>
						<p class="display-1 bold font-weight-bold" color>{{room.name}}</p>
						<p>{{room.address}}</p>
						<br />
						<v-layout row wrap>
							<v-flex lg3>
								<p>{{room.numberOfGuests}} guests</p>
							</v-flex>
							<v-flex lg3>
								<p>{{room.bedroomLabel}}</p>
							</v-flex>
							<v-flex lg3>
								<p>{{room.bedLabel}}</p>
							</v-flex>
							<v-flex lg3>
								<p>{{room.bathroomLabel}}</p>
							</v-flex>
						</v-layout>

						<v-layout justify-space-around>
							<v-btn
								v-if="this.imageHeight"
								color="success"
								@click="$vuetify.goTo('#descr')"
							>Go to description</v-btn>
						</v-layout>
						<br />
						<v-divider></v-divider>
						<br />
						<span v-for="(item, index) in room.highlights" :key="index">
							<p>
								<v-icon color="green">mdi-check</v-icon>
								<span class="font-weight-medium">{{item.headline}}</span>
								<v-spacer></v-spacer>
								{{item.message}}
							</p>
						</span>
						<br />
						<v-divider></v-divider>
						<br />
						<p class="font-weight-medium">Amneties</p>
						<v-layout row wrap>
							<v-flex lg6 xs12 v-for="(item, index) in room.listingAmenities.slice(-6)" :key="index">
								<p v-if="item.isPresent == true">
									<v-icon color="green">mdi-check</v-icon>
									{{item.name}}
								</p>
								<p v-else>
									<v-icon color="red">mdi-close</v-icon>
									{{item.name}}
								</p>
							</v-flex>
							<v-dialog v-model="dialog" width="500" scrollable>
								<template v-slot:activator="{ on }">
									<v-layout justify-center>
										<v-btn color="primary" dark v-on="on" text>View all amneties</v-btn>
									</v-layout>
								</template>

								<v-card>
									<v-card-title class="headline grey lighten-2" primary-title>
										Amneties
										<v-spacer></v-spacer>
										<v-btn flat @click="dialog = false" icon>
											<v-icon>mdi-close</v-icon>
										</v-btn>
									</v-card-title>

									<v-card-text>
										<br />
										<v-flex v-for="(item, index) in room.listingAmenities" :key="index">
											<p v-if="item.isPresent == true">
												<v-icon color="green">mdi-check</v-icon>
												{{item.name}}
											</p>
											<p v-else>
												<v-icon color="red">mdi-close</v-icon>
												{{item.name}}
											</p>
										</v-flex>
									</v-card-text>

									<v-divider></v-divider>
								</v-card>
							</v-dialog>
						</v-layout>
						<br />
						<v-divider></v-divider>
						<br />
						<p class="font-weight-medium">Sleeping arrangements</p>

						<ol>
							<li v-for="(item, index) in room.hometourRooms" :key="index">
								<p class="font-weight-medium">{{item.nameWithType}}</p>
								<p id="sleep">{{item.highlightsHometour[0]}}</p>
							</li>
						</ol>
						<br />
						<v-divider></v-divider>
						<br />
						<p class="font-weight-medium">Reviews</p>
						<v-layout row justify-space-between>
							<v-flex
								lg5
								xs12
								v-for="(item, index) in room.reviewDetailsInterface.reviewSummary"
								:key="index"
							>
								<p>{{item.label}}</p>
								<v-progress-linear :value="item.percentage*100"></v-progress-linear>
							</v-flex>
						</v-layout>
						<br />
						<v-layout row wrap>
							<v-flex lg12 v-for="(item, index) in room.reviews.slice(0,3)" :key="index">
								<br />
								<v-divider></v-divider>
								<br />
								<p>
									<v-avatar class="mr-2" size="32">
										<v-img :src="item.author.pictureUrl"></v-img>
									</v-avatar>
									{{item.author.firstName}}
								</p>
								<p>{{item.comments}}</p>
							</v-flex>
						</v-layout>
						<br />
						<br />
					</v-flex>

					<v-flex lg5>
						<p id="descr" class="display-1 bold font-weight-bold">Description</p>
						<br />
						<pre style="white-space: pre-wrap;">{{room.sectionedDescription.description}}</pre>
					</v-flex>
				</v-layout>
			</span>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ params, store, $axios, route }) {
		let collection = "airbnb";
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
				return { room: res.data.entries[0] };
			});
	},
	data() {
		return {
			dialog: false
		};
	},
	filters: {
		truncate(string, value) {
			return (string || "").substring(0, value);
		}
	},
	computed: {
		imageHeight() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return true;
				case "sm":
					return true;
			}
		}
	},

	head() {
		return {
			title: this.room.name,
			meta: [
				{
					hid: this.room.name,
					name: this.room.name + "- AirBNB in " + this.$store.state.city,
					content: this.room.name + "- AirBNB in " + this.$store.state.city
				}
			]
		};
	}
};
</script>

