<template>
	<div>
		<Splash :props="rooms"></Splash>
		<BlockImage1 :props="rooms"></BlockImage1>
		<FullColImage :props="rooms"></FullColImage>
		<ImageBlock1 :props="rooms"></ImageBlock1>
		<BlockImage2 :props="rooms"></BlockImage2>
		<ImageBlock2 :props="rooms"></ImageBlock2>
		<BlockImage3 :props="rooms"></BlockImage3>
		<ImageBlock3 :props="rooms"></ImageBlock3>
	</div>
</template>
<script>
export default {
	data() {
		return {
			rooms: this.$store.state.pageData[0],
			map: this.$store.state.pageData[1],
			asset: this.$store.state.assetRoot2
		};
	},
	middleware: "rooms_and_rates",
	components: {
		Splash: () => import("@/components/rooms-and-rates/Splash"),
		BlockImage1: () => import("@/components/rooms-and-rates/Block-Image1"),
		BlockImage2: () => import("@/components/rooms-and-rates/Block-Image2"),
		BlockImage3: () => import("@/components/rooms-and-rates/Block-Image3"),
		ImageBlock1: () => import("@/components/rooms-and-rates/Image-Block1"),
		ImageBlock2: () => import("@/components/rooms-and-rates/Image-Block2"),
		ImageBlock3: () => import("@/components/rooms-and-rates/Image-Block3"),
		FullColImage: () => import("@/components/rooms-and-rates/Full-Col-Image")
	}
};
</script>