<template>
	<div>
		<v-container>
			<v-layout column wrap class="text">
				<v-img :src="require('@/static/img/sam.png')"></v-img>
				<br />
				<v-icon large>mdi-hand-peace</v-icon>
				<br />
				<h3>Hej atje të dashur miq të dashur në Borsh</h3>
				<br />Ne të gjithë e dimë se kohërat janë të vështira ekonomikisht tani me ndikimin e bllokimit të Coronavirus.
				Unë kam krijuar këtë faqe interneti dhe aplikacion
				për të promovuar fshatin Borsh për vizitorët dhe turistët dhe për të ndihmuar bizneset vendore të bashkëpunojnë dhe reklamojnë së bashku.
				<br />
				<br />
				<v-icon large>mdi-cash-usd</v-icon>
				<br />
				<br />Qëllimi është që të kemi një faqe në internet,
				<br />ku vizitorët mund të shohin se borsh është e hapur dhe e gjallë me njerëz miqësorë, hotele cilësore, aktivitete argëtuese verore dhe kafene të njohura.
				<br />
				<br />
				<v-icon large>mdi-image-edit-outline</v-icon>

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
				<br />
				<v-card>
					<br />
					<v-icon large>mdi-code-braces</v-icon>
					<br />

					<v-card-text>
						<i>Ju lutem mbani mend. Kjo faqe në internet aktualisht është në fazat e hershme të zhvillimit dhe nuk është lëshuar zyrtarisht. Disa funksione në uebfaqe mund të mos funksionojnë ose të duken të papërfunduara. Sajti do të rritet dhe ndryshon çdo ditë pasi unë dhe ekipi im profesional bëjmë punën që duam.</i>
						<br />
						<nuxt-link :to="'/'+$store.state.developer.name">
							<i>{{$store.state.developer.name}}i</i>
						</nuxt-link>
					</v-card-text>
				</v-card>
			</v-layout>
		</v-container>
	</div>
</template>

<style lang="css" scoped>
* {
	text-align: center;
}
</style>