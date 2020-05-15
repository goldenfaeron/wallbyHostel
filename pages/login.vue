<template >
	<v-container
		fluid
		style="background-size: cover; background-image:url(require('@/assets/miro.png'))"
	>
		<v-layout row justify-center class="mt-5">
			<v-flex xs12 sm6 mt-5>
				<v-card>
					<InputLogin v-if="$store.state.user.loggedIn == false"></InputLogin>
					<v-btn v-else color="warning" @click="logOut()">Log out</v-btn>
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
	},

	methods: {
		logOut() {
			this.$store.commit("setLoginStatus", { user: "", id: "", value: false });
		}
	}
};
</script>

