
<template>
	<div>
		{{msg}}
		<h2>5. icanhazip.com</h2>
		<p>
			<em>API call done by lambda function</em>
		</p>
		<p>Your IP: {{ ip }}</p>
		<v-btn type="primary" @click="icanhazip()">🤖 Haz AWS IP please</v-btn>

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
	data() {
		return {
			form: {},
			response: "—",
			error: null,
			ip: null,
			msg: ""
		};
	},

	methods: {
		async icanhazip() {
			try {
				const res = await this.$axios.$get("/.netlify/functions/cockpit");
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