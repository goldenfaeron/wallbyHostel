<template>
	<div>
		<welcome></welcome>
		<about></about>
		<features></features>
		<stats></stats>
		<blog></blog>
		<instagram></instagram>
		<br />
		<booking></booking>
		<br />
		<airbnb></airbnb>
		<br />
		<bars></bars>
	</div>
</template>


<script>
import welcome from "~/components/fromTemplate/welcome.vue";
import about from "~/components/fromTemplate/about.vue";
import features from "~/components/fromTemplate/features.vue";
import stats from "~/components/fromTemplate/stats.vue";
import blog from "~/components/fromTemplate/blog.vue";
import booking from "~/components/Booking.vue";
import instagram from "~/components/Instagram.vue";
import airbnb from "~/components/airbnb.vue";
import bars from "~/components/bars.vue";

export default {
	components: {
		welcome,
		about,
		features,
		stats,
		blog,
		booking,
		instagram,
		airbnb,
		bars
	}
};
</script>