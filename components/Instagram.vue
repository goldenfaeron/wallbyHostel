	<template>
	<section id="instagram">
		<div>
			<h1>{{$store.state.city}} ON INSTAGRAM</h1>
			<v-responsive class="mx-auto mb-12" width="56">
				<v-divider></v-divider>
			</v-responsive>
			<v-container grid-list-lg mt-5>
				<v-layout row wrap>
					<!-- <v-card> -->
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
								<v-hover>
									<v-card height="100%" slot-scope="{ hover }">
										<v-img max-height="200" :src="item.imageUrl">
											<v-expand-transition>
												<div
													v-if="hover"
													class="d-flex transition-fast-in-fast-out primary lighten-1 v-card--reveal white--text"
													style="height: 100%; opacity: 0.5;"
												>{{item.firstComment}}</div>
											</v-expand-transition>
										</v-img>

										<v-card-text>
											<v-icon>mdi-cards-heart</v-icon>
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