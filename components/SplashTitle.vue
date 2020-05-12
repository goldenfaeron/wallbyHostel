<template>
	<div>
		<v-img
			:height="[$vuetify.breakpoint.smAndUp ? '400px' : '200px']"
			:src="$store.state.assetRoot + props.header_image.path"
		>
			<v-theme-provider dark>
				<v-container fill-height>
					<v-row align="center" class="white--text mx-auto" justify="center">
						<v-col class="white--text text-center" cols="12" tag="h1">
							<span
								class="font-weight-light"
								:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
							>WELCOME TO</span>

							<br />

							<span
								:class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
								class="font-weight-black"
							>{{props.name}}</span>
						</v-col>
					</v-row>
				</v-container>
			</v-theme-provider>
		</v-img>
	</div>
</template>

<script>
export default {
	props: ["props"]
};
</script>