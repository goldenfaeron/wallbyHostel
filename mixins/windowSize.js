
export const Mixin = {

    data() {
        return {
            asset: this.$store.state.assetRoot2,
            windowSize: {
				x: 0,
				y: 0
			},
        }
    },
    methods: {
		onResize() {
			this.windowSize = { x: window.innerWidth, y: window.innerHeight };
		}
	},
	mounted() {
		this.onResize();
	}
}
