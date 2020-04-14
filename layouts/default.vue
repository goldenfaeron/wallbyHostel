<template>
	<v-app dark>
		<v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
			<v-list>
				<v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar :clipped-left="clipped" fixed app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />

			<!-- Mini Icon -->
			<!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
				<v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
			</v-btn>-->

			<!-- Screen Icon -->
			<!-- <v-btn icon @click.stop="clipped = !clipped">
				<v-icon>mdi-application</v-icon>
			</v-btn>-->

			<!-- Minus Icon -->
			<!-- <v-btn icon @click.stop="fixed = !fixed">
				<v-icon>mdi-minus</v-icon>
			</v-btn>-->

			<v-toolbar-title v-text="title" />
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
