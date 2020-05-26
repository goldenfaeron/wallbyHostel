<template>
	<div v-if="response">
		<v-img height="500" :src="$store.state.assetRoot + response.header_image.path"></v-img>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm4 md3>
					<v-img height="400" contain :src="$store.state.assetRoot + response.avatar.path"></v-img>
				</v-flex>
				<v-flex xs12 sm8 md9>
					<v-card>
						<v-card-title primary-title>About {{response.name}}</v-card-title>
						<v-card-text>
							<div v-html="response.description"></div>
						</v-card-text>
					</v-card>
				</v-flex>

				<v-flex xs12>
					<span class="text-center">Gallery</span>
					<ImageGallery :props="response.gallery"></ImageGallery>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			response: ""
		};
	},
	async mounted() {
		let collection = "featured_person";
		let fields = {};
		let skip = 0;
		let limit = 0;
		let filter = this.$route.params.id;

		try {
			await this.$axios
				.$post(
					"/.netlify/functions/cockpit?name=" +
						collection +
						"&skip=" +
						skip +
						"&limit=" +
						limit +
						"&filter=" +
						filter +
						"",
					fields
				)
				.then(res => {
					this.response = res.entries[0];
					this.error = null;
				});
		} catch (e) {
			this.error = e.response;
			this.response = "—";
		}
	},
	components: {
		Title: () => import("@/components/transitions/Title"),
		CardAirbnb: () => import("@/components/CardAirbnb"),
		AirbnbList: () => import("@/components/views/AirbnbList"),
		CardPerson: () => import("@/components/cards/CardPerson"),
		ImageGallery: () => import("@/components/ImageGallery")
	},
	// async asyncData({ params, store, $axios, route }) {
	// 	let collection = "airbnb";
	// 	return await $axios
	// 		.post(
	// 			store.state.webRoot +
	// 				"/api/collections/get/" +
	// 				collection +
	// 				"?token=" +
	// 				store.state.collectionsToken +
	// 				"&rspc=1",
	// 			{
	// 				fields: { name: 1, photos: 1, roomType: 1, stars: 1, slug: 1 }
	// 			}
	// 		)
	// 		.then(res => {
	// 			return { airbnbs: res.data.entries };
	// 		});
	// },
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