<template>
<v-content>
	<welcome></welcome>
	<about></about>
	<features></features>
	<stats></stats>
	<blog></blog>
	<contact></contact>
</v-content>
</template>


<script>
import welcome from "~/components/fromTemplate/welcome.vue";
import about from "~/components/fromTemplate/about.vue";
import features from "~/components/fromTemplate/features.vue";
import stats from "~/components/fromTemplate/stats.vue";
import blog from "~/components/fromTemplate/blog.vue";
import contact from "~/components/fromTemplate/contact.vue";

export default {
	components: {
		welcome,
		about,
		features,
		stats,
		blog,
		contact,
	}
};
</script>