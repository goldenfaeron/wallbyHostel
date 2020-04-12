<template>
	<div>
		<v-img :src="'/img/'+$store.state.city +'.jpg'"></v-img>
		<v-container>
			<v-layout column justify-center align-center>
				<v-flex xs12 sm8 md6>
					<v-card>
						<h1>LET’S GIVE PARADISE A NEW NAME: {{$store.state.city.toUpperCase()}}</h1>
						<br />
						<h2>Borsh Beach is quite simply one of the most tranquil coastlines on the Southern Riviera</h2>
						<br />
						<p>
							A picture-perfect paradise to spend your summer days the right way.
							Imagine if you will, the most stunning shades of ultramarine and turquoise that a sea could possibly possess.
							Now, frame this shimmering seascape with olive groves. Listen to the sounds of the waves softly hitting the pebbles on the shore.
							Take a deep breath and smell the calming scent of the salt of the sea. Look in front of you. You are at one of the most idyllic beaches in
							Albania: Borsh, on the Southern Coast.
						</p>
					</v-card>
				</v-flex>
				<!-- INSTAGRAM -->
				<v-flex xs12 sm8 md6 mt-5>
					<h1>{{$store.state.city}} ON INSTAGRAM</h1>
					<v-card>
						<v-container grid-list-lg>
							<v-layout row wrap>
								<v-flex
									xs12
									sm12
									md6
									lg3
									v-for="(item, index) in $store.state.borshInstagram[0].slice(0,4) "
									:key="index"
								>
									<v-card>
										<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->

										<v-img max-height="200" :src="item.imageUrl"></v-img>

										<v-card-text>
											{{item.firstComment}}
											<br />
											<v-icon>mdi-cards-heart</v-icon>
											{{item.likesCount}}
										</v-card-text>

										<!-- v-if="!item.inCart" -->
										<v-card-actions></v-card-actions>
									</v-card>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card>
				</v-flex>

				<!-- BOOKING -->
				<v-flex xs12 sm8 md6 mt-5>
					<h1>{{$store.state.city}} HOTELS</h1>
					<v-card>
						<v-container grid-list-lg>
							<v-layout row wrap>
								<v-flex
									xs12
									sm12
									md6
									lg3
									v-for="(item, index) in $store.state.borshHotels[0].slice(0,4) "
									:key="index"
								>
									<v-card>
										<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->

										<v-card-title primary-title>
											<v-layout align-content-space-between justify-space-between>
												<v-flex>
													<p class="headline d-flex">{{item.name }}</p>
												</v-flex>
											</v-layout>
										</v-card-title>

										<v-img max-height="200" :src="item.image"></v-img>

										<v-card-text>
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
										</v-card-actions>
									</v-card>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
	components: {
		Logo,
		VuetifyLogo
	}
};
</script>

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
