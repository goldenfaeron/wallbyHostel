<template>
	<div>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex x12>
					<about></about>
				</v-flex>
				<v-flex xs12>
					<v-card>
						<v-card-title primary-title>Hey {{this.$route.query.name}}</v-card-title>
						<v-card-text>
							This is a message from your friend {{$store.state.developer.name}} in {{$store.state.developer.location}}
							<br />
You can log in to the backend to edit your content and profile here
						</v-card-text>
					</v-card>

					<v-card-actions>
						<v-btn color="success">Your business</v-btn>
					</v-card-actions>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	components: {
		about: () => import("@/components/fromTemplate/about")
	}
};
</script>

<style>
</style>