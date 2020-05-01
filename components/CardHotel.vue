<template>
	<v-hover>
		<v-card flat slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
			<nuxt-link style="text-decoration:none; color: primary;" :to="'/booking/'+index">
				<!-- <v-img :src="$store.state.assetRoot + props.image.path" max-height="10cm"></v-img> -->

				<v-card-title primary-title>
					<p class="headline d-flex text-no-wrap">{{props.name }}</p>
					<div class="text-xs-center">
						<v-rating color="red" :value="props.rating/2" half-increments readonly></v-rating>
					</div>
				</v-card-title>

				<v-img :src="props.image" height="200"></v-img>

				<v-card-text>
					<p>{{props.description.substr(0,120)}}...</p>
				</v-card-text>

				<!-- v-if="!props.inCart" -->
			</nuxt-link>
		</v-card>
	</v-hover>
</template>

<script>
export default {
	props: ["props", "index"]
};
</script>