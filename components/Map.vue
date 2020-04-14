<template>
	<div>
		<iframe
			width="100%"
			height="300"
			:src="'https://maps.google.com/maps?width=100%&amp;height=900&amp;hl=en&amp;q='+location+'()&amp;ie=UTF8&amp;t=&amp;z='+zoom+'&amp;&amp;output=embed'"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
		></iframe>
	</div>
</template>

<script>
export default {
	props: {
		location: String,
		zoom: Number
	}
};
</script>
