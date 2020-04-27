<template>
	<div>
		<v-dialog v-model="dialog" width="100%" height="810px">
			<template v-slot:activator="{ on }">
				<v-container grid-list-lg>
					<v-layout row wrap>
						<v-flex xs12>
							<v-img @click="dialog=true" height="200" width="200" :src="require('@/assets/miro.png')"></v-img>
							<br />

							<v-btn color="red lighten-2" dark v-on="on">Open Miro Preview</v-btn>
						</v-flex>
					</v-layout>
				</v-container>
			</template>

			<v-card>
				<v-card-title class="headline secondary lighten-2" primary-title>{{$store.state.name}} Concept</v-card-title>

				<iframe width="100%" height="600" :src="props" frameborder="0" scrolling="no" allowfullscreen></iframe>
				<v-divider></v-divider>
				<v-card-title primary-title>
					<v-icon>mdi-projector-screen</v-icon>Click the box to activate Miro preview
				</v-card-title>
				<v-card-text>
					<p>
						This is a demonstration made on the application Realtime Board which I use for collaborative teaching, graphic design, project managment and workflow visualisation, among many other things. The application allows us to easily draw, write, add images, create diagrams and much more, all on an endless scalable canvas.
						Pretty cool huh? and I'm sure it got your interest, so get in contact and let's start learning!
					</p>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" flat @click="dialog = false">Close</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	props: ["props"],
	data() {
		return {
			dialog: false
		};
	}
};
</script>