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
									<CardInstagram :props="item"></CardInstagram>
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
	props: ["props"],
	components: { CardInstagram: () => import("@/components/CardInstagram") }
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