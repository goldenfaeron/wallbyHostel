<template>
	<section id="features">
		<div class="py-12"></div>

		<v-container class="text-center">
			<h2 class="display-2 font-weight-bold mb-3">This is life in {{$store.state.city}}</h2>

			<v-responsive class="mx-auto mb-12" width="56">
				<v-divider></v-divider>
			</v-responsive>

			<v-layout row wrap>
				<v-flex xs12 lg4 v-for="({ image, title, text }, i) in features" :key="i" cols="12" md="4">
					<v-card class="py-12 px-4" flat>
						<v-theme-provider dark>
							<div>
								<v-img :src="'/img/'+$store.state.city +'Features'+i+'.jpg'" max-height="200"></v-img>
							</div>
						</v-theme-provider>

						<v-card-title
							class="justify-center font-weight-black text-uppercase"
							style="overflow-wrap: anywhere; word-wrap: break-word; word-break: normal; hyphens: auto;"
							v-text="title"
						></v-card-title>

						<v-card-text class="subtitle-1" v-text="text"></v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</section>
</template>
<script>
export default {
	data() {
		return {
			features: [
				{
					image: "mdi-account-group-outline",
					title: "Clean and friendly service",
					text:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
				},
				{
					image: "mdi-update",
					title: "Swimming everyday by the pool",
					text:
						"Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."
				},
				{
					image: "mdi-shield-outline",
					title: "Long-term Support",
					text:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
				}
			]
		};
	}
};
</script>