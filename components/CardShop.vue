<template>
	<v-hover>
		<v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
			<nuxt-link style="text-decoration:none; color: primary;" :to="'/shops/'+props.slug">
				<v-btn absolute small dark fab top right color="success">
					<v-icon>{{icon(props.categoryName)}}</v-icon>
				</v-btn>
				<v-img v-if="props.imageUrls" max-height="100" :src="props.imageUrls[0]">
					<template v-slot:placeholder>
						<v-layout fill-height align-center justify-center ma-0>
							<v-progress-circular indeterminate color="primary"></v-progress-circular>
						</v-layout>
					</template>
				</v-img>

				<v-img v-else max-height="100" :src="require('@/assets/miroodles/miroodles-blue.png')">
					<template v-slot:placeholder>
						<v-layout fill-height align-center justify-center ma-0>
							<v-progress-circular indeterminate color="primary"></v-progress-circular>
						</v-layout>
					</template>
					<v-card-title class="success--text" style="word-break: normal;">{{props.title}}</v-card-title>
				</v-img>
				<!-- <v-sheet v-else height="100" color="primary lighten-2">
					<v-layout row fill-height align-center justify-start>
						<v-flex>
							<v-card-title class="primary--text">{{props.title}}</v-card-title>
							<v-card-subtitle class="hidden-xs-only">{{props.categoryName}}</v-card-subtitle>
						</v-flex>
					</v-layout>
				</v-sheet>-->

				<v-card-title v-if="props.imageUrls">{{props.title}}</v-card-title>
				<v-card-text>
					<p>
						<v-icon small>mdi-account-star</v-icon>
						{{props.categoryName}} with
						<span v-if="props.reviewsCount">{{props.reviewsCount}} Reviews</span>
						<span v-else>No Reviews</span>
					</p>
					<!-- <v-icon small>mdi-map-marker</v-icon>

					{{props.address}}-->
				</v-card-text>
			</nuxt-link>
		</v-card>
	</v-hover>
</template>

<script>
export default {
	props: ["props", "link"],
	components: {
		Dialog: () => import("@/components/Dialog")
	},

	computed: {
		randomNumber() {
			let limit = 9;
			return Math.floor(Math.random() * Math.floor(limit));
		}
	},
	methods: {
		icon(c) {
			switch (c) {
				case "Bakery":
					return "mdi-bread-slice";
				case "Grocery store":
					return "mdi-food-apple";
				case "Supermarket":
					return "mdi-cart-outline";
				case "Convenience store":
					return "mdi-cart-outline";
				case "Store":
					return "mdi-store";
				case "Shopping mall":
					return "mdi-shopping";
				case "Seafood restaurant":
					return "mdi-fish";
				case "Traditional market":
					return "mdi-storefront";
				case "Mediterranean restaurant":
					return "mdi-food-variant";
				case "Veterinary pharmacy":
					return "mdi-plus-thick";
				case "Restaurant":
					return "mdi-silverware-fork-knife";
				case "Electronics store":
					return "mdi-cellphone";
				case "Tire shop":
					return "mdi-car-side";
				case "Clothing store":
					return "mdi-tshirt-crew";
			}
		}
	}
};
</script>

<style lang="css">
a {
	text-decoration: none;
	color: none;
}
</style>