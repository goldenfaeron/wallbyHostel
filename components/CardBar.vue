<template>
	<v-card>
		<v-btn absolute small dark fab top right color="primary ">{{props.totalScore}}</v-btn>
		<v-img v-if="props.imageUrls" max-height="100" :src="props.imageUrls[0]"></v-img>

		<v-sheet v-else height="100" color="primary lighten-2">
			<v-layout column justify-center align-center>
				<v-flex mt-5>
					<v-icon x-large color="white">mdi-beer</v-icon>
				</v-flex>
			</v-layout>
		</v-sheet>
		<v-card-title primary-title>{{props.title}}</v-card-title>
		<v-card-text>
			<!-- <v-icon>mdi-bed-double</v-icon> -->
			{{props.categoryName}}
			<br />
			<!-- <v-icon>mdi-account-multiple</v-icon> -->
			Persons {{props.address}}
		</v-card-text>
		<v-card-actions>
			<v-card-actions>
				<v-btn color="secondary">
					<nuxt-link :to="'/bars/'+index" class="accent--text">Read more</nuxt-link>
				</v-btn>
			</v-card-actions>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	props: ["props", "name", "buttonText", "index"],
	components: {
		Dialog: () => import("@/components/Dialog")
	}
};
</script>

<style>
</style>