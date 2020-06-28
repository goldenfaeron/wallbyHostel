<template>
	<div>

		<Splash :props="about"></Splash>
		<BlockImage :props="about"> </BlockImage>
		<ImageBlock :props="about"> </ImageBlock>
	


	
	
	</div>
</template>
<script>
import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
		components: {
		Splash: () => import("@/components/wallaby/Splash"),
			BlockImage: () => import("@/components/wallaby/Block-Image"),
			ImageBlock: () => import("@/components/wallaby/Image-Block"),
	},
	data() {
		return {
		
			about: this.$store.state.pageData[0],
			map: this.$store.state.pageData[1],
			asset: this.$store.state.assetRoot2
		};
	},
	middleware: "about",


};
</script>
