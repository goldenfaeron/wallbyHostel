<template>
	<div>
		<div
			class="display-1 primary--text main-title"
			style="text-align: center;"
		>Airbnbs in {{$store.state.city}}</div>

		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm6 md6 lg4 v-for="(item, index) in props" :key="index">
					<CardAirbnb :props="item"></CardAirbnb>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	props: ["props"],
	components: { CardAirbnb: () => import("@/components/CardAirbnb") },

	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	filters: {
		truncate(string, value) {
			return (string || "").substring(0, value);
		}
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