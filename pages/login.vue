<template >
	<v-container
		fluid
		style="background-size: cover; background-image:url('https://en.instagram-brand.com/wp-content/uploads/2016/11/Glyph-Icon-hero.png')"
	>
		{{acc}}
		<v-layout row justify-center class="mt-5">
			<v-flex xs12 sm6 mt-5>
				<v-card>
					<InstagramToolbar></InstagramToolbar>
					<InputLogin></InputLogin>
				</v-card>
				<!--  -->
			</v-flex>
			<v-flex xs12>
				<div style="height:500px"></div>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	// asyncData({ params, store, $axios, route }) {
	// 	let usr = "tester";
	// 	let pwd = "Tester123";
	// 	return this.$axios
	// 		.post(
	// 			this.$store.state.webRoot +
	// 				"/api/cockpit/authUser?token=" +
	// 				this.$store.state.authToken,
	// 			{ user: usr, password: pwd }
	// 		)
	// 		.then(res => {
	// 			return;
	// 			res.data;
	// 		});
	// },

	components: {
		InstagramToolbar: () => import("@/components/InstagramToolbar"),
		InputLogin: () => import("@/components/InputLogin")
	},
	data() {
		return {
			items: [
				{
					action: "mdi_local_activity",
					title: "Attractions",
					items: [{ title: "List Item" }]
				},
				{
					action: "restaurant",
					title: "Dining",
					active: true,
					items: [
						{ title: "Breakfast & brunch" },
						{ title: "New American" },
						{ title: "Sushi" }
					]
				},
				{
					action: "school",
					title: "Education",
					items: [{ title: "List Item" }]
				},
				{
					action: "directions_run",
					title: "Family",
					items: [{ title: "List Item" }]
				},
				{
					action: "healing",
					title: "Health",
					items: [{ title: "List Item" }]
				},
				{
					action: "content_cut",
					title: "Office",
					items: [{ title: "List Item" }]
				},
				{
					action: "local_offer",
					title: "Promotions",
					items: [{ title: "List Item" }]
				}
			]
		};
	}
};

// <v-card>
// 				<v-toolbar color="teal" dark>
// 					<v-toolbar-side-icon></v-toolbar-side-icon>

// 					<v-toolbar-title>Topics</v-toolbar-title>

// 					<v-spacer></v-spacer>

// 					<v-btn icon>
// 						<v-icon>more_vert</v-icon>
// 					</v-btn>
// 				</v-toolbar>

// 				<v-list>
// 					<v-list-group
// 						v-for="item in items"
// 						:key="item.title"
// 						v-model="item.active"
// 						:prepend-icon="item.action"
// 						no-action
// 					>
// 						<template v-slot:activator>
// 							<v-list-tile>
// 								<v-list-tile-content>
// 									<v-list-tile-title>{{ item.title }}</v-list-tile-title>
// 								</v-list-tile-content>
// 							</v-list-tile>
// 						</template>

// 						<v-list-tile v-for="subItem in item.items" :key="subItem.title" @click>
// 							<v-list-tile-content>
// 								<v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
// 							</v-list-tile-content>

// 							<v-list-tile-action>
// 								<v-icon>{{ subItem.action }}</v-icon>
// 							</v-list-tile-action>
// 						</v-list-tile>
// 					</v-list-group>
// 				</v-list>
// 			</v-card>
</script>

