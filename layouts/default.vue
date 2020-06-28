<template>
	<v-app>
		<span v-show="show">
			<Nav></Nav>
			<v-toolbar v-if="this.$store.state.pageData[0].title != 'home'">
				<v-container>
					<v-layout row wrap justify-space-between>
						<v-flex lg3>
							<div align="center">
								<v-btn outlined color="white" width="100%" @click="datepicker = !datepicker">Arrival date</v-btn>
							</div>
							<v-menu close-on-click="false" bottom v-model="datepicker">
								<template v-slot:activator="{ on }">
									<div v-on="on"></div>
								</template>
								<v-date-picker color="secondary lighten-1" v-model="date" light :reactive="true"></v-date-picker>
							</v-menu>
						</v-flex>
						<v-flex lg3>
							<div align="center">
								<v-btn outlined color="white" width="100%" @click="daypicker = !daypicker">No of nights</v-btn>
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
						<v-flex lg3>
							<div align="center">
								<v-btn color="#dfd269" width="100%" @click="book = true">
									<span class="black--text font-weight-bold">Book now</span>
								</v-btn>
							</div>
						</v-flex>
					</v-layout>
				</v-container>
			</v-toolbar>
			<v-dialog v-model="book" max-width="250" transition="dialog-transition">
				<v-card>
					<v-card-title primary-title>
						<p>Your Booking:</p>
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
			<v-content>
				<nuxt />
			</v-content>

			<!--<v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
				<v-list>
					<v-list-item v-for="(item, i) in nav" :key="i" :to="item.to" router exact>
						<v-list-item-action>
							<v-icon color="primary" v-if="item.icon">{{ item.icon }}</v-icon>
							<v-img height="32" width="24" v-else :src="item.img"></v-img>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title v-text="item.title" />
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>-->
			<!--<BottomNav></BottomNav>-->
			<Footer></Footer>
		</span>

		<span v-show="!show">
			<div class="loading-page">
				Loading App
				<div class="lds-dual-ring"></div>
			</div>
		</span>
	</v-app>
</template>

<script>
import { Mixin } from "~/mixins/navigation.js";

export default {
	mixins: [Mixin],
	components: {
		BottomNav: () => import("@/components/core/BottomNav"),
		Nav: () => import("@/components/core/nav"),
		Footer: () => import("@/components/core/Footer")
	},

	data() {
		return {
			show: false,
			clipped: false,
			drawer: false,
			fixed: false,
			items: this.$store.state.nav_items,
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: "Wallaby Hostel",
			developer: this.$store.state.developer,
			datepicker: false,
			daypicker: false,
			date: "",
			nights: "",
			book: false
		};
	},

	computed: {
		navPos() {
			return this.nav
				.map(e => {
					return e.to;
				})
				.indexOf(this.$route.path);
		}
	},

	methods: {
		go(route) {
			this.$router.push(route);
		},

		quickNav(direction) {
			// console.log("clicked");
			let length = this.nav.length - 1;
			//reset position
			if (direction == "right") {
				if (this.navPos == length) {
					return this.$router.push(this.nav[0].to);
				} else {
					return this.$router.push(this.nav[this.navPos + 1].to);
				}
			}
			if (direction == "left") {
				if (this.navPos == 0) {
					return this.$router.push(this.nav[length].to);
				} else {
					return this.$router.push(this.nav[this.navPos - 1].to);
				}
			}
		},

		changeLanguage(lang) {
			// Change the i18n context variable's locale
			// This makes it so the correct locale file is used
			this.$i18n.locale = lang;
		}
	},

	mounted() {
		this.show = true;
	}
};
</script>

<style lang="css">
.loading-page {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.8);
	text-align: center;
	padding-top: 200px;
	font-size: 30px;
	font-family: sans-serif;
	z-index: 5;
}
.lds-dual-ring {
	color: red;
	display: inline-block;
	width: 80px;
	height: 80px;
	z-index: 5;
}
.lds-dual-ring:after {
	color: red;
	content: " ";
	display: block;
	width: 64px;
	height: 64px;
	margin: 8px;
	border-radius: 50%;
	border: 6px solid #fff;
	border-color: blue transparent blue;
	animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>

