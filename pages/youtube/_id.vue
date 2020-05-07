<template>
	<div>
		<iframe
			:src="'https://www.youtube.com/embed/'+video.id+'?autoplay=1'"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			:height="this.windowSize.y-64"
			width="100%"
		></iframe>
		<br />
		<p class="headline font-weight-bold">{{video.name}}</p>

		<v-layout justify-space-between>
			<p>{{video.viewCount}} Views &#183; {{video.date.slice(8,10)}}.{{video.date.slice(5,7)}}.{{video.date.slice(0,4)}}</p>
			<p>
				<v-icon>mdi-thumb-up</v-icon>
				{{video.likes}}
				<v-icon>mdi-thumb-down</v-icon>
				{{video.dislikes}}
			</p>
		</v-layout>
		<br />
		<v-divider></v-divider>
		<br />
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg4 v-for="(item, index) in videos.slice(0,6)" :key="index">
					<v-card flat @click.native="dialog = true; arrNumber = index">
						<v-layout row wrap>
							<v-flex lg2>
								<v-img src></v-img>
							</v-flex>
							<v-flex lg10>
								<v-img :src="'https://i.ytimg.com/vi/'+item.id+'/maxresdefault.jpg'" height="200px"></v-img>

								<p
									class="font-weight-bold"
									style="height: 2.8rem; line-height: 1.4rem; overflow: hidden;"
								>{{item.title}}</p>
								{{item.channelName}}
								<br />
								{{item.viewCount}} Views &#183; {{item.likes}} likes
							</v-flex>
						</v-layout>
					</v-card>
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
					<div @click="reloadPage()">
						<v-btn icon @click="dialog=false;" color="red">
							<v-icon>mdi-close</v-icon>
						</v-btn>
					</div>
					<v-btn color="red" :href="videos[this.arrNumber].url">Watch on YouTube</v-btn>
				</v-layout>

				<iframe
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
			{ filter: { slug: route.params.id } }
		);

		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken
		);
		return {
			// hotel: request1.data.entries[0],
			video: request1.data.entries[0],
			videos: request2.data.entries
		};
	},

	head() {
		return {
			title: this.video.name
		};
	},
	data: () => ({
		windowSize: {
			x: 0,
			y: 0
		},
		arrNumber: "0"
		//	name: this.video.name,
		//	description: this.video.details,
		//	thumbnailUrl: 'https://i.ytimg.com/vi/'+this.video.id+'/maxresdefault.jpg',
		//	uploadDate: this.video.date,
		//	contentUrl: this.video.url
	}),

	mounted() {
		this.onResize();
	},

	methods: {
		onResize() {
			this.windowSize = { x: window.innerWidth, y: window.innerHeight };
		},
		reloadPage() {
			window.location.reload();
		}
	},
	jsonld() {
		return {
			"@context": "https://schema.org",
			"@type": "VideoObject",
			name: this.video.name,
			// description: this.video.details,
			thumbnailUrl:
				"https://i.ytimg.com/vi/" + this.video.id + "/maxresdefault.jpg",
			uploadDate: this.video.date,
			contentUrl: this.video.url,
			embedUrl: this.video.url
		};
	}
};
</script>

