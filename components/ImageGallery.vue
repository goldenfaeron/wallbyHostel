<template>
	<v-container grid-list-sm fluid>
		<v-layout row wrap>
			<v-flex xs12 md6 order-xs2>
				<v-layout row wrap>
					<v-flex v-for="image in props" :key="image" xs1 sm2 md4 @click="displayImage = image.path">
						<v-img
							style="cursor:pointer"
							:lazy-src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+image._id+'&w=200&h=200&o=true'"
							:src="$store.state.webRoot + image.path"
							class="grey lighten-2"
							:height="[$vuetify.breakpoint.smAndUp ? '100' : '200']"
						>
							<template v-slot:placeholder>
								<v-layout fill-height align-center justify-center ma-0>
									<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
								</v-layout>
							</template>
						</v-img>
					</v-flex>
				</v-layout>
			</v-flex>
			<v-flex xs12 md6 order-xs1 order-md2>
				<v-img
					:height="[$vuetify.breakpoint.smAndUp ? '400px' : '200px']"
					:src="$store.state.webRoot + displayImage"
				></v-img>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			displayImage: this.props[0].path
		};
	},
	props: ["props"]
};
</script>