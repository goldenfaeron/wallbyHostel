<template>
	<v-layout class="row" align-center justify-center>
		<v-btn :to="link" class="text-center" color="primary" text>See more</v-btn>
	</v-layout>
</template>

<script>
export default {
	props: ["link"]
};
</script>