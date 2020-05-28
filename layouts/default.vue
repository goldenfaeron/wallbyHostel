<template>
	<v-app>
		<span v-show="show">
			<v-navigation-drawer
				color="accent lighten-4"
				v-model="drawer"
				:mini-variant="miniVariant"
				:clipped="clipped"
				fixed
				app
			>
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
			</v-navigation-drawer>

			<v-app-bar :clipped-left="clipped" app fixed color="accent lighten-3 " type>
				<!-- Mobile display left -->
				<v-icon
					color="accent"
					class="hidden-sm-and-up"
					@click.stop="drawer = !drawer"
					style="margin-left:10px"
				>mdi-heart-multiple</v-icon>

				<v-app-bar-nav-icon
					class="hidden-xs-only"
					color="accent darken-2"
					@click.stop="drawer = !drawer"
				/>
				<v-toolbar-title style="cursor:pointer" @click="go('/')">
					<b>{{title}}</b>
				</v-toolbar-title>
				<v-icon
					color="accent"
					class="hidden-xs-only"
					@click.stop="drawer = !drawer"
					style="margin-left:10px"
				>mdi-heart-multiple</v-icon>

				<v-toolbar-title
					class="ml-2 grey--text hidden-xs-only"
				>{{$t('toolbar')}} {{$store.state.city}}, {{$t('country')}}</v-toolbar-title>
				<v-spacer />
				<v-btn small v-if="$store.state.user.loggedIn == false" fab text @click="go('/login')">
					<v-icon>mdi-account-circle</v-icon>
				</v-btn>
				<v-btn @click="changeLanguage('en')" fab text color="success">EN</v-btn>
				<v-btn @click="changeLanguage('sq')" fab text color="success">SQ</v-btn>
				<v-btn @click="changeLanguage('de')" fab text color="success">DE</v-btn>

				<v-btn
					v-if="$store.state.user.loggedIn"
					@click="go('/account/'+$store.state.user.id)"
					color="success"
				>{{$store.state.user.user}}</v-btn>
				<v-btn
					small
					fab
					text
					class="hidden-sm-and-up"
					color="accent lighten-3"
					@click.stop="rightDrawer = !rightDrawer"
				>
					<v-icon color="accent darken-2">mdi-menu</v-icon>
				</v-btn>
			</v-app-bar>

			<v-content>
				<nuxt />
			</v-content>

			<v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
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
			</v-navigation-drawer>
			<BottomNav></BottomNav>
			<Footer></Footer>
		</span>

		<span v-show="!show">
			<div class="loading-page">
				Loading App
				<div class="lds-dual-ring"></div>
			</div>
		</span>
		<!-- <GoBackButton></GoBackButton> -->
	</v-app>
</template>

<script>
import { Mixin } from "~/mixins/navigation.js";

export default {
	components: {
		BottomNav: () => import("@/components/core/BottomNav"),
		GoBackButton: () => import("@/components/core/GoBackButton"),
		Footer: () => import("@/components/core/Footer"),
		DrawerAnnouncement: () => import("@/components/DrawerAnnouncement")
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
			title: "go" + this.$store.state.city + "i",
			developer: this.$store.state.developer
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
	},

	mixins: [Mixin]
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

