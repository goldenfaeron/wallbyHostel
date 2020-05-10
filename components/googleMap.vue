<template>
	<div>
		<iframe
			width="100%"
			:height="[$vuetify.breakpoint.smAndUp ? '600px' : '200px']"
			:src="'https://maps.google.com/maps?width=100%&amp;height=900&amp;hl=en&amp;q='+props+'()&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
		></iframe>
	</div>
</template>

<script>
export default {
	props: ["props"]
};
</script>