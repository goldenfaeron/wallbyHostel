		<template >
	<section id="Bar">
		<v-container grid-list-lg>
			<h1>Where to eat and drink in {{$store.state.city}}</h1>
			<v-responsive class="mx-auto mb-12" width="56">
				<v-icon x-large>mdi-food</v-icon>
			</v-responsive>
			<v-layout row wrap mt-5>
				<v-container grid-list-lg>
					<v-layout row wrap>
						<v-flex xs6 sm6 md4 lg3 v-for="(item, index) in props" :key="index">
							<CardBar :props="item"></CardBar>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
			<br />
		</v-container>
	</section>
</template>

<script>
export default {
	components: { CardBar: () => import("@/components/CardBar") },
	props: ["props"],
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