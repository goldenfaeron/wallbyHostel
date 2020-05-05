<template>
	<section id="about">
		<div class="py-12"></div>

		<v-container class="text-center">
			<h2
				class="display-2 font-weight-bold mb-3"
			>Let's give Paradise a new name: {{$store.state.city.toUpperCase()}}</h2>

			<v-responsive class="mx-auto mb-8" width="56">
				<v-divider class="mb-1"></v-divider>
			</v-responsive>

			<v-responsive
				class="mx-auto title font-weight-light mb-8"
				max-width="720"
			>Borsh Beach is quite simply one of the most tranquil coastlines on the Southern Riviera. A picture-perfect paradise to spend your summer days the right way. .</v-responsive>
		</v-container>
	</section>
</template>