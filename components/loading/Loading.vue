<template lang="html">
  <div class="loading-page" v-if="loading">
    <!-- <p>Loading...</p> -->
<div class="lds-dual-ring"></div>
  </div>
</template>

<script>
export default {
	data: () => ({
		loading: false
	}),
	methods: {
		start() {
			this.loading = true;
		},
		finish() {
			this.loading = false;
		}
	}
};
</script>

<style scoped lang="css">
.loading-page {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.8);
	text-align: center;
	padding-top: 200px;
	font-size: 30px;
	font-family: sans-serif;
	z-index: 5;
}
.lds-dual-ring {
	color: red;
	display: inline-block;
	width: 80px;
	height: 80px;
	z-index: 5;
}
.lds-dual-ring:after {
	color: red;
	content: " ";
	display: block;
	width: 64px;
	height: 64px;
	margin: 8px;
	border-radius: 50%;
	border: 6px solid #fff;
	border-color: blue transparent blue;
	animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>