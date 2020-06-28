<template lang="">
    <div>
        <v-container fluid fill-height class="ma-0 pa-0">
			<v-img :style="'height:'+(this.windowSize.y)*2/3+'px'">
				<div style="width: 100%">
					<iframe
						width="100%"
						:height="(this.windowSize.y)*2/3"
						:src="'https://maps.google.com/maps?hl=en&amp;coord='+props.location+'&amp;q=wallaby%20hostel%20albania&amp;ie=UTF8&amp;t=&amp;z=19&amp;iwloc=B&amp;output=embed'"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
					></iframe>
				</div>
				<br />
			</v-img>
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