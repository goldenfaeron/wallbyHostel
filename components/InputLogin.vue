<template>
	<div>
		<template>
			<v-container>
				{{error}}
				<v-form v-model="valid" ref="form" lazy-validation>
					<v-text-field label="Username" v-model="name" :rules="nameRules" :counter="10" required></v-text-field>
					<v-text-field type="password" label="Password" v-model="password" :rules="emailRules" required></v-text-field>

					<v-btn
						color="red lighten-2"
						class="white--text"
						@click="login(name, password)"
						:disabled="!valid"
					>Login</v-btn>
				</v-form>
			</v-container>
		</template>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			password: "",
			error: "",
			user: ""
		};
	},
	props: ["props"],
	methods: {
		login(usr, pwd) {
			return this.$axios
				.post(
					this.$store.state.webRoot +
						"/api/cockpit/authUser?token=" +
						this.$store.state.authToken,
					{ user: usr, password: pwd }
				)
				.then(res => {
					console.log(res.data);
					this.$store.commit(
						"setLoginStatus",
						{ user: res.data.user, id: res.data._id, value: true }
						// res.data.user,
						// res.data._id,
						// true
					);
					this.$router.push("/account/" + res.data._id);
				})
				.catch(error => {
					this.error = error.response.data.error;
					// console.log(error.response.data.error);
				});
		}
	}
};
</script>