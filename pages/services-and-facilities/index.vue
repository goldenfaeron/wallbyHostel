<template>
	<div>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)]"
					:src="asset + services.image1.path"
				>
					<v-container fill-height>
						<v-layout align-center justify-center row fill-height>
							<v-layout column class="white--text text-center">
								<div class="text">
									<v-img
										style="margin: auto;"
										:width="this.resize.svgSize"
										:src="asset + services.image1_logo.path"
									></v-img>
									<p
										:class="this.resize.headline  + ' font-weight-bold'"
									>{{services.image1_text}}</p>
								</div>
							</v-layout>
						</v-layout>
					</v-container>
				</v-img>
			</v-layout>
		</v-container>

		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6 sm12>
					<div style="background-color:#FFE082; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text black--text">
											<p
												:class="this.resize.headline  + ' font-weight-bold'"
											>{{services.block1_title}}</p>
											<div
												v-html="services.block1_text"
												:class="this.resize.bigText + ' font-weight-bold'"
											></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6 sm12>
					<v-img height="100%" :src="asset + services.image2.path"></v-img>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6 sm12>
					<v-img height="100%" :src="asset + services.image3.path"></v-img>
				</v-flex>
				<v-flex lg6 sm12>
					<div style="background-color: #AED581; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text black--text">
											<p
												:class="this.resize.headline  + ' font-weight-bold'"
											>{{services.block2_title}}</p>
											<div
												v-html="services.block2_text"
												:class="this.resize.bigText + ' font-weight-bold'"
											></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6 sm12>
					<div style="background-color: #ffffff; height: 100%">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text black--text">
											<p
												:class="this.resize.headline  + ' font-weight-bold'"
											>{{services.block3_title}}</p>
											<div
												v-html="services.block3_text"
												:class="this.resize.bigText + ' font-weight-bold'"
											></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6 sm12>
					<v-img height="100%" :src="asset + services.image4.path"></v-img>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6 sm12>
					<v-img height="100%" :src="asset + services.image5.path"></v-img>
				</v-flex>
				<v-flex lg6 sm12>
					<div style="background-color: #000000; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text">
											<p
												:class="this.resize.headline  + ' font-weight-bold'"
											>{{services.block4_title}}</p>
											<div
												v-html="services.block4_text"
												:class="this.resize.bigText + ' font-weight-bold'"
											></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6 sm12>
					<div style="background-color: #FFE082; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text black--text">
											<p
												:class="this.resize.headline  + ' font-weight-bold'"
											>{{services.block5_title}}</p>
											<div
												v-html="services.block5_text"
												:class="this.resize.bigText + ' font-weight-bold'"
											></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6 sm12>
					<v-img height="100%" :src="asset + services.image6.path"></v-img>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
import { Mixin } from "~/mixins/windowSize.js";
export default {
	mixins: [Mixin],
	data() {
		return {
			windowSize: {
				x: 0,
				y: 0
			},
			services: this.$store.state.pageData[0],
			map: this.$store.state.pageData[1],
			asset: this.$store.state.assetRoot2
		};
	},
	middleware: "services_and_facilities",

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
