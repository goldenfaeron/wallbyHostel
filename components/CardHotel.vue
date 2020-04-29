<template>
	<div>
		<v-card height="100%" flat>
			<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->

			<v-card-title primary-title>
				<v-layout align-content-space-between justify-space-between>
					<v-flex>
						<p class="headline d-flex">{{props.name }}</p>
					</v-flex>
				</v-layout>
			</v-card-title>

			<v-img :src="props.image" height="100px"></v-img>

			<v-card-text>
				<p class="truncate-overflow">{{props.description}}</p>
				<br />
				<br />
				From {{props.price}} Euro per night
			</v-card-text>

			<div class="text-xs-center">
				<v-rating color="red" :value="props.rating/2" half-increments readonly></v-rating>
			</div>

			<!-- v-if="!props.inCart" -->
			<v-card-actions>
				<v-btn color="secondary">
					<nuxt-link :to="'/booking/'+index" class="accent--text">Read more</nuxt-link>
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
export default {
	props: ["props"]
};
</script>