<template>
	<div>
		<v-img
			:src="require('@/assets/airbnb.jpg')"
			:height="[$vuetify.breakpoint.smAndUp ? '400px' : '200px']"
		>
			<template v-slot:placeholder>
				<v-layout fill-height align-center justify-center ma-0>
					<v-progress-circular indeterminate color="primary"></v-progress-circular>
				</v-layout>
			</template>
		</v-img>
		<v-responsive class="mx-auto" width="56">
			<v-icon x-large>mdi-home</v-icon>
		</v-responsive>
		<Title>
			<h1 class="text-center primary--text">{{$t("airbnbs.title")}} {{$store.state.city}}</h1>
			<h2
				class="secondary--text"
				style="text-align: center;"
			>{{response.length}} {{$t("airbnbs.subtitle")}}</h2>
		</Title>

		<AirbnbList :props="airbnbs"></AirbnbList>
	</div>
</template>

<script>
export default {
	data() {
		return {
			response: ""
		};
	},
	// async mounted() {
	// 	let collection = "airbnb";
	// 	let fields = { name: 1, photos: 1, roomType: 1, stars: 1, slug: 1 };
	// 	let skip = 0;
	// 	let limit = 0;

	// 	try {
	// 		const res = await this.$axios.$post(
	// 			"/.netlify/functions/cockpit?name=" +
	// 				collection +
	// 				"&skip=" +
	// 				skip +
	// 				"&limit=" +
	// 				limit +
	// 				"",
	// 			fields
	// 		);

	// 		this.response = res.entries;
	// 		this.error = null;
	// 	} catch (e) {
	// 		this.error = e.response;
	// 		this.response = "—";
	// 	}
	// },
	components: {
		Title: () => import("@/components/transitions/Title"),
		CardAirbnb: () => import("@/components/cards/CardAirbnb"),
		AirbnbList: () => import("@/components/views/AirbnbList")
	},
	async asyncData({ params, store, $axios, route }) {
		let collection = "airbnb";
		return await $axios
			.post(
				store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					store.state.collectionsToken +
					"&rspc=1",
				{
					fields: { name: 1, photos: 1, roomType: 1, stars: 1, slug: 1 }
				}
			)
			.then(res => {
				return { airbnbs: res.data.entries };
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

	computed: {},
	head() {
		return {
			title: this.$t("airbnbs_in") + this.$store.state.city,
			meta: [
				{
					hid: this.$t("airbnbs_in") + this.$store.state.city,
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