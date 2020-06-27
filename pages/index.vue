<template>
	<div>
		<v-container fluid class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-flex lg6>
					<div style="background-color:black;" class="black--text">
						<v-container
							:style="'height:'+[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/5 : (this.windowSize.y)/2]+'px'"
						>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column class="white--text text-center">
										<div class="text">
											<v-img style="margin: auto;" width="60%" :src="asset + index.logo.path"></v-img>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>

					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*4/5 : (this.windowSize.y)/2]"
						:src="asset + index.image1.path"
					>
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
									<div class="text">
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'display-2 text-uppercase' : 'display-4 text-uppercase']  + ' font-weight-black yellow--text text--accent-1'"
										>{{index.image1_text}}</p>
									</div>
								</v-layout>
							</v-layout>
						</v-container>
					</v-img>
				</v-flex>
				<v-flex lg6>
					<div style="background-color:white;" class="black--text">
						<v-container
							:style="'height:'+[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)/2]+'px'"
						>
							<v-container grid-list-lg>
								<v-layout align-center justify-center row fill-height mx-5 px-5>
									<v-flex xs12>
										<p
											style="text-align:center;"
											:class="[$vuetify.breakpoint.mdAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
										>{{index.bookText}}</p>
									</v-flex>

									<br />
									<v-flex lg6 xs12>
										<div align="center">
											<v-btn
												outlined
												color="black"
												width="100%"
												@click="datepicker = !datepicker"
											>{{index.button1}}</v-btn>
										</div>
										<v-menu close-on-click="false" bottom v-model="datepicker">
											<template v-slot:activator="{ on }">
												<div v-on="on"></div>
											</template>
											<v-date-picker color="secondary lighten-1" v-model="date" light :reactive="true"></v-date-picker>
										</v-menu>
									</v-flex>
									<v-flex lg6 xs12>
										<div align="center">
											<v-btn
												outlined
												color="black"
												width="100%"
												@click="daypicker = !daypicker"
											>{{index.button2}}</v-btn>
										</div>
										<v-menu close-on-click="false" bottom v-model="daypicker">
											<template v-slot:activator="{ on }">
												<div v-on="on"></div>
											</template>
											<v-list>
												<v-list-item v-for="(item, index) in 7" :key="index">
													<v-list-item-title>{{ index+1 }}</v-list-item-title>
												</v-list-item>
											</v-list>
										</v-menu>
									</v-flex>
									<v-flex xs12></v-flex>
									<v-flex xs12>
										<div align="center">
											<v-btn color="#dfd269" width="100%">
												<span class="black--text font-weight-bold">{{index.button3}}{{date}}</span>
											</v-btn>
										</div>
									</v-flex>
								</v-layout>
							</v-container>
						</v-container>
					</div>

					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/3 : (this.windowSize.y)/2]"
						:src="asset + index.image2.path"
					>
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
									<div class="text">
										<v-img v-if="index.svg" style="margin: auto;" width="40%" :src="asset + index.svg.path"></v-img>
									</div>
								</v-layout>
							</v-layout>
						</v-container>
					</v-img>
				</v-flex>
			</v-layout>
		</v-container>

		<v-container fluid fill-height class="ma-0 pa-0">
			<v-container class="ma-5 pa-5">
				<p
					:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-3']  + ' font-weight-bold'"
					style="text-align:center; "
				>{{index.section2_title}}</p>
				<p
					:class="[$vuetify.breakpoint.smAndDown ? 'title' : 'display-2']  + ' font-weight-bold '"
					style="text-align:center; "
				>{{index.section2_subtitle}}</p>
				<br />
				<v-layout row wrap fill-height>
					<v-layout align-center justify-center row fill-height>
						<v-layout column class="white--text text-center">
							<div class="text">
								<p
									:class="[$vuetify.breakpoint.smAndDown ? 'body-2' : 'headline']  + ' font-weight-bold ma-5 pa-5'"
									style="text-align:center; "
								>{{index.section2_text}}</p>
								<v-btn class="black--text" color="secondary lighten-1">{{index.section2_buttonText}}</v-btn>
							</div>
						</v-layout>
					</v-layout>
				</v-layout>
			</v-container>
		</v-container>

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
											>{{index.blocktext}}</p>
											<img
												:width="[$vuetify.breakpoint.smAndDown ? '70%' : '20%']"
												:src="asset + index.blocklogo.path"
											/>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6>
					<v-img :height="(this.windowSize.y)*(2/3)" :src="asset + index.image4.path">
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
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
										>{{index.block2_text}}</p>
									</div>
								</v-layout>
							</v-layout>
						</v-container>
					</v-container>
				</v-flex>
			</v-layout>
		</v-container>

		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? 'auto' : (this.windowSize.y)]"
					:src="asset + index.image5.path"
				>
					<v-container fill-height>
						<v-layout align-center justify-center row fill-height>
							<v-layout column class="white--text text-center">
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

		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/3 : (this.windowSize.y)/2]"
						:src="asset + index.image6.path"
					>
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
									<div class="text">
										<v-img style="margin: auto;" width="30%" :src="asset + index.image6_logo.path"></v-img>
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
										>{{index.image6_text}}</p>
									</div>
								</v-layout>
							</v-layout>
						</v-container>
					</v-img>
					<div style="background-color: #e2d26b;" class="hidden-sm-and-down">
						<v-container :style="'height:'+(this.windowSize.y)/2+'px'">
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column class="white--text text-center">
										<div class="text">
											<p
												class="display-2 font-weight-bold black--text"
												style="line-height: 80px"
											>{{index.block6_text}}</p>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6>
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
														:class="[$vuetify.breakpoint.smAndDown ? 'display-1 black--text' : 'display-2 black--text']"
														:style="[$vuetify.breakpoint.smAndDown ? '' : 'line-height: 80px;']"
													>{{index.block3_text}}</p>
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
													:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
													:style="[$vuetify.breakpoint.smAndDown ? '' : 'line-height: 80px;']"
												>{{index.block4_text}}</p>
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
														:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
														:style="[$vuetify.breakpoint.smAndDown ? '' : 'line-height: 80px;']"
													>{{index.block5_text}}</p>
												</div>
											</v-layout>
										</v-layout>
									</v-container>
								</v-container>
							</div>
						</v-flex>
					</v-layout>
					<v-img :height="(this.windowSize.y)/2" :src="asset + index.image7.path">
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
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
								</v-layout>
							</v-layout>
						</v-container>
					</v-img>
					<!--<div style="background-color: #e2d26b;" class="hidden-sm-and-up">
						<v-container :style="'height:'+(this.windowSize.y)/4+'px'">
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column class="white--text text-center">
										<div class="text">
											<p class="headline font-weight-bold black--text">{{index.block6_text}}</p>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>-->
				</v-flex>
			</v-layout>
		</v-container>
		<!--	<v-container fluid fill-height class="ma-0 pa-0">
			<v-img
				:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*3/5 : (this.windowSize.y)]"
				:src="asset + index.image8.path"
			>
				<v-container fill-height>
					<v-layout row align="center" class="white--text mx-auto" justify="center">
						<v-layout align-center justify-center row fill-height>
							<div class="text">
								<v-img
									style="margin: auto;"
									:width="[$vuetify.breakpoint.smAndDown ? '55%' : '30%']"
									:src="asset + index.image8_logo.path"
								></v-img>
								<p :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']">{{index.image8_text}}</p>
							</div>
						</v-layout>
					</v-layout>
				</v-container>
			</v-img>
		</v-container>-->
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-img :style="'height:'+(this.windowSize.y)*2/3+'px'">
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
			asset: this.$store.state.assetRoot2,
			datepicker: false,
			daypicker: false,
			date: ""
		};
	},
	components: {
		activities: () => import("@/components/cards/CardThing")
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
