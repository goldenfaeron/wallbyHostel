		<template>
	<section id="airbnb">
		<v-container grid-list-lg>
			<h1>Super AirBnbs in {{$store.state.city}}</h1>

			<v-responsive class="mx-auto mb-12" width="56">
				<v-icon x-large>mdi-bed-king</v-icon>
			</v-responsive>
			<v-layout row wrap mt-5>
				<v-container grid-list-lg>
					<v-layout row wrap>
						<v-flex xs6 sm6 md4 lg3 v-for="(item, index) in props " :key="index">
							<v-card height="100%">
								<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->

								
								<v-img height="200" :src="item.photos[0].large">
									<template v-slot:placeholder>
										<v-layout fill-height align-center justify-center ma-0>
											<v-progress-circular indeterminate color="primary"></v-progress-circular>
										</v-layout>
									</template>
									<v-layout fill-height align-end justify-center ma-0>
										<span class="d-flex" style="background-color:#383838; opacity:0.7; width:100%; word-break: normal;" >
											<v-card-title class="white--text" style="word-break: normal;" color="white">{{item.name }}</v-card-title>
										</span>
									</v-layout>
								</v-img>

								<v-card-text>Room type: {{item.roomType}}</v-card-text>

								<div class="text-xs-center">
									<v-rating color="red" :value="item.stars" class="hidden-xs-only" half-increments readonly></v-rating>
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