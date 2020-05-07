<template>
	<v-hover>
		<v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
			<nuxt-link
				style="text-decoration:none; font-color: primary;"
				:to="'/featured_hotels/'+props.slug"
			>
				<!-- <v-img :src="$store.state.assetRoot + props.image.path" max-height="10cm"></v-img> -->

				<v-card-title primary-title>
					{{props.name }}
					<v-rating color="primary lighten-1" :value="props.rating" half-increments readonly></v-rating>
				</v-card-title>

				<v-img :src="$store.state.assetRoot + props.header_image.path" height="200">
					<template v-slot:placeholder>
						<v-layout fill-height align-center justify-center ma-0>
							<v-progress-circular indeterminate color="primary"></v-progress-circular>
						</v-layout>
					</template>
				</v-img>

				<v-card-text>
					<span v-if="props.excellent_customer_service">
						<v-icon color="green lighten-2" green lighten-2>mdi-shield-star</v-icon>Excellent Service
					</span>
				</v-card-text>

				<!-- v-if="!props.inCart" -->
			</nuxt-link>
		</v-card>
	</v-hover>
</template>

<script>
export default {
	props: ["props"]
};
</script>

<style>
</style>