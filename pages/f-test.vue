
<template>
	<div>
		<p>Response: {{ response }}</p>
		{{entries}}
	</div>
</template>
<script>
export default {
	//load data
	async mounted() {
		let collection = "airbnb";
		let fields = { slug: 1, name: 1, _id: 0 };
		let skip = 4;
		let limit = 1;

		try {
			console.log("request made");

			const res = await this.$axios.$post(
				"/.netlify/functions/cockpit?name=" +
					collection +
					"&skip=" +
					skip +
					"&limit=" +
					limit +
					"",

				fields
			);

			this.response = res;
			this.error = null;
		} catch (e) {
			this.error = e.response;
			this.response = "—";
		}
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

	computed: {
		filterCollection() {
			let collection = "airbnb";
			let fields = { slug: 1, name: 1 };
			let skip = 1;

			return { c: collection, f: fields, s: skip };
		}
	},

	methods: {
		async icanhazip(vals) {
			let f = this.filterCollection;
			try {
				console.log("request made");

				const res = await this.$axios.$post(
					"/.netlify/functions/cockpit?name=" + f.c + "&skip=" + f.s + "",

					vals
				);
				this.response = res;
				this.error = null;
			} catch (e) {
				this.error = e.response;
				this.response = "—";
			}
		},
		async hello(vals) {
			try {
				console.log("request made");

				const res = await this.$axios.$get(
					"/.netlify/functions/hello-world/hello-world?name=boobs",

					vals
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