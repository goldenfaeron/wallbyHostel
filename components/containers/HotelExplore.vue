<template>
	<div>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? 'auto' : (this.windowSize.y)]"
					:src="asset + props.image5.path"
				>
					<v-container fill-height>
						<v-layout align-center justify-center row fill-height>
							<v-layout column class="white--text text-center">
								<div class="text">
									<p
										:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
										:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']"
									>{{props.image5_title}}</p>
									<v-img
										v-if="props.image5_logo"
										style="margin: auto;"
										:width="[$vuetify.breakpoint.smAndDown ? '70%' : '30%']"
										:src="asset + props.image5_logo.path"
									></v-img>
									<p
										:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
									>{{props.image5_text}}</p>
								</div>
								<v-container grid-listlg>
									<v-layout row wrap justify-space-around>
										<v-flex md3 xs10>
											<v-hover>
												<v-card height="100%" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
													<!--<nuxt-link style="text-decoration:none; color: primary;" :to="'/airbnb/'+props.slug">
													<v-img :src="$store.state.assetRoot + props.image.path" max-height="10cm"></v-img>-->

													<v-img
														height="200"
														src="https://www.nps.gov/olym/planyourvisit/images/Slideshow-84.jpg?maxwidth=1200&maxheight=1200&autorotate=false"
													>
														<template v-slot:placeholder>
															<v-layout fill-height align-center justify-center ma-0>
																<v-progress-circular indeterminate color="primary"></v-progress-circular>
															</v-layout>
														</template>
														<v-layout fill-height align-end justify-center ma-0>
															<span
																class="d-flex"
																style="background-color:#383838; opacity:0.7; width:100%; word-break: normal;"
															>
																<v-card-title class="white--text" style="word-break: normal;" color="white">Hiking</v-card-title>
															</span>
														</v-layout>
													</v-img>
													<!--</nuxt-link>-->
												</v-card>
											</v-hover>
										</v-flex>
										<v-flex lg3 xs10>
											<v-hover>
												<v-card height="100%" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
													<!--<nuxt-link style="text-decoration:none; color: primary;" :to="'/airbnb/'+props.slug">
													<v-img :src="$store.state.assetRoot + props.image.path" max-height="10cm"></v-img>-->

													<v-img
														height="200"
														src="https://upload.wikimedia.org/wikipedia/commons/7/77/Deepsea.JPG"
													>
														<template v-slot:placeholder>
															<v-layout fill-height align-center justify-center ma-0>
																<v-progress-circular indeterminate color="primary"></v-progress-circular>
															</v-layout>
														</template>
														<v-layout fill-height align-end justify-center ma-0>
															<span
																class="d-flex"
																style="background-color:#383838; opacity:0.7; width:100%; word-break: normal;"
															>
																<v-card-title class="white--text" style="word-break: normal;" color="white">Fishing</v-card-title>
															</span>
														</v-layout>
													</v-img>
													<!--</nuxt-link>-->
												</v-card>
											</v-hover>
										</v-flex>
										<v-flex lg3 xs10>
											<v-hover>
												<v-card height="100%" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
													<!--<nuxt-link style="text-decoration:none; color: primary;" :to="'/airbnb/'+props.slug">
													<v-img :src="$store.state.assetRoot + props.image.path" max-height="10cm"></v-img>-->

													<v-img
														height="200"
														src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Discover_Scuba_Diving_--_St._Croix%2C_US_Virgin_Islands.jpg"
													>
														<template v-slot:placeholder>
															<v-layout fill-height align-center justify-center ma-0>
																<v-progress-circular indeterminate color="primary"></v-progress-circular>
															</v-layout>
														</template>
														<v-layout fill-height align-end justify-center ma-0>
															<span
																class="d-flex"
																style="background-color:#383838; opacity:0.7; width:100%; word-break: normal;"
															>
																<v-card-title class="white--text" style="word-break: normal;" color="white">Diving</v-card-title>
															</span>
														</v-layout>
													</v-img>
													<!--</nuxt-link>-->
												</v-card>
											</v-hover>
										</v-flex>
									</v-layout>
								</v-container>
							</v-layout>
						</v-layout>
					</v-container>
				</v-img>
			</v-layout>
		</v-container>
	</div>
</template>


<script>
export default {
	props: ["props"],
	data() {
		return {
			windowSize: {
				x: 0,
				y: 0
			},
			asset: this.$store.state.assetRoot2
		};
	},
	methods: {
		onResize() {
			this.windowSize = { x: window.innerWidth, y: window.innerHeight };
		}
	},
	mounted() {
		this.onResize();
	}
};
</script>