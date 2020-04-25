<template>
	<div>
		<v-carousel>
			<v-carousel-item v-for="(item, index) in data.photos" :key="index" :src="item.large"></v-carousel-item>
		</v-carousel>

		<v-container grid-list-xs>
			<span class="grey--text text--darken-3">
				<v-layout row justify-space-between>
					<v-flex lg5>
						<p class="display-1 bold font-weight-bold" color>{{data.name}}</p>
						<p>{{data.address}}</p>
						<br />
						<v-layout row wrap>
							<v-flex lg3>
								<p>{{data.numberOfGuests}} guests</p>
							</v-flex>
							<v-flex lg3>
								<p>{{data.bedroomLabel}}</p>
							</v-flex>
							<v-flex lg3>
								<p>{{data.bedLabel}}</p>
							</v-flex>
							<v-flex lg3>
								<p>{{data.bathroomLabel}}</p>
							</v-flex>
						</v-layout>
						<br />
						<v-divider></v-divider>
						<br />
						<span v-for="(item, index) in data.highlights" :key="index">
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
							<v-flex lg6 xs12 v-for="(item, index) in data.listingAmenities.slice(-6)" :key="index">
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
										<v-flex v-for="(item, index) in data.listingAmenities" :key="index">
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

						<ul>
							<li v-for="(item, index) in data.listingRooms" :key="index">
								<p id="sleep">{{item.beds[0].quantity}} x {{item.beds[0].type}}</p>
							</li>
						</ul>
					</v-flex>
					<v-flex lg5>
						<p class="display-1 bold font-weight-bold">Description</p>
						<br />
						<pre style="white-space: pre-wrap;">{{data.sectionedDescription.description}}</pre>
					</v-flex>
				</v-layout>
			</span>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: this.$store.state.borshAirbnb[0][this.$route.params.id],
			dialog: false
		};
	},
	filters: {
		truncate(string, value) {
			return (string || "").substring(0, value);
		}
	}
};
</script>

