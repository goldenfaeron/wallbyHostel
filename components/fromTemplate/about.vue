<template>
	<section id="about">
		<div class="py-12"></div>

		<v-container class="text-center">
			<h2 class="display-2 font-weight-bold mb-3">
				{{$t('subtitle')}}
				{{$store.state.city}}, {{$store.state.country}}
			</h2>

			<v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
				{{$store.state.city}}{{$t('subtext')}}
				<v-responsive class="mx-auto mb-8" width="56"></v-responsive>
				<v-divider class="mb-1"></v-divider>
				<v-responsive class="mx-auto mb-8" width="56"></v-responsive>
				<b>
					{{$store.state.name}} {{$t('subaction')}}
					{{$store.state.city}}
				</b>
				<v-icon x-large>mdi-chevron-down</v-icon>
			</v-responsive>
		</v-container>
	</section>
</template>
