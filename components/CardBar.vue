<template>
	<v-hover>
		<v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
			<nuxt-link style="text-decoration:none; color: primary;" :to="'/bars/'+index">
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
			</nuxt-link>
		</v-card>
	</v-hover>
</template>

<script>
export default {
	props: ["props", "name", "buttonText", "index"],
	components: {
		Dialog: () => import("@/components/Dialog")
	}
};
</script>

<style lang="css">
a {
	text-decoration: none;
	color: none;
}
</style>