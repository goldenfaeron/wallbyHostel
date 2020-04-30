<template>
	<div>
		<v-sheet color="primary lighten-2">
			<v-container grid-list-xs>
				<v-layout row wrap align-center=" ">
					<v-flex xs4 md4>
						<h1 class="white--text">
							Book Now
							<v-icon color="white">mdi-chevron-right</v-icon>
						</h1>
					</v-flex>
					<v-flex xs8 md8>
						<v-layout row wrap>
							<v-flex xs12 md4 v-if="props.booking">
								<v-btn color="success" :href="props.booking" target="_blank">
									<v-icon>mdi-cursor-default</v-icon>Booking.com
								</v-btn>
							</v-flex>
							<v-flex xs12 md4 v-if="props.airbnb">
								<v-btn color="success" :href="props.airbnb" target="_blank">
									<v-icon>mdi-cursor-default</v-icon>AirBnb
								</v-btn>
							</v-flex>
							<v-flex xs12 md4 v-if="props.website">
								<v-btn color="success" :href="props.website" target="_blank">
									<v-icon>mdi-cursor-default</v-icon>Website
								</v-btn>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-container>
		</v-sheet>
	</div>
</template>

<script>
export default {
	props: ["props"]
};
</script>

<style>
</style>