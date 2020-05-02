		<template >
	<section id="bars">
		<!-- <v-container grid-list-lg>
			<h1>{{$store.state.city}} BARS</h1>
			<v-responsive class="mx-auto mb-12" width="56">
				<v-divider></v-divider>
			</v-responsive>
			<v-layout row wrap mt-5>
				<v-container grid-list-lg>
					<v-layout row wrap>
						<v-flex
							xs12
							sm12
							md6
							lg3
							v-for="(item, index) in $store.state.borshBars[0].slice(0,4) "
							:key="index"
						>
							<v-card height="100%" flat>
								<v-card-title primary-title>
									<v-layout align-content-space-between justify-space-between>
										<v-flex>
											<p class="headline d-flex">{{item.title }}</p>
										</v-flex>
									</v-layout>
								</v-card-title>

								<v-img v-if="item.imageUrls" height="200" :src="item.imageUrls[0]"></v-img>
								<v-img v-else height="200" :src="'/img/placeholder'+placeholder(index)+'.svg'"></v-img>

								<v-card-text>
									{{item.address}}
									<br />
									{{item.phone}}
									<br />
									<v-icon>mdi-square-edit-outline</v-icon>
									Read {{item.reviewsCount}} reviews
								</v-card-text>

								<v-card-actions></v-card-actions>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
			<br />
			<v-layout justify-center>
				<v-btn color="primary" href="/bars">See More</v-btn>
			</v-layout>
		</v-container>-->
	</section>
</template>

<script>
export default {
	methods: {
		placeholder(index) {
			return index % 2;
		}
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