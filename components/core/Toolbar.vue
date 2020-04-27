<template>
<section>
  
<span style="position: fixed;
  top: 3;
  width: 100%;">
<v-layout justify-end="">
  
			<SocialMedia />
</v-layout>

</span>
</section>



</template>

<script>
export default {
	components: {
		SocialMedia: () => import("@/components/SocialMedia")
	}
};
</script>
