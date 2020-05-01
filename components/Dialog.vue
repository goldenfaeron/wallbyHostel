<template>
	<v-dialog v-model="dialog" width="400">
		<template v-slot:activator="{ on }">
			<v-container grid-list-lg>
				<v-layout row wrap>
					<v-flex xs12>
						<br />

						<v-btn color="primary" dark v-on="on">{{props.buttonText}}</v-btn>
					</v-flex>
				</v-layout>
			</v-container>
		</template>

		<v-card>
			<v-card-title class="headline" primary-title>{{props.title}}</v-card-title>

			<v-card-text>
				<slot></slot>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="primary" flat @click="dialog = false">Close</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: ["props"],
	data() {
		return { dialog: false };
	}
};
</script>

<style>
</style>