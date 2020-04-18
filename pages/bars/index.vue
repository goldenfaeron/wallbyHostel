<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">{{title}}</h1>

		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in $store.state.borshBars[0]" :key="index">
					<v-card>
						<v-card-title primary-title>
							<v-layout align-content-space-between justify-space-between>
								<v-flex>
									<v-img v-if="item.imageUrls" max-height="200" :src="item.imageUrls[0]"></v-img>
									<!--<v-img v-else max-height="200" :src="'/img/placeholder'+placeholder+'.svg'"></v-img>-->
									<v-img v-else max-height="200" :src="'/img/placeholder'+placeholder2+'.svg'"></v-img>

									<p class="headline d-flex">{{item.title }}</p>
									<p>{{placeholder(index)}}</p>
								</v-flex>
							</v-layout>
						</v-card-title>

						<v-card-text>
							{{item.address}}
							<br />
							{{item.phone}}
						</v-card-text>

						<!-- <div class="text-xs-center">
							<v-rating color="red" :value="item.totalScore" half-increments readonly></v-rating>
						</div>-->

						<v-card-actions>
							<v-btn color="secondary">
								<nuxt-link :to="'/bars/'+index" class="accent--text">Read more</nuxt-link>
							</v-btn>
							<v-btn color="success">Read {{item.reviewsCount}} Reviews</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>

export default {
	methods: {
	placeholder(index) {
			return index * 5;
		},
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
	},
	
};
</script>