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
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in featured" :key="index">
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
						<!-- <div class="text-xs-center">
							<v-rating color="red" :value="item.totalScore" half-increments readonly></v-rating>
						</div>-->

						<!--<v-btn color="red" :href="item.url">Watch on YouTube</v-btn>-->
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
					<v-btn color="red" :href="featured[this.arrNumber].url">Watch on YouTube</v-btn>
				</v-layout>

				<iframe
					:src="'https://www.youtube.com/embed/'+featured[this.arrNumber].id"
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
	async asyncData({ params, store, $axios, route }) {
		return await $axios
			.get(
				"https://api.apify.com/v2/datasets/X7FaS3y0RYgf3sdaq/items?format=json&clean=1"
			)
			.then(res => {
				return { featured: res.data };
			});
	},

	methods: {
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
	}
};
</script>
<style>
</style>