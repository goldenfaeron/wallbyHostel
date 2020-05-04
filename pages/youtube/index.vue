<template>
	<div>
		<h1
			class="primary--text main-title"
			style="text-align: center;"
		>{{$store.state.city}} on {{this.type}}</h1>

		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in featured" :key="index">
					<v-card height="100%" flat>
						<iframe
							width="100%"
							height="300"
							:src="'https://www.youtube.com/embed/'+item.id"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
						<v-card-title primary-title>
							<v-layout align-content-space-between justify-space-between>
								<v-flex>
									<p
										class="headline d-flex"
										style="overflow-wrap: anywhere; word-wrap: break-word; word-break: normal; hyphens: auto;"
									>{{item.title}}</p>
								</v-flex>
							</v-layout>
						</v-card-title>

						<v-card-text>
							<!-- {{item.details}} -->
							{{item.viewCount}}
							<br />
							{{item.likes}}
							<br />
							{{item.dislikes}}
							<br />
							{{item.channelName}}
							<br />
							{{item.numberOfSubscribers}}
						</v-card-text>
						<!-- <div class="text-xs-center">
							<v-rating color="red" :value="item.totalScore" half-increments readonly></v-rating>
						</div>-->

						<v-card-actions>
							<v-btn color="red" :href="item.url">Watch on YouTube</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	asyncData({ params, store, $axios, route }) {
		return $axios
			.get(
				"https://api.apify.com/v2/datasets/X7FaS3y0RYgf3sdaq/items?format=json&clean=1"
			)
			.then(res => {
				return { featured: res.data };
			});
	},

	methods: {
		placeholder(index) {
			return index % 2;
		}
	},
	data() {
		return {
			type: "Youtube",
			title: this.type + " in " + this.$store.state.city,
			preview:
				"See all the best " + this.type + " in " + this.$store.state.city,
			placeholder2: Math.floor(Math.random() * 2)
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
			"@type": "Article",
			name: this.title,
			description: this.preview,
			keywords: "bars"
		};
	}
};
</script>