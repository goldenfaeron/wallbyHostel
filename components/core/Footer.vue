<template>
	<footer class="v-footer v-sheet v-sheet--tile theme--dark v-footer--padless" data-booted="true">
		<v-layout row wrap>
			<v-flex lg6>
				<div style="background-color: #000000;">
					<v-img :height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3*2/5 : (this.windowSize.y)*2/3]">
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<p :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']">
											Kex Hostel — Skúlagata 28
										</p>
										<p :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']">
											101 Reykjavík Iceland
										</p>
										<p :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']">
											+354 561 6060
										</p>
							
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-img>
				</div>
			</v-flex>
			<v-flex lg6>
				<div style="background-color: #b7b181;">
					<v-img :height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3*2/5 : (this.windowSize.y)*2/3]">
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<p :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']">
											<a class="ex1">Contact Us</a>
										</p>
										<p :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']">
											<a class="ex1">Terms & Conditions</a>
										</p>
										<p :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']">
											<a class="ex1">Info@kexhostel.is</a>
										</p>
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-img>
				</div>
			</v-flex>
		</v-layout>
		<div
			class="text-center  pa-3 col col-12"
		>© 2020 {{$store.state.name}} — All Rights reserved.</div>
	</footer>
</template>
<style lang="css">
a {
	text-decoration: none;
}
a.ex1 {
	color: black ;
}
a.ex1:hover,
a.ex1:active {
	color: white;
}
</style>
<script>
import { Mixin } from "~/mixins/navigation.js";

export default {
	mixins: [Mixin],

	components: {
		SocialMedia: () => import("@/components/SocialMedia")
	},
	data: () => ({
		windowSize: {
			x: 0,
			y: 0
		}
	}),
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
