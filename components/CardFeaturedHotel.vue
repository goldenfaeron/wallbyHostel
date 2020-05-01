<template>
	<v-card>
		<!-- <v-img :src="$store.state.assetRoot + props.image.path" max-height="10cm"></v-img> -->
		<v-btn absolute dark fab top right color="primary">
			<v-icon>mdi-star</v-icon>
		</v-btn>
		<v-card-title primary-title>
			<v-layout align-content-space-between justify-space-between>
				<v-flex>
					<p class="headline d-flex">{{props.name }}</p>
				</v-flex>
			</v-layout>
		</v-card-title>

		<v-img :src="$store.state.assetRoot + props.header_image.path" height="200"></v-img>

		<v-card-text v-html="props.preview_text.substr(0, 200)">
			<br />
			<ul>
				<li v-for="(props, index) in props.features" :key="index">{{props}}hello</li>
			</ul>
		</v-card-text>

		<div class="text-xs-center">
			<v-rating color="primary lighten-1" :value="props.rating" half-increments readonly></v-rating>
		</div>

		<!-- v-if="!props.inCart" -->
		<v-card-actions>
			<v-btn color="success">
				<nuxt-link :to="'/featured_hotels/'+props.slug">Read more</nuxt-link>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	props: ["props"]
};
</script>

<style>
</style>