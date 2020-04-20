<template>
	<section id="about">
		<div class="py-12"></div>

		<v-container class="text-center">
			<h2 class="display-2 font-weight-bold mb-3">LET’S GIVE PARADISE A NEW NAME: {{$store.state.city}}</h2>

			<v-responsive class="mx-auto mb-8" width="56">
				<v-divider class="mb-1"></v-divider>

				<v-divider></v-divider>
			</v-responsive>

			<v-responsive
				class="mx-auto title font-weight-light mb-8"
				max-width="720"
			>Borsh Beach is quite simply one of the most tranquil coastlines on the Southern Riviera. A picture-perfect paradise to spend your summer days the right way. Imagine if you will, the most stunning shades of ultramarine and turquoise that a sea could possibly possess. Now, frame this shimmering seascape with olive groves. Listen to the sounds of the waves softly hitting the pebbles on the shore. Take a deep breath and smell the calming scent of the salt of the sea. Look in front of you. You are at one of the most idyllic beaches in Albania: Borsh, on the Southern Coast.</v-responsive>

			<v-avatar class="elevation-12 mb-12" size="128">
				<v-img :src="'/img/'+$store.state.country +'.png'"></v-img>
			</v-avatar>

			<div></div>

			<v-btn color="grey" href="https://vuetifyjs.com" outlined large>
				<span class="grey--text text--darken-1 font-weight-bold">Vuetify Documentation</span>
			</v-btn>
		</v-container>

		<div class="py-12"></div>
	</section>
</template>