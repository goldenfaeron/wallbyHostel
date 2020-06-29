<template>
	<div>
		<HotelSplash :props="index"></HotelSplash>
		<HotelAbout :props="index"></HotelAbout>
		<HotelServices :props="index"></HotelServices>
		<HotelExplore :props="index"></HotelExplore>
		<HotelSocial :props="index"></HotelSocial>
		<HotelLocation :props="map"></HotelLocation>
	</div>
</template>
<script>
import { Mixin } from "~/mixins/windowSize.js";
export default {
	mixins: [Mixin],
	data() {
		return {
			index: this.$store.state.pageData[0],
			map: this.$store.state.pageData[1],
			asset: this.$store.state.assetRoot2,
			datepicker: false,
			daypicker: false,
			date: ""
		};
	},
	components: {
		activities: () => import("@/components/cards/CardThing"),
		HotelSplash: () => import("@/components/containers/HotelSplash"),
		HotelAbout: () => import("@/components/containers/HotelAbout"),
		HotelServices: () => import("@/components/containers/HotelServices"),
		HotelExplore: () => import("@/components/containers/HotelExplore"),
		HotelSocial: () => import("@/components/containers/HotelSocial"),
		HotelLocation: () => import("@/components/containers/HotelLocation")
	},
	middleware: "index"
};
</script>