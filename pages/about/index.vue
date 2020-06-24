<template>
	<div>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)]"
					:src="asset + about.image1.path"
				>
					<v-container fill-height>
						<v-layout align-center justify-center row fill-height>
							<v-layout column class="white--text text-center">
								<div class="text">
									<v-img
										style="margin: auto;"
										:width="[$vuetify.breakpoint.smAndDown ? '70%' : '30%']"
										:src="asset + about.image1_logo.path"
									></v-img>
									<p
										:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
										:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']  +'text-align:center;' "
									>{{about.image1_text}}</p>
								</div>
							</v-layout>
						</v-layout>
					</v-container>
				</v-img>
			</v-layout>
		</v-container>


		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<div style="background-color: #000000;">
						<v-container
							:style="'height:'+[$vuetify.breakpoint.smAndDown ? (this.windowSize.y) : (this.windowSize.y)]+'px'"
						>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text">
										<p class="display-3 font-weight-black">{{about.block1_title}}</p>
											<div v-html="about.block1_text" ></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6>
					<v-img :height="(this.windowSize.y)" :src="asset + about.image2.path">
					</v-img>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<v-img :height="(this.windowSize.y)" :src="asset + about.image3.path">
					</v-img>
				</v-flex>
				<v-flex lg6>
					<div style="background-color: #000000;">
						<v-container
							:style="'height:'+[$vuetify.breakpoint.smAndDown ? (this.windowSize.y) : (this.windowSize.y)]+'px'"
						>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text">
										<p class="display-3 font-weight-black">{{about.block2_title}}</p>
											<div v-html="about.block2_text" ></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
export default {
	data() {
		return {
			windowSize: {
				x: 0,
				y: 0
			},
			about: this.$store.state.pageData[0],
			map: this.$store.state.pageData[1],
			asset: this.$store.state.assetRoot2
		};
	},
	middleware: "about",

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
