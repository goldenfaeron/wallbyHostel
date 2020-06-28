<template>
	<div>
		<v-container>
			<v-form v-model="valid" ref="form" lazy-validation>
				<v-text-field label="Your Name" v-model="name" :rules="nameRules" :counter="10" value light outlined required></v-text-field>
				<v-text-field label="Your Email" v-model="email" :rules="emailRules" value light outlined required></v-text-field>
				<!-- <v-text-field type="password" label="" v-model="password" :rules="emailRules" required></v-text-field> -->
				<v-select light
                outlined
					label="Dorm Type"
					v-model="select"
					:items="items"
					:rules="[v => !!v || 'Item is required']"
					required
				></v-select>

				<v-textarea label="Your message to us" v-model="message" auto-grow value light outlined required></v-textarea>

				<v-checkbox light
					label="I agree for my personal information given here to be store on the site database"
					v-model="checkbox"
					:rules="[v => !!v || 'You must agree to continue!']"
					required
				></v-checkbox>

				<nuxt-link to="/lol">
					<v-btn
						x-large
						color="secondary lighten-2"
						class="white--text"
						@click="submit"
						:disabled="!valid"
					>Send</v-btn>
					<!-- <v-btn @click="clear">clear</v-btn> -->
				</nuxt-link>
			</v-form>
		</v-container>
	</div>
</template>
		
        <script>
import axios from "axios";

import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	data: () => ({
		valid: false,
		name: "",
		nameRules: [
			v => !!v || "Name is required",
			v => (v && v.length <= 10) || "Name must be less than 10 characters"
		],
		email: "",
		emailRules: [
			v => !!v || "E-mail is required",
			v =>
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
				"E-mail must be valid"
		],
		select: null,
		items: ["8 Bed Mixed", "4 Bed Mixed", "5 Bed Female", "Private"],
        checkbox: false,
        message: ""
	}),

	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				// Native form submission is not yet supported
				axios.post("/api/submit", {
					name: this.name,
					email: this.email,
					select: this.select,
					checkbox: this.checkbox
				});
			}
		},
		clear() {
			this.$refs.form.reset();
		}
	}
};
</script>
	