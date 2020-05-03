	<template>
	<section id="instagram">
		<div>
			<h1>Stunning Instagram photos of {{$store.state.city}}</h1>
			<v-responsive class="mx-auto mb-12" width="56">
				<v-icon x-large>mdi-instagram</v-icon>
			</v-responsive>
			<v-container grid-list-lg mt-5>
				<v-layout row wrap>
					<!-- <v-card> -->
					<v-container grid-list-lg>
						<v-layout row wrap>
							<v-flex xs6 sm6 md4 lg3 v-for="(item, index) in props " :key="index">
								<v-hover>
									<v-card height="100%" slot-scope="{ hover }">
										<v-img max-height="200" :src="item.imageUrl">
											<v-expand-transition>
												<div v-if="hover" style="height: 100%;">
													<div
														style="height: 100%; opacity: 0.5;"
														class="d-flex transition-fast-in-fast-out primary lighten-1 v-card--reveal"
													></div>
													<div style="position: absolute; top: 0; color: #fff;">{{item.firstComment}}</div>
												</div>
											</v-expand-transition>
										</v-img>

										<v-card-text>
											<v-icon color="red">mdi-cards-heart</v-icon>
											{{item.likesCount}}
										</v-card-text>

										<!-- v-if="!item.inCart" -->
										<v-card-actions></v-card-actions>
									</v-card>
								</v-hover>
								<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->
							</v-flex>
						</v-layout>
					</v-container>
					<!-- </v-card> -->
				</v-layout>
				<br />
			</v-container>
		</div>
	</section>
</template>

<script>
export default {
	props: ["props"]
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