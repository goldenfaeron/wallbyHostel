<template>
	<div class="v-responsive v-image" style="height: 70vh;">
		<div class="v-responsive__sizer" style="padding-bottom: 66.5049%;"></div>
		<div
			class="v-image__image v-image__image--cover"
			style="background-image: linear-gradient(to top, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(https://goborshi.netlify.app/_nuxt/img/ddfb555.png); background-position: center center;"
		></div>
		<div class="v-responsive__content" style="width: 1442px;">
			<div class="container container--fluid fill-height px-12">
				<div align-center class="row">
					<div class="col" style="transform-origin: center top 0px;">
						<h1
							class="text-uppercase font-weight-bold mb-4 display-3"
						>Hi, I'm {{$store.state.developer.name}}</h1>
						<div class="mb-4 display-2 font-weight-light">I am a Software Engineer</div>
						<div class="v-responsive mb-5" style="max-width: 600px;">
							<div class="v-responsive__content">I live in {{$store.state.developer.location}}</div>
						</div>
						<button type="button" class="px-5 v-btn v-btn--contained theme--light v-size--large primary">
							<span class="v-btn__content">Hire Me</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>