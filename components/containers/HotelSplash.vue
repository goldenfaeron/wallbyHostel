<template>
	<div>
		<v-dialog v-model="book" max-width="250" transition="dialog-transition">
			<v-card>
				<v-card-title primary-title>
					<p  >Your Booking:</p>
				</v-card-title>
				<v-card-text>
					<p>
						Arrival Date:
						<span class="secondary--text text--lighten-1 font-weight-bold">{{date}}</span>
					</p>
					<p>
						Number of nights:
						<span class="secondary--text text--lighten-1 font-weight-bold">{{nights}}</span>
					</p>
				</v-card-text>
				<v-card-actions>
					<v-layout justify-center>
						<v-btn color="secondary lighten-1">Book Now</v-btn>
					</v-layout>
				</v-card-actions>
				<br />
			</v-card>
		</v-dialog>
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
											<v-img style="margin: auto;" width="60%" :src="asset + props.logo.path"></v-img>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>

					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*4/5 : (this.windowSize.y)/2]"
						:src="asset + props.image1.path"
					>
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
									<div class="text">
										<p
											:class="this.resize.lgtext +' text-uppercase font-weight-black secondary--text text--lighten-1'"
										>{{props.image1_text}}</p>
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
											:class="this.resize.headline+' font-weight-bold'">{{props.bookText}}</p>
									</v-flex>

									<br />
									<v-flex lg6 xs12>
										<div align="center">
											<v-btn
												outlined
												color="black"
												width="100%"
												@click="datepicker = !datepicker"
											>{{props.button1}}</v-btn>
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
											>{{props.button2}}</v-btn>
										</div>
										<v-menu close-on-click="false" bottom v-model="daypicker">
											<template v-slot:activator="{ on }">
												<div v-on="on"></div>
											</template>
											<v-list>
												<v-list-item v-for="(item, index) in 7" :key="index">
													<v-list-item-title>
														<v-btn color="white" width="100%" @click="nights = index+1" text>{{ index+1 }}</v-btn>
													</v-list-item-title>
												</v-list-item>
											</v-list>
										</v-menu>
									</v-flex>
									<v-flex xs12></v-flex>
									<v-flex xs12>
										<div align="center">
											<v-btn color="#dfd269" width="100%" @click="book = true">
												<span class="black--text font-weight-bold">{{props.button3}}</span>
											</v-btn>
										</div>
									</v-flex>
								</v-layout>
							</v-container>
						</v-container>
					</div>

					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/3 : (this.windowSize.y)/2]"
						:src="asset + props.image2.path"
					>
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
									<div class="text">
										<v-img v-if="props.svg" style="margin: auto;" width="40%" :src="asset + props.svg.path"></v-img>
									</div>
								</v-layout>
							</v-layout>
						</v-container>
					</v-img>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>


<script>
import { Mixin } from "~/mixins/windowSize.js";
//import mobilefriendly from "~/mixins/mobilefriendly.js";

export default {
	mixins: [Mixin],
	props: ["props"],
	data() {
		return {
			asset: this.$store.state.assetRoot2,
			datepicker: false,
			daypicker: false,
			date: "",
			nights: "",
			book: false
		};
	}
};
</script>