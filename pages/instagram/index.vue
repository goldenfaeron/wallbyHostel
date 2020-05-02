<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">Borsh on Instagram</h1>
		<welcome />
		<Preview />
		<br />
		<Promote />
		<br />
		<instagram />
		<br />
		<app />
		<br />
		<Restaurants />
		<br />
		<presece />
		<br />
		<Start />
	</div>
</template>

<script>
export default {
	components: {
		Welcome: () => import("@/components/insta/Welcome"),
		Preview: () => import("@/components/insta/Preview"),
		Promote: () => import("@/components/insta/Promote"),
		Instagram: () => import("@/components/insta/Instagram"),
		App: () => import("@/components/insta/App"),
		Restaurants: () => import("@/components/insta/Restaurants"),
		Presence: () => import("@/components/insta/Presence"),
		Start: () => import("@/components/insta/Start")
	}
};
</script>