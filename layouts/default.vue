<template>
	<v-app>
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
			>Find what you need in {{$store.state.city}}, Albania</v-toolbar-title>
			<v-spacer />

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
			<!-- Mobile display right -->

			<!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
				<v-icon>mdi-account</v-icon>
			</v-btn>-->
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
		<Footer></Footer>
		<GoBackButton></GoBackButton>
	</v-app>
</template>

<script>
export default {
	computed: {
		nav() {
			return this.$store.getters.getNavigation;
		}
	},
	components: {
		GoBackButton: () => import("@/components/core/GoBackButton"),
		Footer: () => import("@/components/core/Footer"),
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
			items: this.$store.state.nav_items,
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: "go" + this.$store.state.city + "i",
			developer: this.$store.state.developer
		};
	}
};
</script>

