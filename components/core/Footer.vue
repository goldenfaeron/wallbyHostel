<template>
	<footer class="v-footer v-sheet v-sheet--tile theme--dark v-footer--padless" data-booted="true">
		<v-layout row wrap>
			<v-flex lg6>
				<div style="background-color: #000000;">
					<v-container
						:style="'height:'+[$vuetify.breakpoint.smAndDown ? ' auto;' : (this.windowSize.y)*2/3]+'px;'"
					>
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height mx-5 px-5>
								<div class="text" style="text-align: center;">
									<p
										:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
									>{{footer.name}}Wallaby Hostel</p>
									<p
										:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
									>Rruga Pandeli Bocari 9701, Albania</p>
									<p :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']">+012 345 6789</p>
								</div>
							</v-layout>
						</v-container>
					</v-container>
				</div>
			</v-flex>
			<v-flex lg6>
				<div style="background-color: #b7b181;">
					<v-container
						:style="'height:'+[$vuetify.breakpoint.smAndDown ? ' auto;' : (this.windowSize.y)*2/3]+'px;'"
					>
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height mx-5 px-5>
								<div class="text" style="text-align: center;">
									<nuxt-link to="contact">
										<v-hover>
											<div
												style="text-decoration: none;"
												slot-scope="{ hover }"
												@click="menu= false"
												:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']+[hover ? ' black--text' : ' white--text'] + ' text--lighten-3'"
											>Contact us</div>
										</v-hover>
									</nuxt-link>
									<!-- <nuxt-link to="">
										<v-hover>
											<div
												style="text-decoration: none;"
												slot-scope="{ hover }"
												@click="menu= false"
												:class="[$vuetify.breakpoint.mdAndDown ? 'headline' : 'display-2']+[hover ? ' black--text' : ' white--text'] + ' text--lighten-3'"
											>Terms & Conditions</div>
										</v-hover>
									</nuxt-link> -->
									<nuxt-link to="">
										<v-hover>
											<div
												style="text-decoration: none;"
												slot-scope="{ hover }"
												@click="menu= false"
												:class="[$vuetify.breakpoint.mdAndDown ? 'headline' : 'display-2']+[hover ? ' black--text' : ' white--text'] + ' text--lighten-3'"
											>info@wallabyhostel.com</div>
										</v-hover>
									</nuxt-link>
								</div>
							</v-layout>
						</v-container>
					</v-container>
				</div>
			</v-flex>
		</v-layout>
		<div class="text-center pa-3 col col-12">
			© 2020 {{$store.state.name}} —
			<a
				class="ex2"
				href="https://goborshi.netlify.app/team"
				target="_blank"
			>Developers</a>
		</div>
	</footer>
</template>
<style lang="css">
a.ex1 {
	color: black;
}
a.ex1:hover,
a.ex1:active {
	color: white;
}

a.ex2 {
	color: white;
}
a.ex2:hover,
a.ex2:active {
	color: #b7b181;
}
</style>
<script>
import { Mixin } from "~/mixins/navigation.js";

export default {
	data() {
		return {
			windowSize: {
				x: 0,
				y: 0
			},
			footer: this.$store.state.footerData
		};
	},
	middleware: "businessDetails",

	mixins: [Mixin],

	components: {
		SocialMedia: () => import("@/components/SocialMedia")
	},

	methods: {
		onResize() {
			this.windowSize = { x: window.innerWidth, y: window.innerHeight };
		}
	},
	mounted() {
		this.onResize();
	}
};
</script>
