<template>
	<div>
		<v-card>
			<v-card-title primary-title>
				<v-icon color="green lighten-2" large green lighten-2>mdi-shield-star</v-icon>Excellent Customer Service
			</v-card-title>

			<v-card-text>
				{{props}} has a reputation of outstanding customer service
				<br />
				<br />
				<v-icon small>mdi-account-check</v-icon>Hand sanitizer Available
				<br />
				<v-icon small>mdi-account-check</v-icon>Gloves Available
				<br />
				<v-icon small>mdi-account-check</v-icon>Regular cleaning and disinfection
			</v-card-text>

			<!-- <img :src="require('@/assets/bupa/carequality.png')" alt /> -->
			<v-card-actions>
				<v-btn :to="buttonLink" color="primary">Read more</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
export default {
	props: ["props"],
	data() {
		return {
			text:
				"The latest check of this service used our new approach to inspection.",

			buttonText: "See the latest report",
			buttonLink: "/care-homes"
		};
	}
};
</script>