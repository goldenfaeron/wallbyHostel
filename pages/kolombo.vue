<template>
	<div>
		<!-- 
		-->

		<v-img :src="require('@/static/img/putin.jpg')"></v-img>

		<div class="text-xs-center">
			<v-dialog v-model="dialog" width="100%" height="810px">
				<template v-slot:activator="{ on }">
					<v-container grid-list-lg>
						<v-layout row wrap justify-center=" " align-center>
							<v-flex xs12>
								<v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
							</v-flex>
						</v-layout>
					</v-container>
				</template>

				<v-card>
					<v-card-title class="headline grey lighten-2" primary-title>
						<v-icon>mdi-ghost</v-icon>
						A creative work from
						{{$store.state.developer.name}}
					</v-card-title>

					<v-card-text>
						<br />Graphic Design
						Development and design go hand in hand.
						If you are the creative type then you will want your website, platform or project to unique and expressive. After all, it's your brainchild.
						We teach you the latest design programs, technologies and practice for colorful minds to kick-start their own brands and designs.
						You will be making fly designs in no time which can be transformed into websites, social media, business cards, posters and marketing videos and campaigns.
					</v-card-text>
					<iframe
						src="https://miro.com/app/embed/o9J_kt_5_XU=/?"
						frameborder="0"
						height="800px"
						width="100%"
						scrolling="no"
						allowfullscreen
					></iframe>
					<v-divider></v-divider>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>
		<iframe
			height="265"
			style="width: 100%;"
			scrolling="no"
			title="Russian Matrix"
			src="https://codepen.io/igor_agapov/embed/ZEEPRba?height=265&theme-id=light&default-tab=js,result"
			frameborder="no"
			allowtransparency="true"
			allowfullscreen="true"
			loading="lazy"
		>
			See the Pen
			<a href="https://codepen.io/igor_agapov/pen/ZEEPRba">Russian Matrix</a> by Harry Heman
			(
			<a href="https://codepen.io/igor_agapov">@igor_agapov</a>) on
			<a href="https://codepen.io">CodePen</a>.
		</iframe>
	</div>
</template>


<script>
export default {
	data() {
		return {
			dialog: false
		};
	}
};
</script>

