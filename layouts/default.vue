<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
			<v-list>
				<v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
					<v-list-item-action>
						<v-icon v-if="item.icon">{{ item.icon }}</v-icon>
						<v-img height="32" width="24" v-else :src="item.img"></v-img>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar :clipped-left="clipped" fixed app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />

			<v-toolbar-title style="cursor:pointer" @click="go('/')" v-text="title" />
			<v-spacer />
			<v-btn icon @click.stop="rightDrawer = !rightDrawer">
				<v-icon>mdi-account</v-icon>
			</v-btn>
		</v-app-bar>
		<v-content>
			<!-- <v-container> -->
			<nuxt />
			<!-- </v-container> -->
		</v-content>
		<v-navigation-drawer width="500" v-model="rightDrawer" :right="right" temporary fixed>
			<DrawerAnnouncement></DrawerAnnouncement>
		</v-navigation-drawer>
		<v-footer :fixed="fixed" app>
			<span>
				<nuxt-link :to="'/'+developer.name">{{developer.name}}</nuxt-link>
				&copy; {{ new Date().getFullYear() }}
			</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	components: {
		DrawerAnnouncement: () => import("@/components/DrawerAnnouncement")
	},
	methods: {
		go(route) {
			this.$router.push(route);
		}
	},
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: "mdi-home",
					title: "Home",
					to: "/"
				},

				{
					icon: "mdi-key-variant",
					title: this.$store.state.city + " Hotels",
					to: "/booking"
				},
				{
					icon: "mdi-beer",
					title: this.$store.state.city + " Bars",
					to: "/bars"
				},
				{
					icon: "mdi-instagram",
					title: this.$store.state.city + " on Instagram",
					to: "/instagram"
				},

				{
					icon: "",
					img: "/img/airbnbLogo.png",
					title: this.$store.state.city + " Airbnb",
					to: "/airbnb"
				},
				{
					icon: "mdi-youtube",
					title: this.$store.state.city + " on Youtube",
					to: "/youtube"
				},
				{
					icon: "mdi-biohazard",
					title: "Covid-19 in " + this.$store.state.city,
					to: "/corona"
				},
				{
					icon: "mdi-account-box",
					title: this.$store.state.name + " Team",
					to: "/team/"
				}
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: "go" + this.$store.state.city + "i",
			developer: this.$store.state.developer
		};
	}
};
</script>

