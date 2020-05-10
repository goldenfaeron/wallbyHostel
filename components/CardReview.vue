<template>
	<div>
		<v-card>
			<v-card-title primary-title>{{props.title}}</v-card-title>
			<v-card-subtitle secondary-text>
				<v-icon>mdi-account-circle</v-icon>
				<span v-if="props.user.username">{{props.user.username}}</span>
			</v-card-subtitle>
			<div class="text-xs-center">
				<v-rating color="red" :value="props.rating" half-increments readonly></v-rating>
			</div>
			<v-card-text>{{props.text}}</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	props: ["props"]
};
</script>