<template>
	<v-content>
		<welcome></welcome>
		<about></about>
		<features></features>
		<stats></stats>
		<blog></blog>
		<booking></booking>
		<instagram></instagram>
	</v-content>
</template>


<script>
import welcome from "~/components/fromTemplate/welcome.vue";
import about from "~/components/fromTemplate/about.vue";
import features from "~/components/fromTemplate/features.vue";
import stats from "~/components/fromTemplate/stats.vue";
import blog from "~/components/fromTemplate/blog.vue";
import booking from "~/components/Booking.vue";
import instagram from "~/components/Instagram.vue";

export default {
	components: {
		welcome,
		about,
		features,
		stats,
		blog,
		booking,
		instagram
	}
};
</script>