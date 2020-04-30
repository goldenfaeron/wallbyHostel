<template>
	<div>
		<v-container grid-list-lg>
			<v-layout>
				<!-- <v-flex xs12>
					<UserRegistrations></UserRegistrations>
				</v-flex>
			</v-layout>
			<v-layout>
				<v-timeline align-top>
					<v-timeline-item
						v-for="(item, i) in items"
						:key="i"
						:color="item.color"
						:icon="item.icon"
						fill-dot
					>
						<v-card :color="item.color" dark>
							<v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
							<v-card-text class="white text--primary">
								<p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
								<v-btn :color="item.color" class="mx-0" outline>Button</v-btn>
							</v-card-text>
						</v-card>
					</v-timeline-item>
				</v-timeline>-->
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	components: {
		UserRegistrations: () => import("@/components/UserRegistrations")
	},
	data: () => ({
		items: [
			{
				color: "red lighten-2",
				icon: "mdi-instagram"
			},
			{
				color: "purple darken-1",
				icon: "mdi-youtube"
			},
			{
				color: "green lighten-1",
				icon: "mdi-key-variant"
			},
			{
				color: "indigo",
				icon: "mdi-currency-usd"
			}
		]
	})
};
</script>