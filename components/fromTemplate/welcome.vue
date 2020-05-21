
<template>
	<div id="hero">
		<v-row>
			<v-img :height="this.windowSize.y-64" :src="'/img/'+$store.state.city +'2.jpg'">
				<v-theme-provider dark>
					<v-container fill-height>
						<v-row align="center" class="white--text mx-auto" justify="center">
							<v-col class="white--text text-center" cols="12" tag="h1">
								<span
									:class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']  + ' font-weight-black text-uppercase'"
								>{{$t('welcome')}}</span>

								<br />

								<div
									:class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4'] + ' font-weight-black text-uppercase'"
								>{{$store.state.city}}</div>
							</v-col>

							<v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about')">
								<v-icon>mdi-chevron-double-down</v-icon>
							</v-btn>
						</v-row>
					</v-container>
				</v-theme-provider>
			</v-img>
		</v-row>
	</div>
</template>
<script>
export default {
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
