<template>
	<v-flex mt-5 xs12>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<!-- Preview -->
				<v-flex xs12 md8>
					<h2>{{content.title}}</h2>
					{{content.preview}}
				</v-flex>
				<v-flex xs12 md4>
					<!-- <nuxt-link :to="'/blog/'+content.slug"> -->
					<v-img
						height="200"
						:src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+content.image._id+'&w=350&h=350&o=true'"
					>
						<!-- Loading reticycle -->
						<template v-slot:placeholder>
							<v-layout fill-height align-center justify-center ma-0>
								<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
							</v-layout>
						</template>
					</v-img>
					<!-- </nuxt-link> -->
				</v-flex>

				<!-- Show more button -->
				<v-flex>
					<v-layout column justify-center align-center>
						<v-flex>
							<v-btn rounded color="info" v-if="!show" @click="fetch(content.slug),show = !show">
								<v-icon large>mdi-chevron-down</v-icon>
							</v-btn>
						</v-flex>

						<v-progress-circular
							v-if="show && !loadedEntry"
							:size="20"
							:width="3"
							color="info"
							indeterminate
						></v-progress-circular>
					</v-layout>
				</v-flex>

				<!-- Extended blog post -->
				<v-flex v-if="show">
					<v-layout v-if="loadedEntry" row wrap>
						<v-flex xs12 md8>
							<div v-html="loadedEntry.content"></div>
							<br />
							Published
							{{getDate(loadedEntry._created)}}
						</v-flex>

						<v-flex xs12 md4>
							<Map v-if="loadedEntry.location" :location="loadedEntry.location.address" zoom="6"></Map>

							<Gallery :props="loadedEntry.gallery"></Gallery>
						</v-flex>

						<!-- {{loadedEntry._created.toLocaleDateString("en-US")}} -->
						<v-layout column align-center justify-center>
							<v-btn rounded color="info" @click="show=!show">
								<v-icon large>mdi-chevron-up</v-icon>
							</v-btn>
						</v-layout>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
		<br />

		<v-divider></v-divider>
	</v-flex>
</template>

<script>
export default {
	components: {
		Map: () => import("@/components/Map"),
		Gallery: () => import("@/components/Gallery")
	},
	props: {
		content: Array,
		show: Boolean
	},

	data() {
		return {
			loadedEntry: ""
		};
	},

	methods: {
		async push(id) {
			let collection = "blog";
			const ip = await this.$axios.$post(
				this.$store.state.webRoot +
					"/api/collections/save/" +
					collection +
					"?token=2fb04e7093a4a4c60003a17180bf01",
				{
					data: { _id: id, title: "hello" }
				}
			);
		},
		async fetch(slug) {
			let collection = "blog";
			const ip = await this.$axios.$post(
				this.$store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					this.$store.state.collectionsToken,
				{
					filter: { slug: slug }
				}
			);
			this.loadedEntry = ip.entries[0];
		},

		getDate(UNIX_timestamp) {
			var a = new Date(UNIX_timestamp * 1000);
			var months = [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			];
			var year = a.getFullYear();
			var month = months[a.getMonth()];
			var date = a.getDate();

			var time = date + " " + month + " " + year;
			return time;
		}
	}
};
</script>