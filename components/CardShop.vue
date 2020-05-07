<template>
	<v-hover>
		<v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
			<nuxt-link style="text-decoration:none; color: primary;" :to="'/shops/'+props.slug">
				<v-btn absolute small dark fab top right color="primary ">{{props.totalScore}}</v-btn>
				<v-img v-if="props.imageUrls" max-height="100" :src="props.imageUrls[0]">
					<template v-slot:placeholder>
						<v-layout fill-height align-center justify-center ma-0>
							<v-progress-circular indeterminate color="primary"></v-progress-circular>
						</v-layout>
					</template>
				</v-img>

				<v-sheet v-else height="100" color="primary lighten-2">
					<v-layout column justify-center align-center>
						<v-flex mt-5>
							<v-icon x-large color="white">mdi-beer</v-icon>
						</v-flex>
					</v-layout>
				</v-sheet>
				<v-card-title primary-title>{{props.title}}</v-card-title>
				<v-card-subtitle>{{props.categoryName}}</v-card-subtitle>
				<v-card-text>
					<!-- <v-icon>mdi-bed-double</v-icon> -->

					<!-- <v-icon>mdi-account-multiple</v-icon> -->
					<v-icon small>mdi-map-marker</v-icon>
					{{props.address}}
					<br />
					<v-icon small>mdi-account-star</v-icon>

					<span v-if="props.reviewsCount">{{props.reviewsCount}} Reviews</span>
					<span v-else>No Reviews</span>
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