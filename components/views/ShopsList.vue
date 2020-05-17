<template>
	<div>
		<v-responsive class="mx-auto" width="56">
			<v-icon x-large>mdi-store</v-icon>
		</v-responsive>
		<h1
			class="primary--text main-title"
			style="text-align: center;"
		>The best shops in {{$store.state.city}}</h1>
		<h2 class="secondary--text" style="text-align: center;">{{props.length}} results from Google</h2>

		<v-container grid-list-lg class="mt-7">
			<v-layout row wrap>
				<v-flex xs6 sm4 v-for="(item, index) in props" :key="index">
					<CardShop :props="item" :link="'/shops/'" :index="index"></CardShop>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	props: ["props"],
	components: {
		CardShop: () => import("@/components/CardShop")
	},
	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	data() {
		return {
			type: "shops",
			title: "shops in " + this.$store.state.city,
			preview:
				"See all the best " + this.type + " in " + this.$store.state.city,
			placeholder2: Math.floor(Math.random() * 2)
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
	},
	jsonld() {
		return {
			"@context": "http://schema.org",
			"@type": "Article",
			name: this.title,
			description: this.preview,
			keywords: "shops"
		};
	}
};
</script>