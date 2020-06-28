<template>
	<div>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-layout align-center justify-center row fill-height>
					<v-layout column class="white--text text-center">
						<br />
						<p
							:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-3']  + ' font-weight-bold'"
							style="text-align:center; "
						>{{props.section2_title}}</p>
						<p
							:class="[$vuetify.breakpoint.smAndDown ? 'title' : 'display-2']  + ' font-weight-bold '"
							style="text-align:center; "
						>{{props.section2_subtitle}}</p>
						<br />
						<div class="text">
							<p
								:class="[$vuetify.breakpoint.smAndDown ? 'body-2' : 'headline']  + ' font-weight-bold ma-5 pa-5'"
								style="text-align:center; "
							>{{props.section2_text}}</p>
							<v-btn class="black--text" color="secondary lighten-1">{{props.section2_buttonText}}</v-btn>
						</div>
						<br />
					</v-layout>
				</v-layout>
			</v-layout>
		</v-container>
	</div>
</template>


<script>
export default {
	props: ["props"],
	data() {
		return {
			windowSize: {
				x: 0,
				y: 0
			},
			asset: this.$store.state.assetRoot2
		};
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