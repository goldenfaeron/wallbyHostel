<template>
	<div class="assurance">
		<v-container grid-list-xs>
			<v-layout mx-5 my-5 row wrap>
				<v-flex m6 md4 offset-md1 my-3 v-for="(item, index) in values" :key="index">
					<div class="headline font-weight-bold" color="secondary">
						<v-icon large color="secondary">{{item.icon}}</v-icon>
						<span class="secondary--text">{{item.text}}</span>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			values: [
				{
					icon: "mdi-checkbox-marked-circle-outline",
					text:
						"You don't need Bupa insurance to use a Bupa Dental Care dentist"
				},
				{
					icon: "mdi-checkbox-marked-circle-outline",
					text: "Bupa Dental Care has over 350 practices across the UK"
				}
			]
		};
	}
};
</script>



