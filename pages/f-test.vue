
<template>
	<div>
		{{town}}
		<h2>5. icanhazip.com</h2>
		<p>
			<em>API call done by lambda function</em>
		</p>
		<p>Your IP: {{ ip }}</p>
		<v-btn type="primary" @click="icanhazip('tripadvisor_thingstodo_borsh')">🤖 Haz AWS IP please</v-btn>

		<p>Response: {{ response }}</p>
		<p v-if="error" style="color: red;">
			<strong>Error {{ error.status }}</strong>
			<br />
			{{ error.data }}
		</p>
	</div>
</template>
<script>
export default {
	async asyncData({ params, store, route, $axios }) {
		let collection = "exital";
		await $axios.$post("/.netlify/functions/cockpit", "exital").then(res => {
			console.log("done");

			return { town: res.data };
		});
		// this.response = res;
		// this.error = null;
	},
	data() {
		return {
			form: {},
			response: "—",
			error: null,
			ip: null,
			msg: ""
			// town: ""
		};
	},

	methods: {
		async icanhazip(val) {
			try {
				const res = await this.$axios.$post(
					"/.netlify/functions/cockpit",

					val
				);
				this.response = res;
				this.error = null;
			} catch (e) {
				this.error = e.response;
				this.response = "—";
			}
		}
	}
};
</script>