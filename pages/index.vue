<template>
	<div>
		<v-layout row wrap>
			<v-flex lg6>
				<div class="logo"></div>

				<div class="welcome box vcenter eq matched pinged loaded">
					<v-img
						height="550px"
						src="https://www.kexhostel.is/media/box-covers/halfcol-wide/3yiffh3h.jpg"
					></v-img>
				</div>
			</v-flex>

			<v-flex lg6></v-flex>
		</v-layout>
	</div>
</template>

<style >
.logo {
	background-color: #6db3f2;
	display: block;
	margin: auto;
	background: url(https://www.kexhostel.is/media/svg-icon/kex-big.svg) no-repeat
		center;
	height: 50%;
	width: 50%;
}
</style>
<script>
export default {
	theme: {
		dark: true
	}
};
</script>