<template>
	<section id="blog">
		<div class="py-12"></div>

		<v-container>
			<h2
				class="display-2 font-weight-bold mb-3 text-uppercase text-center"
			>Whats happening in {{$store.state.city}}</h2>

			<v-responsive class="mx-auto mb-12" width="56">
				<v-divider class="mb-1"></v-divider>
			</v-responsive>

			<v-row>
				<v-col v-for="({ src, text, title }, i) in articles" :key="i" cols="12" md="4">
					<v-img :src="'/img/'+$store.state.city +'Blog'+i+'.jpg'" max-height="200"></v-img>

					<h3 class="font-weight-black mb-4 text-uppercase" v-text="title"></h3>

					<div class="title font-weight-light mb-5" v-text="text"></div>

					<v-btn class="ml-n4 font-weight-black" text>Continue Reading</v-btn>
				</v-col>
			</v-row>
		</v-container>

		<div class="py-12"></div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			articles: [
				{
					title: "Classy hotels for the wealthy",
					text:
						"Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
				},
				{
					title: "Swimming pools by the beach",
					text:
						"Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
				},
				{
					title: "Small changes, big difference",
					text:
						"Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."
				}
			]
		};
	}
};
</script>