<template>
	<v-hover>
		<v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
			<nuxt-link style="text-decoration:none; color: primary;" :to="'/shops/'+props.slug">
				<v-btn absolute small dark fab top right color="primary ">
					<v-icon color="white">mdi-beer</v-icon>
				</v-btn>
				<v-img v-if="props.imageUrls" max-height="100" :src="props.imageUrls[0]">
					<template v-slot:placeholder>
						<v-layout fill-height align-center justify-center ma-0>
							<v-progress-circular indeterminate color="primary"></v-progress-circular>
						</v-layout>
					</template>
				</v-img>

				<v-sheet v-else height="100" color="primary lighten-2">
					<v-layout row fill-height align-center justify-start>
						<v-flex>
							<v-card-title class="primary--text">{{props.title}}</v-card-title>
							<v-card-subtitle class="hidden-xs-only">{{props.categoryName}}</v-card-subtitle>
						</v-flex>
					</v-layout>
				</v-sheet>

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
	}
};
</script>

<style lang="css">
a {
	text-decoration: none;
	color: none;
}
</style>