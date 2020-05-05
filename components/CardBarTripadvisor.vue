<template>
	<v-hover>
		<v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
			<nuxt-link
				style="text-decoration:none; color: primary;"
				:to="{path: '/bars/tripadvisor/'+props.slug }"
			>
				<v-btn absolute small dark fab top right color="primary ">{{props.rating}}</v-btn>
				<v-img v-if="props.imageUrls" max-height="100" :src="props.imageUrls[0]"></v-img>

				<v-sheet v-else height="100" color="success lighten-2">
					<v-layout column justify-center align-center>
						<v-flex mt-5>
							<v-icon x-large color="white">mdi-beer</v-icon>
						</v-flex>
					</v-layout>
				</v-sheet>
				<v-card-title primary-title>{{props.name}}</v-card-title>
				<v-card-subtitle>{{props.type}}</v-card-subtitle>
				<v-card-text>
					<v-icon small>mdi-map-marker</v-icon>
					{{props.address}}
					<br />
					<v-icon small>mdi-account-star</v-icon>

					<span v-if="props.numberOfReviews">{{props.numberOfReviews}} Reviews</span>
					<span v-else>No Reviews</span>
				</v-card-text>
			</nuxt-link>
		</v-card>
	</v-hover>
</template>

<script>
export default {
	props: ["props", "name", "buttonText", "index"],
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