<template>
	<div>
		<splash></splash>
		<myWork></myWork>
		<aboutMe></aboutMe>
		<stuff></stuff>
		<knowledge></knowledge>
		<dark></dark>
	</div>
</template>
<script>
import splash from "~/components/sam/splash.vue";
import myWork from "~/components/sam/myWork.vue";
import aboutMe from "~/components/sam/aboutMe.vue";
import stuff from "~/components/sam/stuff.vue";
import knowledge from "~/components/sam/knowledge.vue";
import dark from "~/components/sam/anarchist.vue";
export default {
	data() {
		return {
			location: this.$store.state.developer.location
		};
	},
	components: {
		googleMap: () => import("@/components/maps/googleMap"),
		myWork,
		splash,
		aboutMe,
		stuff,
		knowledge,
		dark
	}
};
</script>