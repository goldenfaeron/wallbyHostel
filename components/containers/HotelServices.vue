<template>
	<div>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<div style="background-color: #a6bc71;">
						<v-container
							:style="'height:'+[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*3/4 : (this.windowSize.y)]+'px'"
						>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column class="text-center" cols="12" tag="h1">
										<div class="text">
											<p
												:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']  + ' font-weight-bold black--text'"
												:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px; ']"
											>{{props.blocktext}}</p>
											<img
												v-if="props.blocklogo"
												:width="[$vuetify.breakpoint.smAndDown ? '70%' : '20%']"
												:src="asset + props.blocklogo.path"
											/>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6>
					<v-img :height="(this.windowSize.y)*(2/3)" :src="asset + props.image4.path">
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
									<div class="text white--text">
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']  + ' font-weight-bold'"
											:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px; ']"
										>{{props.image4_text1}}</p>

										<v-img
											v-if="props.image4_logo"
											style="margin: auto;"
											:width="[$vuetify.breakpoint.smAndDown ? '70%' : '30%']"
											:src="asset + props.image4_logo.path"
										></v-img>

										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']  + ' font-weight-bold'"
											:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px; ']"
										>{{props.image4_text2}}</p>
									</div>
								</v-layout>
							</v-layout>
						</v-container>
					</v-img>
					<v-container :style="'height:'+(this.windowSize.y)/3+'px'">
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
									<div class="text">
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
											:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']"
										>{{props.block2_text}}</p>
									</div>
								</v-layout>
							</v-layout>
						</v-container>
					</v-container>
				</v-flex>
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