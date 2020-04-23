<template>
	<div class="text-xs-center">
		<h1>Aktuelle projekte mit {{this.$route.query.s}}</h1>

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
					width="100%"
					height="400px"
					src="https://miro.com/app/embed/o9J_kt8HHpE=/?&pres=1&animate=1"
					frameborder="0"
					scrolling="no"
					allowfullscreen
				></iframe>
				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" flat @click="dialog = false">
						<v-icon>mdi-thumb-up</v-icon>Awesome
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>


<script>
export default {
	data() {
		return {
			dialog: false,
			felix:
				"Felix und ich arbeiten jetzt zusammen an der ganzen App Design zusammenarbeiten. Felix mit seinem 'kreatives Talent und seine künstlerischen Fähigkeiten nutzen, um einige wirklich coole Seiten auf der Website zu erstellen, um meine Kunst und seine Kunst zu zeigen und auch um eine wirklich zu schaffen wirklich schön aussehende Website, die Charakter und Stil hat",
			henk: ""
		};
	}
};
</script>

<style lang="css" scoped>
h1,
h2,
h3,
h4,
h5,
p {
	text-align: center;
}
</style>
