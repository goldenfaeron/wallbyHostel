<template>
	<div>
		<span>
			<v-layout align-center justify-start>
				<v-img contain height="200" width="50" :src="$store.state.assetRoot + props.avatar.path"></v-img>
			</v-layout>
			<v-card class="text-center">
				<h1 class="success--text">{{props.owner}}</h1>
				<v-card-text>
					{{props.preview_text}}
					<!-- Gallery -->
					<v-layout row wrap justify-center mt-2 hidden-sm-and-down>
						<v-flex xs4 v-for="(item, index) in props.gallery" :key="index" v-if="index<3">
							<v-img height="70" width="150" :src="$store.state.webRoot + item.path"></v-img>
						</v-flex>
					</v-layout>
				</v-card-text>

				<!-- button -->
				<v-card-actions>
					<v-container grid-list-xs>
						<v-layout justify-center my-2>
							<v-btn flat class="my-2" :to="'/people/'+props.slug">
								<v-icon>mdi-instagram</v-icon>
								{{props.linked_instagram}}
							</v-btn>
						</v-layout>
					</v-container>
				</v-card-actions>
			</v-card>
		</span>
	</div>
</template>

<script>
export default {
	props: ["props"]
};
</script>