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
				<v-card-title class="headline grey lighten-2" primary-title>{{$store.state.name}}</v-card-title>

				<iframe width="100%" height="600" :src="props" frameborder="0" scrolling="no" allowfullscreen></iframe>
				<v-divider></v-divider>

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