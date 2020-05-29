<template>
	<v-container grid-list-lg fluid>
		<v-layout row wrap>
			<v-flex v-for="item in props" :key="i" xs3 d-flex>
				<v-card flat tile class="secondary">
					<v-img
						style="cursor:pointer"
						@click.stop="openDialog($store.state.webRoot + item.path, item.meta.title)"
						width="300"
						:src="$store.state.webRoot + item.path"
						:lazy-src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+item.meta.asset+'&w=200&h=200'"
						aspect-ratio="1"
						class="grey lighten-2"
					>
						<template v-slot:placeholder>
							<v-layout fill-height align-center justify-center ma-0>
								<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
							</v-layout>
						</template>
					</v-img>
					<!-- <v-card-text v-if="item.meta.title">{{item.meta.title}}</v-card-text> -->
				</v-card>
			</v-flex>

			<!-- pop up dialog  -->
		</v-layout>
		<template>
			<v-dialog v-model="dialog" width="1200">
				<v-card class="primary darken--2">
					<v-container>
						<v-layout column wrap justify-center align-content-center align-center>
							<v-flex>
								<a target="_blank" :href="dialogSrc">
									<v-img contain height="600" :src="dialogSrc"></v-img>
								</a>
							</v-flex>

							<v-flex xs12>
								<h2 class="accent--text">{{dialogTitle}}</h2>
							</v-flex>
							<v-flex xs12>
								<v-container grid-list-lg>
									<v-layout row wrap align-center justify-center>
										<v-flex v-for="item in props" :key="i" xs1 d-flex>
											<v-card flat tile class="secondary">
												<v-img
													@click="clickImage($store.state.webRoot +item.path, item.meta.title)"
													style="cursor:pointer"
													width="300"
													:src="$store.state.webRoot + item.path"
													:lazy-src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+item.meta.asset+'&w=200&h=200'"
													aspect-ratio="1"
													class="grey lighten-2"
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
							</v-flex>
						</v-layout>
					</v-container>

					<!-- <v-card-media contain height="auto" :src="dialogSrc"></v-card-media> -->
				</v-card>
			</v-dialog>
		</template>
	</v-container>
</template>

<script>
export default {
	props: ["props"],

	data() {
		return {
			dialog: false,
			dialogSrc: "",
			dialogTitle: ""
		};
	},
	methods: {
		openDialog: function(src, title) {
			this.dialog = !this.dialog;
			this.dialogSrc = src;
			this.dialogTitle = title;
		},

		clickImage: function(src, title) {
			this.dialogSrc = src;
			this.dialogTitle = title;
		}
	}
};
</script>

