<template>
	<v-card>
		<v-sheet height="60" color="primary lighten-2">
			<v-layout column justify-center align-center>
				<v-flex mt-2>
					<v-icon x-large color="white">mdi-bed-double</v-icon>
				</v-flex>
			</v-layout>
		</v-sheet>
		<v-card-title primary-title>{{props.roomType}}</v-card-title>
		<v-card-subtitle>€{{props.price}} per night</v-card-subtitle>
		<v-card-text>
			<v-icon>mdi-bed-double</v-icon>
			{{props.bedType}}
			<br />
			<v-icon>mdi-account-multiple</v-icon>
			Persons {{props.persons}}
		</v-card-text>
		<v-card-actions>
			<Dialog :props="{title: name, buttonText: buttonText}">
				<ul>
					<li v-for="(props, index) in props.features" :key="index">{{props}}</li>
				</ul>
			</Dialog>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	props: ["props", "name", "buttonText"],
	components: {
		Dialog: () => import("@/components/Dialog")
	}
};
</script>

<style>
</style>