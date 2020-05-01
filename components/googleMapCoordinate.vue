<template>
	<div>
		<iframe
			width="100%"
			height="600"
			:src="'https://maps.google.com/maps?q='+props.Lat+','+props.Lng+'&hl=es&z=16&amp;output=embed'"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
		></iframe>
	</div>
</template>

<script>
export default {
	//width=100%&amp;height=600
	props: ["props"]
};
</script>