<template>
	<div>
		<!--{{index}}
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
											<img :src="$store.state.assetRoot2 + index.logo.path" width="50%" />
										</div>
									</v-col>
								</v-row>
							</v-container>
						</v-img>
					</div>
					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*5/6 : (this.windowSize.y)*.75]"
						:src="$store.state.assetRoot2 + index.logo.path"
					>
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<p :class="[$vuetify.breakpoint.smAndDown ? 'display-2 text-uppercase' : 'display-4 text-uppercase']  + ' font-weight-black yellow--text text--accent-1'">welcome to our social hostel in downtown reykjavík</p>
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
										>
										Book you stay with us now!
										</p>
									</v-flex>

									<br />
									<v-flex lg6 xs12>
										<div align="center">
											<v-btn outlined color="black" width="100%">Arrival date</v-btn>
										</div>
									</v-flex>
									<v-flex lg6 xs12>
										<div align="center">
											<v-btn outlined color="black" width="100%">No of nights</v-btn>
										</div>
									</v-flex>
									<v-flex xs12></v-flex>
									<v-flex xs12>
										<div align="center">
											<v-btn color="#dfd269" width="100%">
												<span class="black--text font-weight-bold">Book</span>
											</v-btn>
										</div>
									</v-flex>
								</v-layout>
							</v-container>
						</v-img>
					</div>

					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/3 : (this.windowSize.y)/2]"
						src="https://www.kexhostel.is/media/box-covers/hq-halfcol-wide/xtv3nwv8.jpg"
					>
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<v-img
											style="margin: auto;"
											width="40%"
											src="https://www.kexhostel.is/media/svg-icon/roomsrates.svg"
										></v-img>
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-img>

					<v-img>
						<a href="/rooms-and-rates" class="item" style="min-height: 385.037px;"></a>
					</v-img>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)]"
					src="https://www.kexhostel.is/media/box-covers/fullcol-wide/v4r8yedc.jpg"
				>
					<v-container fill-height>
						<v-row align="center" class="white--text mx-auto" justify="center">
							<v-col class="white--text text-center" cols="12" tag="h1">
								<div class="text">
									<v-img
										style="margin: auto;"
										:width="[$vuetify.breakpoint.smAndDown ? '70%' : '30%']"
										src="https://www.kexhostel.is/media/svg-icon/saemundur.svg"
									></v-img>
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
								<v-row align="center" class="white--text mx-auto" justify="center">
									<v-col class="white--text text-center" cols="12" tag="h1">
										<div class="text">
											<p
												:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold black--text'"
												:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']  +'text-align:center;' "
											>
												Kex is the
												Icelandic word for
												“biscuit” and a
												social hostel in
												Reykjavík.
											</p>
											<img
												:width="[$vuetify.breakpoint.smAndDown ? '70%' : '20%']"
												src="https://www.kexhostel.is/media/svg-icon/about.svg"
											/>
										</div>
									</v-col>
								</v-row>
							</v-container>
						</v-img>
					</div>
				</v-flex>
				<v-flex lg6>
					<v-img
						:height="(this.windowSize.y)*(2/3)"
						src="https://www.kexhostel.is/media/box-covers/halfcol-wide/yyqhr3cv.jpg"
					>
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<v-img
											style="margin: auto;"
											:width="[$vuetify.breakpoint.smAndDown ? '70%' : '30%']"
											src="https://www.kexhostel.is/media/svg-icon/gymtonic.svg"
										></v-img>
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
										>
											A gentleman is a man who can
											<br />play the accordion but doesn’t.
										</p>
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
					src="https://www.kexhostel.is/media/box-covers/fullcol-wide/469jem6i.jpg"
				>
					<v-container fill-height>
						<v-row align="center" class="white--text mx-auto" justify="center">
							<v-col class="white--text text-center" cols="12" tag="h1">
								<div class="text">
									<v-img
										style="margin: auto;"
										:width="[$vuetify.breakpoint.smAndDown ? '70%' : '30%']"
										src="https://www.kexhostel.is/media/svg-icon/kexland-logo-both.svg"
									></v-img>
									<p :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']">
										KEXLAND is our free spirited
										<br />event and adventure organizer.
									</p>
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
						src="https://www.kexhostel.is/media/box-covers/halfcol-wide/k8jby7gq.jpg"
					>
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<v-img
											style="margin: auto;"
											width="30%"
											src="https://www.kexhostel.is/media/svg-icon/drinx.svg"
										></v-img>
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
											<p class="display-2 font-weight-bold black--text" style="line-height: 80px">
												Follow the river and you will
												<br />find the sea.
											</p>
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
													>
														We're on
														<br />Facebook
													</p>
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
												>
													And also on
													<br />Twitter
												</p>
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
													>Instagram too!</p>
												</div>
											</v-col>
										</v-row>
									</v-container>
								</v-img>
							</div>
						</v-flex>
					</v-layout>
					<v-img
						:height="(this.windowSize.y)/2"
						src="https://www.kexhostel.is/media/box-covers/halfcol-wide/t232qqcq.jpg"
					>
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<v-img
											style="margin: auto;"
											:width="[$vuetify.breakpoint.smAndDown ? '60%' : '30%']"
											src="https://www.kexhostel.is/media/svg-icon/baxtur.svg"
										></v-img>
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
											<p class="headline font-weight-bold black--text">
												Follow the river and you will
												<br />find the sea.
											</p>
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
				src="https://www.kexhostel.is/media/box-covers/fullcol-wide/ic9769w3.jpg"
			>
				<v-container fill-height>
					<v-row align="center" class="white--text mx-auto" justify="center">
						<v-col class="white--text text-center" cols="12" tag="h1">
							<div class="text">
								<v-img
									style="margin: auto;"
									:width="[$vuetify.breakpoint.smAndDown ? '55%' : '30%']"
									src="https://www.kexhostel.is/media/svg-icon/servicesfacilities.svg"
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
						src="https://maps.google.com/maps?hl=en&amp;coord=39.877471,20.007149&amp;q=wallaby%20hostel%20albania&amp;ie=UTF8&amp;t=&amp;z=19&amp;iwloc=B&amp;output=embed"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
					></iframe>
				</div>
				<br />
			</v-img>
		</v-container>-->
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
		index: this.$store.state.pageData
	}
},
	middleware: "index",

	methods: {
		onResize() {
			this.windowSize = { x: window.innerWidth, y: window.innerHeight };
		},
		
	},
	
	mounted() {
		this.onResize();
	}
};
</script>
