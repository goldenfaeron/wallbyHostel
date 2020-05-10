<template>
	<v-hover>
		<v-card flat slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
			<nuxt-link style="text-decoration:none; color: primary;" :to="'/activities/'+props.slug">
				<v-card-title primary-title>{{props.name}}</v-card-title>
				<v-card-subtitle primary-title>{{props.location_string}}</v-card-subtitle>
				<v-img height="200" v-if="!props.cp_photo" :src="props.photo.images.large.url">
					<template v-slot:placeholder>
						<v-layout fill-height align-center justify-center ma-0>
							<v-progress-circular indeterminate color="primary"></v-progress-circular>
						</v-layout>
					</template>
				</v-img>
				<v-img v-else height="200" :src="$store.state.assetRoot + props.cp_photo.path">
					<template v-slot:placeholder>
						<v-layout fill-height align-center justify-center ma-0>
							<v-progress-circular indeterminate color="primary"></v-progress-circular>
						</v-layout>
					</template>
				</v-img>
				<v-card-text>{{props.description.substr(0,200)}}...</v-card-text>
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