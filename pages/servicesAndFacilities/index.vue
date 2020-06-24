<template>
    <div>
        {{services}}
    </div>
</template>
<script>
export default {
	data() {
		return {
			windowSize: {
				x: 0,
				y: 0
			},
			services: this.$store.state.pageData[0],
			map: this.$store.state.pageData[1],
			asset: this.$store.state.assetRoot2
		};
	},
	middleware: "services_and_facilities",

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
