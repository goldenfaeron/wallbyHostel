<template>
	<div>
		<v-container>
			<v-layout column wrap>
				<v-icon large>mdi-access-point</v-icon>
				<br />
				<h3>Hej atje të dashur miq të dashur në Borsh</h3>
				<br />Ne të gjithë e dimë se kohërat janë të vështira ekonomikisht tani me ndikimin e bllokimit të Coronavirus.
				Unë kam krijuar këtë faqe interneti dhe aplikacion
				<br />
				<br />për të promovuar fshatin Borsh për vizitorët dhe turistët dhe për të ndihmuar bizneset vendore të bashkëpunojnë dhe reklamojnë së bashku.
				<br />
				<br />Qëllimi është që të kemi një faqe në internet,
				<br />ku vizitorët mund të shohin se borsh është e hapur dhe e gjallë me njerëz miqësorë, hotele cilësore, aktivitete argëtuese verore dhe kafene të njohura.
				<br />
				<br />Ndërsa sezoni do të fillojë në fund të këtij viti,
				<br />të gjithë ne mund të bëjmë një përpjekje për të maksimizuar fitimet tona të verës, kur të hiqet bllokimi dhe të vijnë turistët.
				Duke u bërë thirrje të gjithë banorëve të Borsh dhe pronarëve të bizneseve që të bashkëpunojnë dhe të ngarkojnë fotografi në Instagram
				<br />
				<br />
				<v-icon large>mdi-instagram</v-icon>
				<br />
				<h3>Si?</h3>Bëni foto të bukura nga vendet, njerëzit, plazhet, natyra dhe kafenetë brenda dhe përreth Borsh dhe ngarkoni ato në
				<br />
				<Instagram class="br"></Instagram>Postdo postim në Instagram duhet të ketë etiketën
				<b>#goborshi</b>
				<br />

				<br />Argëtohu
				<br />
				<nuxt-link :to="'/'+$store.state.developer.name">
					<i>{{$store.state.developer.name}}i</i>
				</nuxt-link>
			</v-layout>
		</v-container>
	</div>
</template>