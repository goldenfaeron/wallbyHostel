<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">Bars in {{$store.state.city}}</h1>

		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in $store.state.borshBars[0]" :key="index">
					<CardBar :props="item" :index="index"></CardBar>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	components: { CardBar: () => import("@/components/CardBar") },
	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	data() {
		return {
			type: "Bars",
			title: this.type + " in " + this.$store.state.city,
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
			keywords: "bars"
		};
	}
};
</script>