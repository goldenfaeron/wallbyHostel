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
											<div
												:class="this.resize.subtitle  + ' font-weight-bold black--text'"
												v-html="props.blocktext"
											></div>
											<img
												v-if="props.blocklogo"
												:width="this.resize.svgSize"
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
										<p :class="this.resize.subtitle  + ' font-weight-bold'">{{props.image4_text1}}</p>

										<v-img
											v-if="props.image4_logo"
											style="margin: auto;"
											:width="this.resize.svgSize"
											:src="asset + props.image4_logo.path"
										></v-img>

										<p :class="this.resize.subtitle  + ' font-weight-bold'">{{props.image4_text2}}</p>
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
										<p :class="this.resize.subtitle">{{props.block2_text}}</p>
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
import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	props: ["props"],
	data() {
		return {
			asset: this.$store.state.assetRoot2
		};
	}
};
</script>