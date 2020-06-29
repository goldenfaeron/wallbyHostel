<template>
	<div>
<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<v-img
						v-if="props.image6_bool"
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/3 : (this.windowSize.y)/2]"
						:src="asset + props.image6.path"
					>
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
									<div class="text">
										<v-img
											v-if="props.image6_logo"
											style="margin: auto;"
											width="30%"
											:src="asset + props.image6_logo.path"
										></v-img>
										<p
											:class="this.resize.subtitle"
										>{{props.image6_text}}</p>
									</div>
								</v-layout>
							</v-layout>
						</v-container>
					</v-img>
					<!--<div style="background-color: #e2d26b;" class="hidden-sm-and-down">
						<v-container :style="'height:'+(this.windowSize.y)/2+'px'">
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column class="white--text text-center">
										<div class="text">
											<p
												class="display-2 font-weight-bold black--text"
												style="line-height: 80px"
											>{{props.block6_text}}</p>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>-->
				</v-flex>
				<v-flex :class="[props.image6_bool ? 'lg6' : 'xs12']">
					<v-layout row wrap>
						<v-flex lg6>
							<div style="background-color: #ffffff;">
								<v-container
									:style="'height:'+[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)/4 : (this.windowSize.y)/2]+'px'"
								>
									<v-container fill-height>
										<v-layout align-center justify-center row fill-height>
											<v-layout column class="white--text text-center">
												<div class="text">
													<p
														:class="this.resize.subtitle + ' black--text'"
													>{{props.block3_text}}</p>
												</div>
											</v-layout>
										</v-layout>
									</v-container>
								</v-container>
							</div>
						</v-flex>
						<v-flex lg6>
							<v-img :style="'height:'+(this.windowSize.y)/4+'px'">
								<v-container fill-height>
									<v-layout align-center justify-center row fill-height>
										<v-layout column class="white--text text-center">
											<div class="text">
												<p
													:class="this.resize.subtitle"
												>{{props.block4_text}}</p>
											</div>
										</v-layout>
									</v-layout>
								</v-container>
							</v-img>
							<div style="background-color: #b7b181;">
								<v-container
									:style="'height:'+[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/6 : (this.windowSize.y)/4]+'px'"
								>
									<v-container fill-height>
										<v-layout align-center justify-center row fill-height>
											<v-layout column class="white--text text-center">
												<div class="text">
													<p
														:class="this.resize.subtitle"
													>{{props.block5_text}}</p>
												</div>
											</v-layout>
										</v-layout>
									</v-container>
								</v-container>
							</div>
						</v-flex>
					</v-layout>
					<!--	<v-img :height="(this.windowSize.y)/2" :src="asset + props.image7.path">
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
									<div class="text">
										<v-img
											style="margin: auto;"
											:width="[$vuetify.breakpoint.smAndDown ? '60%' : '30%']"
											:src="asset + props.image7_logo.path"
										></v-img>
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
										>{{props.image7_text}}</p>
									</div>
								</v-layout>
							</v-layout>
						</v-container>
					</v-img>-->
					<!--<div style="background-color: #e2d26b;" class="hidden-sm-and-up">
						<v-container :style="'height:'+(this.windowSize.y)/4+'px'">
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column class="white--text text-center">
										<div class="text">
											<p class="headline font-weight-bold black--text">{{props.block6_text}}</p>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>-->
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>


<script>
import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	props: ["props"],
	data() {
		return {
			asset: this.$store.state.assetRoot2
		};
	},

};
</script>