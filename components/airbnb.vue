		<template>
	<section id="airbnb">
		<v-container grid-list-lg>
			<h1>{{$store.state.city}} AIRBNBS</h1>

			<v-responsive class="mx-auto mb-12" width="56">
				<v-divider></v-divider>
			</v-responsive>
			<v-layout row wrap mt-5>
				<v-container grid-list-lg>
					<v-layout row wrap>
						<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in props " :key="index">
							<v-card height="100%" flat>
								<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->

								<v-card-title primary-title>
									<v-layout justify-center>
										<p
											class="headline d-flex"
											style="overflow-wrap: anywhere; word-wrap: break-word; word-break: normal; hyphens: auto;"
										>{{item.name }}</p>
									</v-layout>
								</v-card-title>

								<v-img height="200" :src="item.photos[0].large"></v-img>

								<v-card-text>
									<br />
									Room type: {{item.roomType}}
								</v-card-text>

								<div class="text-xs-center">
									<v-rating color="red" :value="item.stars" half-increments readonly></v-rating>
								</div>

								<!-- v-if="!item.inCart" -->
								<v-card-actions>
									<!-- <v-btn color="secondary"> -->
									<!-- <nuxt-link :to="'/booking/'+index" class="accent--text">Read more</nuxt-link> -->
									<!-- </v-btn> -->
								</v-card-actions>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
			<br />
			<v-layout justify-center>
				<v-btn color="primary" href="/airbnb">See More</v-btn>
			</v-layout>
		</v-container>
	</section>
</template>

<style lang="css" scoped>
h1,
h2,
h3,
h4,
h5,
p {
	text-align: center;
}
</style>

<script>
export default {
	props: ["props"]
};
</script>