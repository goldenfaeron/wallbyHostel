<template>
	<v-hover>
		<v-card flat slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
			<nuxt-link style="text-decoration:none; color: primary;" :to="'/booking/region/'+props.slug">
				<!-- <v-img :src="$store.state.assetRoot + props.image.path" max-height="10cm"></v-img> -->

				<v-card-title primary-title></v-card-title>

				<v-img height="200" :src="props.image">
					<template v-slot:placeholder>
						<v-layout fill-height align-center justify-center ma-0>
							<v-progress-circular indeterminate color="primary"></v-progress-circular>
						</v-layout>
					</template>
					<v-layout fill-height align-end justify-center ma-0>
						<span
							class="d-flex"
							style="background-color:#383838; opacity:0.7; width:100%; word-break: normal;"
						>
							<v-card-title class="white--text" style="word-break: normal;" color="white">{{props.name }}</v-card-title>
						</span>
					</v-layout>
				</v-img>

				<v-card-text>
					<div class="text-xs-center">
						<v-rating small color="primary lighten-2" :value="props.rating/2" half-increments readonly></v-rating>
					</div>
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