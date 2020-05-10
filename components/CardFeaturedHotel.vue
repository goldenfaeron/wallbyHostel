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
					<v-rating
						color="primary lighten-1"
						class="hidden-xs-only"
						:value="props.rating"
						half-increments
						readonly
					></v-rating>
				</v-card-title>

				<v-img :src="$store.state.assetRoot + props.header_image.path" height="200">
					<template v-slot:placeholder>
						<v-layout fill-height align-center justify-center ma-0>
							<v-progress-circular indeterminate color="primary"></v-progress-circular>
						</v-layout>
					</template>
				</v-img>

				<v-card-text>
					<v-tooltip bottom>
						<template v-slot:activator="{ on }">
							<span v-if="props.excellent_customer_service" v-on="on">
								<v-icon color="green lighten-2" green lighten-2>mdi-shield-star</v-icon>
							</span>
						</template>
						<span>
							<v-icon color="green lighten-2" green lighten-2>mdi-shield-star</v-icon>Excellent Service Award
						</span>
					</v-tooltip>
					<v-tooltip bottom>
						<template v-slot:activator="{ on }">
							<span v-if="props.corona_safe" v-on="on">
								<v-icon color="green lighten-2" green lighten-2>mdi-shield-check</v-icon>
							</span>
						</template>
						<span>
							<v-icon color="green lighten-2" large green lighten-2>mdi-shield-check</v-icon>COVID-19 Safety
						</span>
					</v-tooltip>
					<v-tooltip bottom>
						<template v-slot:activator="{ on }">
							<span v-if="props.quarantine_friendly" v-on="on">
								<v-icon color="green lighten-2" green lighten-2>mdi-shield-home</v-icon>
							</span>
						</template>
						<span>
							<v-icon color="green lighten-2" green lighten-2>mdi-shield-home</v-icon>Quarantine Friendly
						</span>
					</v-tooltip>
				</v-card-text>

				<!-- <v-flex xs12 sm6 md4 v-if="hotel.corona_excellent_customer_service">
					<CertificateCService :props="hotel.name"></CertificateCService>
				</v-flex>-->
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