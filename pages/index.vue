<template>
	<div>
		{{index}}
		<v-container fluid class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-flex lg6>
					<div style="background-color:black;" class="black--text">
						<v-img
							:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)/6 : (this.windowSize.y)/4]"
						>
							<v-container fill-height>
								<v-row align="center" class="white--text mx-auto" justify="center">
									<v-col class="white--text text-center" cols="12" tag="h1">
										<div class="text">
											<img :src="asset + index.logo.path" width="50%" />
										</div>
									</v-col>
								</v-row>
							</v-container>
						</v-img>
					</div>
					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*5/6 : (this.windowSize.y)*.75]"
						:src="asset + index.image1.path"
					>
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'display-2 text-uppercase' : 'display-4 text-uppercase']  + ' font-weight-black yellow--text text--accent-1'"
										>welcome to our social hostel in downtown reykjavík</p>
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-img>
				</v-flex>
				<v-flex lg6>
					<div style="background-color:white;" class="black--text">
						<v-img
							:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)/2]"
						>
							<v-container grid-list-lg>
								<v-layout row wrap justify-center my-5 py-5 mx-5 px-5>
									<v-flex xs12>
										<p
											:style="[$vuetify.breakpoint.lgAndDown ? 'line-height: 50px;' : 'line-height: 100px;']  +'text-align:center;' "
											:class="[$vuetify.breakpoint.lgAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
										>{{index.bookText}}</p>
									</v-flex>

									<br />
									<v-flex lg6 xs12>
										<div align="center">
											<v-btn outlined color="black" width="100%">{{index.button1}}</v-btn>
										</div>
									</v-flex>
									<v-flex lg6 xs12>
										<div align="center">
											<v-btn outlined color="black" width="100%">{{index.button2}}</v-btn>
										</div>
									</v-flex>
									<v-flex xs12></v-flex>
									<v-flex xs12>
										<div align="center">
											<v-btn color="#dfd269" width="100%">
												<span class="black--text font-weight-bold">{{index.button3}}</span>
											</v-btn>
										</div>
									</v-flex>
								</v-layout>
							</v-container>
						</v-img>
					</div>

					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/3 : (this.windowSize.y)/2]"
						:src="asset + index.image2.path"
					>
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<v-img style="margin: auto;" width="40%" :src="asset + index.svg.path"></v-img>
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-img>
				</v-flex>
			</v-layout>
		</v-container>

		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)]"
					:src="asset + index.image3.path"
				>
					<v-container fill-height>
						<v-row align="center" class="white--text mx-auto" justify="center">
							<v-col class="white--text text-center" cols="12" tag="h1">
								<div class="text">
									<v-img
										style="margin: auto;"
										:width="[$vuetify.breakpoint.smAndDown ? '70%' : '30%']"
										:src="asset + index.image3_logo.path"
									></v-img>
									<p
										:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
										:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']  +'text-align:center;' "
									>{{index.image3_text}}</p>
								</div>
							</v-col>
						</v-row>
					</v-container>
				</v-img>
			</v-layout>
		</v-container>

		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<div style="background-color: #a6bc71;">
						<v-img
							:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*3/4 : (this.windowSize.y)]"
						>
							<v-container fill-height>
								<v-row align="center" class="mx-auto" justify="center">
									<v-col class="text-center" cols="12" tag="h1">
										<div class="text">
											<p
												:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']  + ' font-weight-bold black--text'"
												:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px; ']"
											>{{index.blocktext}}</p>
											<img
												:width="[$vuetify.breakpoint.smAndDown ? '70%' : '20%']"
												:src="asset + index.blocklogo.path"
											/>
										</div>
									</v-col>
								</v-row>
							</v-container>
						</v-img>
					</div>
				</v-flex>
				<v-flex lg6>
					<v-img :height="(this.windowSize.y)*(2/3)" :src="asset + index.image4.path">
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text white--text">
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']  + ' font-weight-bold'"
											:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px; ']"
										>{{index.image4_text1}}</p>

										<v-img
											style="margin: auto;"
											:width="[$vuetify.breakpoint.smAndDown ? '70%' : '30%']"
											:src="asset + index.image4_logo.path"
										></v-img>

										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']  + ' font-weight-bold'"
											:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px; ']"
										>{{index.image4_text2}}</p>
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-img>
					<v-img :height="(this.windowSize.y)/3">
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
											:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']"
										>{{index.block2_text}}</p>
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-img>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*4/5 : (this.windowSize.y)]"
					:src="asset + index.image5.path"
				>
					<v-container fill-height>
						<v-row align="center" class="white--text mx-auto" justify="center">
							<v-col class="white--text text-center" cols="12" tag="h1">
								<div class="text">
									<p
										:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
										:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']"
									>{{index.image5_title}}</p>
									<v-img
										style="margin: auto;"
										:width="[$vuetify.breakpoint.smAndDown ? '70%' : '30%']"
										:src="asset + index.image5_logo.path"
									></v-img>
									<p
										:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
									>{{index.image5_text}}</p>
								</div>
							</v-col>
						</v-row>
					</v-container>
				</v-img>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/3 : (this.windowSize.y)/2]"
						:src="asset + index.image6.path"
					>
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<v-img style="margin: auto;" width="30%" :src="asset + index.image6_logo.path"></v-img>
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
										>{{index.image6_text}}</p>
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-img>
					<div style="background-color: #e2d26b;" class="hidden-sm-and-down">
						<v-img :height="(this.windowSize.y)/2">
							<v-container fill-height>
								<v-row align="center" class="white--text mx-auto" justify="center">
									<v-col class="white--text text-center" cols="12" tag="h1">
										<div class="text">
											<p
												class="display-2 font-weight-bold black--text"
												style="line-height: 80px"
											>{{index.block6_text}}</p>
										</div>
									</v-col>
								</v-row>
							</v-container>
						</v-img>
					</div>
				</v-flex>
				<v-flex lg6>
					<v-layout row wrap>
						<v-flex lg6>
							<div style="background-color: #ffffff;">
								<v-img
									:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)/4 : (this.windowSize.y)/2]"
								>
									<v-container fill-height>
										<v-row align="center" class="white--text mx-auto" justify="center">
											<v-col class="white--text text-center" cols="12" tag="h1">
												<div class="text">
													<p
														:class="[$vuetify.breakpoint.smAndDown ? 'display-1 black--text' : 'display-2 black--text']"
														:style="[$vuetify.breakpoint.smAndDown ? '' : 'line-height: 80px;']"
													>{{index.block3_text}}</p>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-img>
							</div>
						</v-flex>
						<v-flex lg6>
							<v-img :height="(this.windowSize.y)/4">
								<v-container fill-height>
									<v-row align="center" class="white--text mx-auto" justify="center">
										<v-col class="white--text text-center" cols="12" tag="h1">
											<div class="text">
												<p
													:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
													:style="[$vuetify.breakpoint.smAndDown ? '' : 'line-height: 80px;']"
												>{{index.block4_text}}</p>
											</div>
										</v-col>
									</v-row>
								</v-container>
							</v-img>
							<div style="background-color: #b7b181;">
								<v-img
									:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/6 : (this.windowSize.y)/4]"
								>
									<v-container fill-height>
										<v-row align="center" class="white--text mx-auto" justify="center">
											<v-col class="white--text text-center" cols="12" tag="h1">
												<div class="text">
													<p
														:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
														:style="[$vuetify.breakpoint.smAndDown ? '' : 'line-height: 80px;']"
													>{{index.block5_text}}</p>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-img>
							</div>
						</v-flex>
					</v-layout>
					<v-img :height="(this.windowSize.y)/2" :src="asset + index.image7.path">
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<v-img
											style="margin: auto;"
											:width="[$vuetify.breakpoint.smAndDown ? '60%' : '30%']"
											:src="asset + index.image7_logo.path"
										></v-img>
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
										>{{index.image7_text}}</p>
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-img>
					<div style="background-color: #e2d26b;" class="hidden-sm-and-up">
						<v-img :height="(this.windowSize.y)/4">
							<v-container fill-height>
								<v-row align="center" class="white--text mx-auto" justify="center">
									<v-col class="white--text text-center" cols="12" tag="h1">
										<div class="text">
											<p class="headline font-weight-bold black--text">{{index.block6_text}}</p>
										</div>
									</v-col>
								</v-row>
							</v-container>
						</v-img>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-img
				:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*3/5 : (this.windowSize.y)]"
				:src="asset + index.image8.path"
			>
				<v-container fill-height>
					<v-row align="center" class="white--text mx-auto" justify="center">
						<v-col class="white--text text-center" cols="12" tag="h1">
							<div class="text">
								<v-img
									style="margin: auto;"
									:width="[$vuetify.breakpoint.smAndDown ? '55%' : '30%']"
									:src="asset + index.image8_logo.path"
								></v-img>
								<p :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']">
									To know the road ahead,
									<br />ask those coming back.
								</p>
							</div>
						</v-col>
					</v-row>
				</v-container>
			</v-img>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-img :height="(this.windowSize.y)*2/3">
				<div style="width: 100%">
					<iframe
						width="100%"
						:height="(this.windowSize.y)*2/3"
						:src="'https://maps.google.com/maps?hl=en&amp;coord='+map.location+'&amp;q=wallaby%20hostel%20albania&amp;ie=UTF8&amp;t=&amp;z=19&amp;iwloc=B&amp;output=embed'"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
					></iframe>
				</div>
				<br />
			</v-img>
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
			index: this.$store.state.pageData[0],
			map: this.$store.state.pageData[1],
			asset: this.$store.state.assetRoot2
		};
	},
	middleware: "index",

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
