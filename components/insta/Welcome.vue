<template>
	<div>
		<v-layout justify-center>
			<v-icon size="150" color="black">mdi-instagram</v-icon>
		</v-layout>

		<div align="center">
			<p class="display-3 font-weight-medium">Post on Goborshi with your instagram</p>
			<v-flex lg10>
				<p
					class="headline"
				>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
			</v-flex>
			<br />
			<div class="display-1 font-weight-medium fade-in">
				<p>#barilliri</p>
				<p>#sumukelele</p>
				<p>#consequad</p>
				<p>#Duis aute</p>
				<p>#irure</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			dialog: false
		};
	}
};
</script>
<style lang="css">
.fade-in {
	animation: fadeIn ease 2s;
	-webkit-animation: fadeIn ease 2s;
	-moz-animation: fadeIn ease 2s;
	-o-animation: fadeIn ease 2s;
	-ms-animation: fadeIn ease 2s;
}
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-moz-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-webkit-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-o-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-ms-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>