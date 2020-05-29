		<template>
	<section id="booking">
		<v-container grid-list-lg>
			<h1>The right hotel for your stay in {{$store.state.city}}</h1>
			<v-responsive class="mx-auto mb-12" width="56">
				<v-icon x-large>mdi-home</v-icon>
			</v-responsive>
			<v-layout row wrap mt-5>
				<v-container grid-list-lg>
					<v-layout row wrap>
						<v-flex xs6 sm6 md4 lg3 v-for="(item, index) in props " :key="index">
							<CardFeaturedHotel :props="item" link="/featured_hotel/"></CardFeaturedHotel>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
		</v-container>
	</section>
</template>


<script>
export default {
	props: ["props"],
	components: {
		CardFeaturedHotel: () => import("@/components/cards/CardFeaturedHotel")
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