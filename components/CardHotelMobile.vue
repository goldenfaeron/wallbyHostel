<template>
	<v-hover>
		<v-card flat slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
			<nuxt-link style="text-decoration:none; color: primary;" :to="'/booking/'+index">
				<!-- <v-img :src="$store.state.assetRoot + props.image.path" max-height="10cm"></v-img> -->

				<v-card-title height="70px" primary-title>
					<p class="d-flex">{{props.name }}</p>
					<div class="text-xs-center">
						<v-icon>mdi-star-half</v-icon>
						{{props.rating/2}} Stars
					</div>
				</v-card-title>

				<v-img :src="props.image" height="100"></v-img>

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