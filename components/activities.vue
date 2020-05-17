<template>
	<div>
		<v-container grid-list-xs>
			<v-layout column fill-height align-center justify-center>
				<v-flex xs12>
					<h2
						class="text-xs-center text-lg-center text-md-center text-sm-center"
					>What to do in {{$store.state.city}}</h2>
				</v-flex>
				<v-responsive class="mx-auto" width="56">
					<v-icon x-large>mdi-map-legend</v-icon>
				</v-responsive>
				<v-flex xs12>
					<v-icon x-large>mdi-info</v-icon>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs6 sm422 v-for="(thing, index) in props" :key="index">
					<CardThing :props="thing"></CardThing>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	props: ["props"],

	components: {
		CardThing: () => import("@/components/CardThing"),
		CardInstagram: () => import("@/components/CardInstagram")
	},

	data() {
		return {
			title: "Activities in " + this.$store.state.city
		};
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: this.preview,
					name: this.title,
					content: this.preview
				}
			]
		};
	}
};
</script>
<style>
</style>