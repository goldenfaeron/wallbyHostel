<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">Borsh on Instagram</h1>
		<welcome></welcome>
		<Preview></Preview>
	</div>
</template>

<script>

export default {
	components: {
		Welcome: () => import("@/components/insta/Welcome"),
		Preview: () => import("@/components/insta/Preview"),

	}
};
</script>