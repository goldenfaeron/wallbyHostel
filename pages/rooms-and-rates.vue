<template>
	<div>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)]"
					:src="asset + rooms.image1.path"
				>
					<v-container fill-height>
						<v-layout align-center justify-center row fill-height>
							<v-layout column class="white--text text-center">
								<div class="text">
									<v-img
										style="margin: auto;"
										:width="[$vuetify.breakpoint.smAndDown ? '70%' : '60%']"
										:src="asset + rooms.image1_logo.path"
									></v-img>
									<p
										:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
										:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']  +'text-align:center;' "
									>{{rooms.image1_text}}</p>
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
					<div style="background-color: #000000; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text">
											<p
												:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
											>{{rooms.block1_title}}</p>
											<div
												v-html="rooms.block1_text"
												:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']  + ' font-weight-bold'"
											></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6>
					<v-img height="100%" :src="asset + rooms.image2.path"></v-img>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)]"
					:src="asset + rooms.image3.path"
				></v-img>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<v-flex xs12>
						<div style="height: 100%">
							<div style="background-color: #b8b07f; height: 100%;">
								<v-container>
									<v-container fill-height>
										<v-layout align-center justify-center row fill-height>
											<v-layout column cols="12" tag="h1" pl-2>
												<div class="text" :style="'min-height:'+this.windowSize.y*2/3+'px'">
													<p
														:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
													>{{rooms.block2_title}}</p>
													<div
														v-html="rooms.block2_text"
														:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']  + ' font-weight-bold'"
													></div>
												</div>
											</v-layout>
										</v-layout>
									</v-container>
								</v-container>
							</div>
						</div>
					</v-flex>
					<v-flex lg12>
						<v-img height="100%" :src="asset + rooms.image4.path"></v-img>
					</v-flex>
				</v-flex>
				<v-flex lg6>
					<div style="background-color: #636f61; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text">
											<p
												:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
											>{{rooms.block3_title}}</p>
											<div
												v-html="rooms.block3_text"
												:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']  + ' font-weight-bold'"
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
				<v-flex lg6>
					<div style="background-color: #ffffff; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text black--text">
											<p
												:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
											>{{rooms.block4_title}}</p>
											<div
												v-html="rooms.block4_text"
												:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']  + ' font-weight-bold'"
											></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6>
					<v-img height="100%" :src="asset + rooms.image5.path"></v-img>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<v-img height="100%" :src="asset + rooms.image6.path"></v-img>
				</v-flex>
				<v-flex lg6>
					<div style="background-color: #000000; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text">
											<p
												:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
											>{{rooms.block5_title}}</p>
											<div
												v-html="rooms.block5_text"
												:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']  + ' font-weight-bold'"
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
				<v-flex lg6>
					<div style="background-color: #b8b07f; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text black--text">
											<p
												:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
											>{{rooms.block6_title}}</p>
											<div
												v-html="rooms.block6_text"
												:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']  + ' font-weight-bold'"
											></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6>
					<v-img height="100%" :src="asset + rooms.image7.path"></v-img>
				</v-flex>
			</v-layout>
		</v-container>
				<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<v-img height="100%" :src="asset + rooms.image8.path"></v-img>
				</v-flex>
				<v-flex lg6>
					<div style="background-color: #636f61; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text">
											<p
												:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
											>{{rooms.block7_title}}</p>
											<div
												v-html="rooms.block7_text"
												:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']  + ' font-weight-bold'"
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
			rooms: this.$store.state.pageData[0],
			map: this.$store.state.pageData[1],
			asset: this.$store.state.assetRoot2
		};
	},
	middleware: "rooms_and_rates",

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
