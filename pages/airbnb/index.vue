<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">Vacation in Borsh</h1>

		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm6 md6 lg4 v-for="(item, index) in data" :key="index">
					<CardAirbnb :props="item"></CardAirbnb>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	components: { CardAirbnb: () => import("@/components/CardAirbnb") },
	async asyncData({ params, store, $axios, route }) {
		let collection = "airbnb";
		return await $axios
			.post(
				store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					store.state.collectionsToken
				// { fields: { slug: 1, } }
			)
			.then(res => {
				return { data: res.data.entries };
			});
	},
	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	filters: {
		truncate(string, value) {
			return (string || "").substring(0, value);
		}
	},
	head() {
		return {
			title: "AirBnB in " + this.$store.state.city,
			meta: [
				{
					hid: "AirBnB in " + this.$store.state.city,
					name: "AirBnB in " + this.$store.state.city,
					content: "AirBnB in " + this.$store.state.city
				}
			]
		};
	}
};
</script>
<style >
.truncate-overflow {
	--lh: 1.4rem;
	line-height: var(--lh);
	--max-lines: 3;
	position: relative;
	height: calc(var(--lh) * var(--max-lines));
	overflow: hidden;
	padding-right: 1rem; /* space for ellipsis */
}
.truncate-overflow::before {
	position: absolute;
	content: "";
	inset-block-end: 0; /* "bottom" */
	inset-inline-end: 0; /* "right" */
}
.truncate-overflow::after {
	content: "";
	position: absolute;
	inset-inline-end: 0; /* "right" */
	width: 1rem;
	height: 1rem;
	background: white;
}
</style>