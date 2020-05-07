<template>
	<div>
		<v-responsive class="mx-auto" width="56">
			<v-icon x-large>mdi-youtube</v-icon>
		</v-responsive>
		<h1
			class="primary--text main-title"
			style="text-align: center;"
		>{{$store.state.city}} on {{this.type}}</h1>

		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in videos" :key="index">
					<v-hover>
						<v-card
							flat
							@click.native="dialog = true; arrNumber = index"
							slot-scope="{ hover }"
							:class="`elevation-${hover ? 12 : 0}`"
						>
							<nuxt-link to style="text-decoration:none;">
								<v-img :src="'https://i.ytimg.com/vi/'+item.id+'/maxresdefault.jpg'" height="200px"></v-img>
								<p
									class="font-weight-bold"
									style="height: 2.8rem; line-height: 1.5rem; overflow: hidden;"
								>{{item.name}}</p>
								{{item.viewCount}} Views &#183; {{item.likes}} likes
							</nuxt-link>
						</v-card>
					</v-hover>
				</v-flex>
			</v-layout>
		</v-container>
		<v-dialog
			v-model="dialog"
			scrollable
			fullscreen
			hide-overlay
			transition="dialog-bottom-transition"
		>
			<v-card>
				<v-layout justify-space-between>
					<div>
						<v-btn icon @click="dialog=false;" color="red">
							<v-icon>mdi-close</v-icon>
						</v-btn>
					</div>
					<v-tooltip top>
						<template v-slot:activator="{ on }">
							<a target="_blank" :href="videos[arrNumber].url" v-on="on">
								<v-img height="32" width="32" src="/img/link.svg" ></v-img>
							</a>
						</template>
						<span>Watch on Youtube</span>
					</v-tooltip>
				</v-layout>

				<iframe
				v-if="dialog"
					:src="'https://www.youtube.com/embed/'+videos[this.arrNumber].id"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					height="100%"
					id="player"
				></iframe>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "youtube";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
				{
					limit: 8
				}
		);
		return {
			// hotel: request1.data.entries[0],
			videos: request1.data.entries
		};
	},

	methods: {
		placeholder(index) {
			return index % 2;
		},
		reloadPage() {
			window.location.reload();
		}
	},
	data() {
		return {
			type: "Youtube",
			title: this.type + " in " + this.$store.state.city,
			preview:
				"See all the best " + this.type + " in " + this.$store.state.city,
			placeholder2: Math.floor(Math.random() * 2),
			dialog: false,
			arrNumber: "0"
		};
	},

	head() {
		return {
			title: this.$store.state.city + " on Youtube",
			meta: [
				{
					hid: this.$store.state.city + " on Youtube",
					name: this.$store.state.city + " on Youtube",
					content: this.$store.state.city + " on Youtube"
				}
			]
		};
	},
	jsonld() {
		return {
			"@context": "http://schema.org",
			"@type": "WebPage",
			name: this.title,
			description: this.preview,
			publisher: {
				"@type": "ProfilePage",
				name: this.$store.state.developer
			}
		};
	}
};
</script>
<style>
</style>