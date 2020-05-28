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
							<CardAirbnb :props="item"></CardAirbnb>
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
	components: { CardAirbnb: () => import("@/components/cards/CardAirbnb") },
	props: ["props"]
};
</script>