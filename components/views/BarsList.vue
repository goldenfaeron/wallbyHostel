<template>
	<div>
		<v-responsive class="mx-auto" width="56">
			<v-icon x-large>mdi-food</v-icon>
		</v-responsive>
		<h1
			class="primary--text main-title"
			style="text-align: center;"
		>The best bars in {{$store.state.city}}</h1>
		<h2 class="secondary--text" style="text-align: center;">{{props.length}} results from Google</h2>

		<v-container grid-list-lg class="mt-7">
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in props" :key="index">
					<CardBar :props="item" :link="'/bars/google/'" :index="index"></CardBar>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	props: ["props"],
	components: {
		CardBar: () => import("@/components/CardBar")
	},
	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	data() {
		return {
			type: "bars",
			title: "bars in " + this.$store.state.city,
			preview:
				"See all the best " + this.type + " in " + this.$store.state.city,
			placeholder2: Math.floor(Math.random() * 2)
		};
	}
};
</script>