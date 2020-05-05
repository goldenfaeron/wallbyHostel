<template>
	<v-card>
		<v-container grid-list-sm fluid>
			<v-layout row wrap>
				<v-flex v-for="image in props" :key="image" xs6 md4 d-flex>
					<v-card flat tile class="d-flex">
						<v-img
							:lazy-src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+image._id+'&w=200&h=200&o=true'"
							:src="$store.state.webRoot + image.path"
							class="grey lighten-2"
							height="200"
							width="200"
						>
							<template v-slot:placeholder>
								<v-layout fill-height align-center justify-center ma-0>
									<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
								</v-layout>
							</template>
						</v-img>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-card>
</template>

<script>
export default {
	props: ["props"]
};
</script>