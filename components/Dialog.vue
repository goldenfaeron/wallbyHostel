<template>
	<v-dialog v-model="dialog" width="400">
		<template v-slot:activator="{ on }">
			<v-layout>
				<v-btn color="primary lighten-3" text dark v-on="on">
					<v-icon>mdi-format-list-bulleted</v-icon>
					{{props.buttonText}}
				</v-btn>
			</v-layout>
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